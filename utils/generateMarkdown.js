// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  if (data.licence == "MIT LICENSE") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.license == "BSD LICENSE") {
    badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  if (data.license == "Apache LICENSE") {
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (data.license == "GNU GPL v3 LICENSE") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)])";
  }

  return `# ${data.title}
  ${badge}
    
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
This application is covered under ${data.license}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
  & copy; ${data.name}, ${data.github}, ${data.email}
`;
}

module.exports = generateMarkdown;