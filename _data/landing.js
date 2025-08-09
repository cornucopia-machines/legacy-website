const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");

module.exports = () => {
  const md = new MarkdownIt({ html: false, linkify: true, breaks: false });
  const filePath = path.join(__dirname, "..", "pages", "index.md");
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  let content = parsed.content || "";

  // Extract first-level heading as title
  const h1Match = content.match(/^#\s+(.+)$/m);
  const title = h1Match ? h1Match[1].trim() : "Cornucopia GrowMachine";
  if (h1Match) {
    content = content.replace(h1Match[0], "").trim();
  }

  // Extract first second-level heading as subtitle
  const h2Match = content.match(/^##\s+(.+)$/m);
  const subtitle = h2Match ? h2Match[1].replace(/^\*\*|\*\*$/g, '').trim() : "Your raised beds just got a brain.";
  if (h2Match) {
    content = content.replace(h2Match[0], "").trim();
  }

  const html = md.render(content);

  return {
    title,
    subtitle,
    html,
  };
};
