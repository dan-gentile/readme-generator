// required packages 
const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const genMarkdown = require('./generateMarkdown');

// promisify write file
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

const questions = [{
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your Email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "project"
    },
    {
        type: "input",
        message: "Please add a description of the project?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "install"
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What is the license of your project?",
        name: "license"
    },
    {
        type: "input",
        message: "What are you contribution guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Please explain any testing",
        name: "test"
    },

]

// async function to run the application 

async function init() {
    try {
        const data = await inquirer.prompt(questions);
        const markDown = genMarkdown(data);
        await writeFileAsync("readTest.md", markDown);

    } catch (err) {
        throw (err);
    }
};

// function call to run program
init();