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
  const html = md.render(content);

  return {
    html,
  };
};
