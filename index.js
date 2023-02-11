const fs = require('fs/promises');
const PROMPTS = require('./lib/prompts');
const SHAPES = require('./lib/shapes');

const prompt = new PROMPTS();

function createLogo(userInput) {
    let logo = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">';

    const shapes = new SHAPES(userInput.shapeColor, userInput.shape);
    
    logo += shapes.getShape();

    logo += `<text x="110" y="110" font-size="40" fill="${userInput.textColor}">${userInput.text}</text>`

    logo += '</svg>';
    // console.log(logo);
    fs.writeFile('logo.svg', logo) 
    .then(() => {
        console.log("Generated logo.svg!!")
    })
    .catch((err) => {
        console.log(err)
    })
}

prompt.run()
.then(()=> {
    createLogo(prompt.answers);
})
