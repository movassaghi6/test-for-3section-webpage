# test-for-3section-webpage

## Intrduction

I used Cypress for an End-To-End testing for 3pages I wrote with HTML, CSS, and Javascript.

## Getting Started
1. first use this utility to initialize a package.json file and change it like my package.json file:
   ```
   npm install
   ```
2. then you should install cypress using this command:
   ```
   npm install cypress
   ```
3.then install required packages :
```
npm install
```
4.now, you should create a file like amir.test.js in this root in your project folder :
  project-folder/cypress/e2e
5. add script of amir.test.js file in my repo to your file
6.finally, run cypress by this code:
```
npm cypress open
```
## About Functionality
### test for section-1
can test Button functionality of the page and paginatio functionality of all pages.

### test for section-2
can test button functionality: when we click on button fields will fill with our desired inputs and the test will check our filled inputs are right or not.

### test for section-3
can test button functionality: when we fill the fields and then click on button, based on our defined inputs it checks our inputs are right and show us an alert: "login successfull" or wrong : "Login failed". the test for this section can check this function. 
