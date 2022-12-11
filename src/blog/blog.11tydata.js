const { DateTime } = require("luxon");
module.exports = {
  eleventyComputed: {
    dateString: ({ page }) => {
      return DateTime.fromJSDate(page.date, { zone: "utc" }).toLocaleString(
        DateTime.DATE_FULL
      );
    },
  },
};
