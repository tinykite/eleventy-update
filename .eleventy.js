// Sorting
const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

// Date filtering
// TODO: Replace Moment
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");

// Syntax formatting
// https://www.11ty.dev/docs/plugins/syntaxhighlight/
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// CSS compilation relies on PostCSS config, in css/styles.11ty.js
// h/t Phil Hawksworth for how to include PostCSS without a separate build tool

module.exports = (config) => {
  // Add syntax highlighting
  config.addPlugin(syntaxHighlight);
  // Add filters
  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);
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
    return [...collection.getFilteredByGlob("./src/writing/*.md").slice(2)];
  });

  // Returns a collection of writing in reverse date order
  config.addCollection("writing", (collection) => {
    return [...collection.getFilteredByGlob("./src/writing/*.md")].reverse();
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
