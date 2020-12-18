const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write your description.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write your installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write your usage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Write your contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write your testing instructions.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            'MIT LICENSE',
            'BSD LICENSE',
            'Apache LICENSE',
            'GNU GPL v3 LICENSE',
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email address you want to display.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name the way you want to display it.',
    },
];


// function to initialize program
function init() {

    inquirer.prompt(questions)
        .then((data) => {
            console.log(data);
            // function to write README file
            const template = markdown(data);
            console.log(template);

            fs.writeFile("README.md", template, (err) => {
                err ? console.log(err) : console.log('Success!');

            })
        });
}

// function call to initialize program
init();
