module.exports = {
  /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = "";

    // if the item is the current page, add aria-current
    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    // if the item is a parent of the current page, add data-state
    if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
      response += ' data-state="active"';
    }

    // Add data-state to "Portfolio" nav item for all individual portfolio pages
    if (pageUrl.includes("portfolio") && itemUrl === "/") {
      response += ' data-state="active"';
    }

    return response;
  },
};
