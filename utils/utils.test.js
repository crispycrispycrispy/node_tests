const utils = require('./utils');
it('should add two numbers', () => {
    var res = utils.add(10, 20);
    if(res != 30)
        throw new Error(`Value expected 30 got ${res}`)
});

it('should square a number', () => {
    var res = utils.square(3);
    if(res != 4){
        throw new Error('Value expecting 4 got' + res);
    }
});