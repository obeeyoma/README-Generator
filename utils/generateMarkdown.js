// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${data.licenseBadge} 
  
 
## Description 
${data.description}


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license) 
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## License

This project is licensed under the ${data.license}. 

## Contributing
${data.contributing}

## Test
${data.test}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email:  If you have any additional questions, you can reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
