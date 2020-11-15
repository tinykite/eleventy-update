const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/archive/");
  // Returns work items, sorted by display order
  // Returns work items, sorted by display order
  config.addCollection("work", (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob("./src/work/*.md"));
  });

  // Returns work items, sorted by display order then filtered by featured
  config.addCollection("featuredWork", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/work/*.md")
    ).filter((x) => x.data.featured);
  });

  // Returns a collection of writing in reverse date order
  config.addCollection("writing", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
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
