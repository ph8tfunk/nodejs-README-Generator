const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'The Title Of Your Project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please Give A Description Of The Project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Project Installation Requirements?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Project Usage',
    },
    {
        type: 'list',
        choices: ['MIT', 'GNU' ],
        name: 'license',
        message: 'Project License',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Project Contribution Guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Project Tests',
    },
    {
        type: 'input',
        name: 'ghUserName',
        message: 'GitHub UserName',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Your Email Address',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(fileName,data);
    fs.writeFile(fileName, data, (err) => err && console.error(err));
}

// function to initialize program
function init() {
    const fileName = "./output/README.md";

    inquirer.prompt(questions).then((answers) => {
        console.log('done');
        JSON.stringify(answers, null, '  ');
        writeToFile(fileName,generateMarkdown(answers));
      });
}

// function call to initialize program
init();
