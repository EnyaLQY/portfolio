import { defineConfig } from "astro/config";

const site = process.env.SITE_URL || "https://enyalqy.github.io";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repositoryName === `${process.env.GITHUB_REPOSITORY_OWNER}.github.io`;
const detectedBase = process.env.GITHUB_ACTIONS === "true" && repositoryName && !isUserSite
  ? `/${repositoryName}/`
  : "/";
const base = process.env.BASE_PATH || detectedBase;

export default defineConfig({
  site,
  base,
  output: "static"
});
