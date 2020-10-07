// required packages 
const fs = require('fs');
const util = require("util");
const inquirer = require('inquirer');
const genMarkdown = require('./Assets/JS/generateMarkdown');
const { questions } = require('./Assets/JS/questions');

// promisify write file
const writeFileAsync = util.promisify(fs.writeFile);

// async function to run the application 

async function init() {
    try {
        const data = await inquirer.prompt(questions);
        const markDown = genMarkdown(data);
        await writeFileAsync("yourREADME.md", markDown);

    } catch (err) {
        throw (err);
    }
};

// function call to run program
init();