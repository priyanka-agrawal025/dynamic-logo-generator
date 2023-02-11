const SHAPES = require('../lib/shapes');


describe('CIRCLE', () => {
    describe('getShapes', () => {
        it('should render a blue circle', () => {
            const shape = new SHAPES("blue", "Circle");
            const returnValue = '<circle cx="150" cy="100" r="100" fill="blue"/>';

            expect(shape.getShape()).toEqual(returnValue);
        })
    })
})

describe('RECTANGLE', () => {
    describe('getShapes', () => {
        it('should render a green rectangle', () => {
            const shape = new SHAPES("green", "Rectangle");
            const returnValue = '<rect width="300" height="200" fill="green"/>';

            expect(shape.getShape()).toEqual(returnValue);
        })
    })
})

describe('TRIANGLE', () => {
    describe('getShapes', () => {
        it('should render a pink triangle', () => {
            const shape = new SHAPES("pink", "Triangle");
            const returnValue = '<polygon points="150 200, 300 0, 0 0" fill="pink"/>';

            expect(shape.getShape()).toEqual(returnValue);
        })
    })
})


