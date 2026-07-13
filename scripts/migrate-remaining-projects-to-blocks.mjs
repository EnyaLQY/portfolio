import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const projectsDir = path.join(root, "src", "content", "projects");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function write(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function cleanText(value) {
  return value
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function esc(value) {
  return `"${String(value || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function fmValue(frontmatter, key) {
  const m = frontmatter.match(new RegExp(`^${key}:\\s*"([\\s\\S]*?)"\\s*$`, "m"));
  return m ? m[1] : "";
}

function fmBool(frontmatter, key, defaultValue = true) {
  const m = frontmatter.match(new RegExp(`^${key}:\\s*(true|false)\\s*$`, "m"));
  if (!m) return defaultValue;
  return m[1] === "true";
}

function extractAllImages(html) {
  const out = [];
  const regex = /<img\s+src="([^"]+)"/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    out.push(match[1].trim());
  }
  return [...new Set(out)];
}

function extractHeroImages(html) {
  const slider = html.match(/<div class="portfolio-details-slider[\s\S]*?<div class="swiper-pagination"><\/div>[\s\S]*?<\/div>/i);
  if (!slider) return [];
  return extractAllImages(slider[0]);
}

function extractInfoFields(html) {
  const info = {};
  const infoBlock = html.match(/<div class="portfolio-info">[\s\S]*?<\/div>/i);
  if (!infoBlock) return info;

  const liRegex = /<li>\s*<strong>([\s\S]*?)<\/strong>\s*:\s*([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = liRegex.exec(infoBlock[0])) !== null) {
    const key = cleanText(match[1]).toLowerCase();
    const value = cleanText(match[2]);
    info[key] = value;
  }

  return {
    client: info.client || "",
    teamMembers: info["team members"] || "",
    role: info.position || "",
    tools: info["developing tools"] || info.tools || ""
  };
}

function extractWebsite(html) {
  const match = html.match(/<li>\s*<strong>Website<\/strong>\s*:\s*<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/li>/i);
  if (!match) return { url: "", label: "" };
  return { url: match[1].trim(), label: cleanText(match[2]) };
}

function extractDescription(html) {
  const block = html.match(/<div class="portfolio-description">[\s\S]*?<\/div>/i);
  if (!block) return { title: "", paragraphs: [] };

  const titleMatch = block[0].match(/<h2>([\s\S]*?)<\/h2>/i);
  const pRegex = /<p>([\s\S]*?)<\/p>/gi;
  const paragraphs = [];
  let m;
  while ((m = pRegex.exec(block[0])) !== null) {
    const text = cleanText(m[1]);
    if (text) paragraphs.push(text);
  }

  return {
    title: titleMatch ? cleanText(titleMatch[1]) : "",
    paragraphs
  };
}

function extractSectionParagraphs(html) {
  const pRegex = /<p>([\s\S]*?)<\/p>/gi;
  const out = [];
  let m;
  while ((m = pRegex.exec(html)) !== null) {
    const text = cleanText(m[1]);
    if (text.length > 40) out.push(text);
  }
  return [...new Set(out)];
}

const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md")).sort();
let migrated = 0;

for (const file of files) {
  const mdPath = path.join(projectsDir, file);
  const source = read(mdPath);
  const fmMatch = source.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fmMatch) continue;

  const fm = fmMatch[1];
  const legacyFile = fmValue(fm, "legacyFile");
  if (!legacyFile) continue;

  const legacyPath = path.join(root, legacyFile);
  if (!fs.existsSync(legacyPath)) continue;

  const html = read(legacyPath);

  const title = fmValue(fm, "title") || cleanText((html.match(/<title>([\s\S]*?)<\/title>/i) || ["", "Project"])[1]);
  const category = fmValue(fm, "category") || "Portfolio Project";
  const timeline = fmValue(fm, "timeline");
  const summary = fmValue(fm, "summary");
  const featured = fmBool(fm, "featured", true);

  const heroImages = extractHeroImages(html);
  const allImages = extractAllImages(html).filter((src) => src.startsWith("assets/img/"));
  const supportingImages = allImages.filter((src) => !heroImages.includes(src));
  const info = extractInfoFields(html);
  const website = extractWebsite(html);
  const description = extractDescription(html);
  const extraParagraphs = extractSectionParagraphs(html).filter((p) => !description.paragraphs.includes(p));

  const lines = [];
  lines.push("---");
  lines.push(`title: ${esc(title)}`);
  lines.push(`category: ${esc(category)}`);
  if (timeline) lines.push(`timeline: ${esc(timeline)}`);
  if (heroImages[0]) lines.push(`cover: ${esc(heroImages[0])}`);
  lines.push(`summary: ${esc(summary || description.paragraphs[0] || `${title} project details.`)}`);

  if (website.url) lines.push(`websiteUrl: ${esc(website.url)}`);
  if (website.label) lines.push(`websiteLabel: ${esc(website.label)}`);

  if (info.client) lines.push(`client: ${esc(info.client)}`);
  if (info.teamMembers) lines.push(`teamMembers: ${esc(info.teamMembers)}`);
  if (info.role) lines.push(`position: ${esc(info.role)}`);
  if (info.tools) lines.push(`tools: ${esc(info.tools)}`);

  if (heroImages.length) {
    lines.push("heroGallery:");
    for (const src of heroImages) {
      lines.push(`  - src: ${esc(src)}`);
      lines.push(`    alt: ${esc(title)}`);
    }
  }

  lines.push("info:");
  lines.push(`  client: ${esc(info.client)}`);
  lines.push(`  teamMembers: ${esc(info.teamMembers)}`);
  lines.push(`  role: ${esc(info.role)}`);
  lines.push(`  tools: ${esc(info.tools)}`);

  lines.push("blocks:");
  if (description.paragraphs.length) {
    lines.push("  - type: \"paragraph\"");
    lines.push(`    title: ${esc(description.title || "Overview")}`);
    lines.push(`    text: ${esc(description.paragraphs.join(" "))}`);
  }

  if (supportingImages.length) {
    lines.push("  - type: \"image-grid\"");
    lines.push(`    title: ${esc("Supporting Visuals")}`);
    lines.push("    images:");
    for (const src of supportingImages.slice(0, 12)) {
      lines.push(`      - src: ${esc(src)}`);
      lines.push(`        alt: ${esc(title)}`);
    }
  }

  if (extraParagraphs.length) {
    lines.push("  - type: \"paragraph\"");
    lines.push(`    title: ${esc("Details")}`);
    lines.push(`    text: ${esc(extraParagraphs.slice(0, 4).join(" "))}`);
  }

  lines.push(`featured: ${featured ? "true" : "false"}`);
  lines.push("---");
  lines.push("");
  lines.push(`This case is Astro-native and generated from ${legacyFile} with structured blocks.`);

  write(mdPath, `${lines.join("\n")}\n`);
  migrated += 1;
}

console.log(`Migrated ${migrated} project markdown files to Astro-native block format.`);
