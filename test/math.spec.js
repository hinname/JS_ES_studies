const assert = require('assert');
const Math = require('../src/math');
const expect = require('chai').expect;

let value = 0

describe('Math class', function () {
    //hooks
    //beforeEach
    //before
    //after
    //afterEach
    beforeEach(function() {
        value = 0; //valor inicial para cada teste
    });

	it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000); //usando o function, podemos fazer isso
        value = 5;
    
        math.sum(value, 5, (value) => {
            assert.equal(value, 10)
            done(); //vai aguardar o done ser invocado para finalizar o teste
        });
	
    })
    
    it.only('Multiply two numbers', function() {
        const math = new Math();

        value = 5;

        assert.equal(math.multiply(value,5), 25);
    });
})

//it.only para ser o unico teste

//it.skip vai pular o teste