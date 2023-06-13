// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?: ",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a description including what your motivation for the project was, why you made it, what problems it solves, and what you learned: ",
  },
  {
    type: "input",
    name: "installation",
    message:
      "If your application requires any installation please describe the process here: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions on how to use your application: ",
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license you are using for this project: ",
    choices: ["MIT", "Apache 2.0", "ISC", "N/A"],
  },
  {
    type: "input",
    name: "credits",
    message:
      "Provide a list of any collaborators, third-party assets, or tutorials that you found helpful in the creation of this application: ",
  },
  {
    type: "input",
    name: "tests",
    message:
      "If you have written any tests for you application please provide instructions on how to run them: ",
  },
  {
    type: "input",
    name: "username",
    message: "What is your Github username?: ",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?: ",
  },
  {
    type: "input",
    name: "fileName",
    message: "What do you want to name this readme?: ",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      console.log("Something went wrong" + error);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const template = markdown(answers);
    writeToFile(answers.fileName, template);
  });
}

// Function call to initialize app
init();
