// generate-sitemap.js
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.subaru-hanoi.asia";
const PAGES_DIR = path.join(process.cwd(), "page");
const SITEMAP_PATH = path.join(process.cwd(), "sitemap.xml");

function getHtmlFiles(dir, basePath = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let urls = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      urls = urls.concat(getHtmlFiles(fullPath, relativePath));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      urls.push("/page/" + relativePath.replace(/\\/g, "/"));
    }
  }

  return urls;
}

const urls = getHtmlFiles(PAGES_DIR);

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
const xmlOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
const xmlClose = "</urlset>";

const today = new Date().toISOString().split("T")[0];

const xmlBody = urls
  .map(
    (url) => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url.endsWith("/index.html") ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n");

const sitemap = xmlHeader + xmlOpen + xmlBody + "\n" + xmlClose;
fs.writeFileSync(SITEMAP_PATH, sitemap, "utf-8");

console.log(`✅ Sitemap generated successfully: ${SITEMAP_PATH}`);
