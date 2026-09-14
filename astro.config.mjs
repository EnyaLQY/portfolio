import { defineConfig } from "astro/config";

const site = process.env.SITE_URL || "https://enyalqy.github.io";
const base = process.env.GITHUB_PAGES === "true" ? "/portfolio/" : "/";

export default defineConfig({
  site,
  base,
  output: "static"
});
