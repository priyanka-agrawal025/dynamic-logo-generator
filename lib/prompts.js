const inquirer = require('inquirer');

class SVGPROMPTS{
    constructor() {
        this.answers = {};
    }
    
    run() {
        return inquirer
        .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Input 3 or less characters you would like to include in your logo',
            validate: function(input) {
                if (input.length > 3) {
                    return 'Please limit character length to 3'
                }
                return true
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be?'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo',
            choices: ['Circle', 'Rectangle', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be?'
        }
    ]).then(answers => {
            this.answers = answers;
        })
    }
}

module.exports = SVGPROMPTS;

