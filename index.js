const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data);
}

// function to initialize program
function init() {
    const fileName = "./README.md";
    
}

// function call to initialize program
init();
