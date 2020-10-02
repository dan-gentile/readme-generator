// required packages 
const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const genMarkdown = require('./generateMarkdown');
const { questions } = require('./questions');

// promisify write file
const writeFileAsync = util.promisify(fs.writeFile);

// async function to run the application 

async function init() {
    try {
        const data = await inquirer.prompt(questions);
        const markDown = genMarkdown(data);
        await writeFileAsync("README.md", markDown);

    } catch (err) {
        throw (err);
    }
};

// function call to run program
init();