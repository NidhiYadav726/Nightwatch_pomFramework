const data = require("./data");

const util = function (browser) {

    //Launches the browser and visits the specified url
    this.openBrowser = function () {
        browser
            .windowMaximize()
            .url(data.baseURL)
            .waitForElementVisible("body", 2000, "Page loaded successfully")
            .assert.titleEquals("Swag Labs");
        
    };

    //Closes the browser
    this.closeBrowser = function () {
        browser
            .end();
    };
 // Performs login functionality   
    this.login = function(){
        const username = 'standard_user'; 
        const password = 'secret_sauce';
        browser
            .waitForElementPresent('#user-name', 10000, 'Username field is present')
            .setValue('#user-name', username)
            .waitForElementPresent('#password', 10000, 'password field is present')
            .setValue('#password', password)
            .click('#login-button');
    };
// performs add to cart functionality
    this.addToCart = function () {
        const product = '#item_4_title_link > div';
        browser
            .waitForElementPresent('#item_4_title_link > div',5000,'product present')
            .click(product)
            // .clearValue(elements.quantityTextBox)
            // .pause(2000)
            // .setValue(elements.quantityTextBox, data.quantity)
            .click('#inventory_item_container > div > div > div > button');
    };

    return this;
};
module.exports = util;


    






    





