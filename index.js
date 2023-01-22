// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (answer) => {
        if (answer.trim().length) {
            return true;
        } else {
            return "Please enter a title for your project.";
        }
    }
}, {
    type: "input",
    name: "description",
    message: "Please enter a description of your project.",
    validate: (answer) => {
        if (answer.trim().length) {
            return true;
        } else {
            return "Please enter a title for your project.";
        }
    }
}, {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions for your application.",
    validate: (answer) => {
        if (answer.trim().length) {
            return true;
        } else {
            return "Please enter a title for your project.";
        }
    }
}, {
    type: "input",
    name: "usage",
    message: "Please enter usage information for your application.",
    validate: (answer) => {
        if (answer.trim().length) {
            return true;
        } else {
            return "Please enter a title for your project.";
        }
    }
}, {
    type: "input",
    name: "contribution",
    message: "Please specify contribution guidelines for your project.",
    validate: (answer) => {
        if (answer.trim().length) {
            return true;
        } else {
            return "Please enter a title for your project.";
        }
    }
}, {
    type: "input",
    name: "test",
    message: "Please enter testing instructions for your application.",
    validate: (answer) => {
        if (answer.trim().length) {
            return true;
        } else {
            return "Please enter a title for your project.";
        }
    }
}, {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: Object.keys(generateMarkdown.licenses),
    default: 2
}, {
    type: "input",
    name: "gitHub",
    message: "What is your GitHub username?",
    validate: (answer) => {
        if (answer.trim().length) {
            return true;
        } else {
            return "Please enter a title for your project.";
        }
    }
}, {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
    validate: function (answer) {
        const valid = /^[\w]+[\w-\.!#$%^&*?<>]*@([\w-]+\.)+[\w-]{2,4}$/;
        if (valid.test(answer.trim())) {
            return true;
        } else {
            return "Please enter a valid email address.";
        }
    }
}];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.rm("./README_Example.md", () => {
        fs.appendFile("./README_Example.md", generateMarkdown.generateMarkdown(data), (err) => {
            err ? console.log(err) : console.log("README_Example successfully generated.");
        });
    });
}

// TODO: Create a function to initialize app
function init() {
            inquirer.prompt(questions)
                .then((answers) => {
                    writeToFile(answers);
                })
                .catch((err) => {
                    if (err.isTtyError) {
                        console.log("The prompts couldn't be rendered in the current environment.");
                    } else {
                        console.log(err);
                    }
                });
        }

// Function call to initialize app
init();
