const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(10, 20);
    expect(res).toBe(30).toBeA('number');

    // if(res != 30)
    //     throw new Error(`Value expected 30 got ${res}`)
});

it('should square a number', () => {
    var res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
    // if(res != 4){
    //     throw new Error('Value expecting 4 got' + res)
    // }
});

it('should verify first and last names are set', () => {
    var res = utils.setName({
        location: "Mum",
        age: 22 
    },"Gavin Dsilva");
    expect(res).toInclude({
        firstName: "Gavin",
        lastName: "Dsilva"
    });
});

//should verify firstName and lastNames are set
//check if it includes first

// it('should expec some values', () => {
//     //expect(12).toNotBe(12);
//     // expect({name: 'Andres'}).toEqual({name: 'Andres'});
//     expect([2, 3, 4]).toInclude(2);
// });