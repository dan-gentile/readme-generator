// function to generate markdown for README
function generateMarkdown(data) {
    return `## ${data.project}

![Contents](https://img.shields.io/github/languages/top/${data.username}/${data.project})
![Last-Commit](https://img.shields.io/github/last-commit/${data.username}/${data.project})
![License](https://img.shields.io/github/license/${data.username}/${data.project})
    
### Description 
${data.description}
    
### Table of Contents
    
- [Title](#title)
- [Description](#description)
- [Technologies](#technologies)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
### Technologies 

-[${data.technology}](#${data.technologyURL})
    
### Installation 
${data.installation}

### Usage
${data.usage}
    
### License 
${data.license}
    
### Contributing 
${data.contributing}
    
### Tests 
${data.test}

### Questions 
${data.questions}
    

`;
}

module.exports = generateMarkdown;