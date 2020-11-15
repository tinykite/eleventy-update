// Sorting
const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

// Date filtering
// TODO: Replace Moment
const dateFilter = require("./src/filters/date-filter.js");
const w3DateFilter = require("./src/filters/w3-date-filter.js");

// Code Formatting
// https://www.11ty.dev/docs/plugins/syntaxhighlight/
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// CSS compilation relies on PostCSS config, in css/styles.11ty.js
// h/t Phil Hawksworth for how to include PostCSS without a separate build tool

module.exports = (config) => {
  // Add filters
  config.addFilter("dateFilter", dateFilter);
  config.addFilter("w3DateFilter", w3DateFilter);
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
