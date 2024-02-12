const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    //   title
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    //   description
    type: "input",
    name: "description",
    message: "How would you describe your project?",
  },
  {
    //   installation
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
  },
  {
    //   usage
    type: "input",
    name: "usage",
    message: "How will your project be used?",
  },
  {
    //   contributing
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines for your project?",
  },
  {
    //   tests
    type: "input",
    name: "test",
    message: "Enter test instructions for your project: ",
  },
  {
    //   license
    type: "list",
    name: "license",
    message: "Choose a license for your project: ",
    choices: [
      "MIT License",
      "Mozilla Public License 2.0",
      "Apache 2.0 License",
    ],
  },
  {
    //   github with link to profile
    type: "input",
    name: "github",
    message: "Enter your GitHub Username: ",
  },
  {
    //   email
    type: "input",
    name: "email",
    message: "Enter your email address: ",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => console.error(err));
}

// function to initialize program
function init() {
      inquirer
        .prompt(questions)
        .then((answers) => {
          answers.licenseBadge = generateLicenseBadge(answers.license);
          console.log(answers);

          writeToFile("sample/README.md", answers);
        })
        .then(() => {
          console.log("Successfully wrote to sample/README.md");
        })
        .catch((err) => console.error(err));
}

// function call to initialize program
init();
