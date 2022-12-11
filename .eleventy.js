// Sorting
const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

// Syntax formatting
// https://www.11ty.dev/docs/plugins/syntaxhighlight/
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// CSS compilation relies on PostCSS config, in css/styles.11ty.js
// h/t Phil Hawksworth for how to include PostCSS without a separate build tool

module.exports = (config) => {
  // Add syntax highlighting
  config.addPlugin(syntaxHighlight);
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/files/");
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/archive/");

  // Returns work items, sorted by display order
  config.addCollection("portfolio", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/portfolio/*.md")
    );
  });

  // Returns work items, sorted by display order then filtered by featured
  config.addCollection("featuredPortfolio", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/portfolio/*.md")
    ).filter((x) => x.data.featured);
  });

  config.addCollection("featuredWriting", (collection) => {
    return [...collection.getFilteredByGlob("./src/blog/*.md").slice(2)];
  });

  // Returns a collection of writing in reverse date order
  config.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/blog/*.md")].reverse();
  });
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
