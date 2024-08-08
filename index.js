// index.js

// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project:',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Enter the contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'testing',
    message: 'Enter the test instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use for your project?',
    choices: ["MIT", "ISC", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);
  fs.writeFile(fileName, content, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log(`${fileName} file generated successfully!`);
  });
}

// Function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    const fileName = 'README_sample.md';
    writeToFile(fileName, data);
  });
}

// Function call to initialize program
init();
