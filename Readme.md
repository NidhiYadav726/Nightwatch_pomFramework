                                               PAGE OBJECT MODEL IN NIGHTWATCH JS

OBJECTIVE: 
* To explain page object framework
* To automate a e-commerce website and tests the folowing functionality
    1) Login to the Swag Labs
    2) Add an item to the Cart

PAGES CREATED:
A page-objects folder is created to contain all the pages
   * data.js: contains the data required by the entire test suite like the base url
   * utils.js: contains all the functions or actions to be performed

TEST 
A test folder is created that contains all the test files
   * addToCart.js: tests the functionality of adding item to the shopping cart . It opens the browser and logs in before the test suite, adds items to the cart during the main test case, and closes the browser after the test suite. 
   * login.js: tests the login functionality. It opens the browser before the test suite ,logs in during the main test case, and then closes the browser after the test suite.

TEST CASES:
WEBSITE USED : SWAG LABS (https://www.saucedemo.com/)
1) Home Page:
   * Browser should open and navigate to the url 
   * Verify the title of the page

2) Login Functionality:
   * Locate username input box
   * Pass the required username
   * Locate password input box
   * Pass the required password
   * Locate 'Login button' and click

3) Add to Cart Functionality:
   * Locate the product to be added
   * Locate and click on 'add to Cart button' of the desired product

4) Run the entire test suite 
    -> npm test 

5) OUTPUT :
   * Two windows will open to carry out the test cases separately since two separate files have been created for the functionalities.
   * In order to run the test cases in a single window, comment the addToCart.js file and copy its contents to login.js. 
