const assert = require('assert');
const Math = require('../src/math');
const expect = require('chai').expect;
const sinon = require('sinon');

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
            expect(value).to.equal(10);
            done(); //vai aguardar o done ser invocado para finalizar o teste
        });
	
    })
    
    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Herivelton Costa'
        };
        const obj2 = {
            name: 'Herivelton Costa'
        };

        //value = 5;

        //expect(math.multiply(value, 5)).to.equal(25)
        //expect(obj).to.have.property('name').equal('Herivelton Costa');
        expect(obj).to.deep.equal(obj2);
    });

    it.only('Calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!')
            } //função espiã se ela foi chamada ou não
        };
        //sinon.spy(res, 'load');
        sinon.stub(res, 'load').returns('xpto');
        const math = new Math();

        math.printSum(req, res, 5, 5);

        res.restore();

        //expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][1]).to.equal(10)
    })
})

//it.only para ser o unico teste

//it.skip vai pular o teste