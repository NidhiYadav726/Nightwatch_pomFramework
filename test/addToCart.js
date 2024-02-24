var utils = require("../page-objects/utils.js");

module.exports = {
  'Functionality': 'Cart',
  before: function(browser) {
    utils(browser).openBrowser();
    utils(browser).login();
  },
  'Add to Cart': function(browser) {
    utils(browser).addToCart();
  },
  after: function(browser) {
    utils(browser).closeBrowser();
  },
};
