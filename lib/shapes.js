class SHAPES {
    constructor(color, shape) {
        this.color = color;
        this.shape = shape; 
    }
    
    getShape() {
        let shapes;
        switch(this.shape) {
            case 'Circle':
                shapes = new CIRCLE(this.color);
                break;
            case 'Rectangle':
                shapes = new RECTANGLE(this.color);
                break;
            case 'Triangle':
                shapes = new TRIANGLE(this.color);
                break;
            }
        return shapes.render();
    }
}

class CIRCLE extends SHAPES {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`
    }
}

class RECTANGLE extends SHAPES {
    constructor(color) {
        super(color);
    }
    
    render() {
        return `<rect width="300" height="200" fill="${this.color}"/>`
    }
}

class TRIANGLE extends SHAPES {
    constructor(color) {
        super(color);
    }
    
    render() {
        return `<polygon points="150 200, 300 0, 0 0" fill="${this.color}"/>`
    }
}

module.exports = SHAPES;

