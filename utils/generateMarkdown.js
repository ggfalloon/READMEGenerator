// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributing
    ${data.contribution}

    ## Tests
    ${data.tests}

    ## Questions
    &copy; ${data.name}, ${data.github}, ${data.email}
  `;
}

module.exports = generateMarkdown;