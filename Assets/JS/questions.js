// Questions to generate the README content 
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
        name: "contributing"
    },
    {
        type: "input",
        message: "Please explain any testing",
        name: "test"
    },

];

// exporting the array
module.exports = {
    questions: questions
}