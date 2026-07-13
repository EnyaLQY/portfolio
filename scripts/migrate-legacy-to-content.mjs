import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceDir = root;
const outputDir = path.join(root, "src", "content", "projects");

const projectFiles = fs
  .readdirSync(sourceDir)
  .filter((file) => /^portfolio_details_.*\.html$/.test(file))
  .sort();

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
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

function escapeYaml(value) {
  if (!value) return '""';
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function slugFromFile(file) {
  return file.replace(/^portfolio_details_/, "").replace(/\.html$/, "");
}

function extractField(html, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`<li>\\s*<strong>${escaped}<\\/strong>\\s*:\\s*([\\s\\S]*?)<\\/li>`, "i");
  const match = html.match(regex);
  return match ? cleanText(match[1]) : "";
}

function extractWebsite(html) {
  const match = html.match(/<li>\s*<strong>Website<\/strong>\s*:\s*<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>\s*<\/li>/i);
  if (!match) return { url: "", label: "" };
  return {
    url: match[1].trim(),
    label: cleanText(match[2])
  };
}

function extractTitle(html, fallback) {
  const withoutComments = html.replace(/<!--[\s\S]*?-->/g, "");

  const h1 = withoutComments.match(/<h1>([\s\S]*?)<\/h1>/i);
  if (h1) return cleanText(h1[1]);

  const h2 = withoutComments.match(/<div class="portfolio-description">[\s\S]*?<h2>([\s\S]*?)<\/h2>/i);
  if (h2) return cleanText(h2[1]);

  const title = withoutComments.match(/<title>([\s\S]*?)<\/title>/i);
  if (title) return cleanText(title[1]).replace(/^Portfolio Details\s*-?\s*/i, "");

  return fallback;
}

function extractGallery(html) {
  const images = [];
  const regex = /<img\s+src="([^"]+)"/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const src = match[1].trim();
    if (src.startsWith("assets/img/portfolio/")) {
      images.push(src);
    }
  }

  return [...new Set(images)];
}

function extractDescriptionParagraphs(html) {
  const sectionMatch = html.match(/<section id="portfolio-details"[\s\S]*?<\/section>/i);
  const source = sectionMatch ? sectionMatch[0] : html;
  const paragraphs = [];
  const regex = /<p>([\s\S]*?)<\/p>/gi;
  let match;

  while ((match = regex.exec(source)) !== null) {
    const text = cleanText(match[1]);
    if (!text) continue;
    if (text.length < 30) continue;
    paragraphs.push(text);
  }

  return [...new Set(paragraphs)].slice(0, 8);
}

function toMarkdownList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

for (const file of projectFiles) {
  const slug = slugFromFile(file);
  const html = fs.readFileSync(path.join(sourceDir, file), "utf8");

  const title = extractTitle(html, slug);
  const category = extractField(html, "Category") || "Portfolio Project";
  const timeline = extractField(html, "Timeline");
  const client = extractField(html, "Client");
  const teamMembers = extractField(html, "Team members");
  const position = extractField(html, "Position");
  const tools = extractField(html, "Tools") || extractField(html, "Developing Tools");
  const website = extractWebsite(html);
  const gallery = extractGallery(html);
  const cover = gallery[0] || "";
  const paragraphs = extractDescriptionParagraphs(html);
  const summary = paragraphs[0] || `${title} project details.`;

  const frontmatter = [
    "---",
    `title: ${escapeYaml(title)}`,
    `category: ${escapeYaml(category)}`,
    timeline ? `timeline: ${escapeYaml(timeline)}` : "",
    cover ? `cover: ${escapeYaml(cover)}` : "",
    `legacyFile: ${escapeYaml(file)}`,
    `summary: ${escapeYaml(summary)}`,
    client ? `client: ${escapeYaml(client)}` : "",
    teamMembers ? `teamMembers: ${escapeYaml(teamMembers)}` : "",
    position ? `position: ${escapeYaml(position)}` : "",
    tools ? `tools: ${escapeYaml(tools)}` : "",
    website.url ? `websiteUrl: ${escapeYaml(website.url)}` : "",
    website.label ? `websiteLabel: ${escapeYaml(website.label)}` : "",
    gallery.length
      ? `gallery:\n${toMarkdownList(gallery.map((item) => escapeYaml(item)))}`
      : "",
    "featured: true",
    "---",
    ""
  ]
    .filter(Boolean)
    .join("\n");

  const body = paragraphs.length
    ? paragraphs.map((p) => `${p}\n`).join("\n")
    : "Initial migration placeholder. Move full narrative content from legacy HTML as needed.\n";

  const outPath = path.join(outputDir, `${slug}.md`);
  fs.writeFileSync(outPath, `${frontmatter}\n${body}`, "utf8");
}

console.log(`Migrated ${projectFiles.length} project files into ${path.relative(root, outputDir)}`);
