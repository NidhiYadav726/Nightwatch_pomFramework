const utils = require('../page-objects/utils.js');
 module.exports ={
    "Functionality": "Login",
    before: function (browser) {
      utils(browser).openBrowser();
    },
  
    "Login to Swag Labs": function (browser) {
      utils(browser).login();
    },
  
    after: function (browser) {
      utils(browser).closeBrowser();
    },
  };
 
  
 
  

 