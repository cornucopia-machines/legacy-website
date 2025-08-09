import type MarkdownIt from "markdown-it";

const fs = require("fs") as typeof import("fs");
const path = require("path") as typeof import("path");
const matter = require("gray-matter") as typeof import("gray-matter");
const MarkdownItLib = require("markdown-it") as unknown as { new(opts?: any): MarkdownIt };

interface LandingData {
  html: string;
}

function readFileSafe(file: string): string {
  try {
    return fs.readFileSync(file, "utf8");
  } catch (e) {
    return "";
  }
}

module.exports = function(): LandingData {
  const md = new MarkdownItLib({ html: false, linkify: true, breaks: false });
  const filePath = path.join(__dirname, "..", "pages", "index.md");
  const raw = readFileSafe(filePath);
  const parsed = matter(raw);
  const content: string = parsed.content || "";
  const html = md.render(content);

  return { html };
};
