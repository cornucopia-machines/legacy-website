/**
 * Eleventy configuration
 */
module.exports = function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy("assets");
  // Ensure CNAME is published for the custom domain
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addWatchTarget("assets");

  return {
    dir: {
      input: "pages",
      // Keep includes/data folders at repo root
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
