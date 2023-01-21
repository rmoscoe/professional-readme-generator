// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

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
    choices: ["Creative Commons Zero v1.0 Universal", "GNU Lesser General Public License v3.0", "MIT", "The Unlicense", "None"],
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
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {

            //         object
            // {
            //   title: 'My Project',
            //   description: 'best project ever!',
            //   installation: 'Click Install.',
            //   usage: 'Do I really have to spell it out for you?',
            //   contribution: 'Give me $$$$.',
            //   test: "Don't bother.",
            //   license: 'The Unlicense',
            //   gitHub: 'me',
            //   email: 'h8tr@nowhere.com'
            // }

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
