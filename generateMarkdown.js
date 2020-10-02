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
${data.install}

### Usage
${data.usage}
    
### License 
Copyright (c) ${data.name}. All rights reserved
Licensed under the [${data.license}](https://github.com/${data.username}/${data.project}/blob/master/LICENSE) license.

### Contributing 
1. Clone repo and create a new branch: ~~~$ git checkout https://github.com/${data.username}/${data.project} -b name_for_new_branch.~~~
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes
    
### Tests 
${data.test}

### Questions 

If you have any questions and would like to get in touch please email me! 
email: ${data.email}


    

`;
}

// exporting the function
module.exports = generateMarkdown;