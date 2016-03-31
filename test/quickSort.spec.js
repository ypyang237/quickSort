var chai = require('chai'); // pulls in the 'chai' package installed through NPM
var expect = chai.expect;   // this is how we use chai's `expect` assertion
chai.should();              // this is how we use chai's `should` assertion

// please be sure to update the argument for `require` to point to the right file
// the example here the `myTestFunction.js` is one directory "up" from test/
var myTestFunction = require('../myTestFunction.js');

/* all your tests will be written below */

// this describe and it block is our 'hello world', we will replace this later with
describe('Test Suite', function(){
  it('should pass', function(){
    expect(true).to.equal(true);

    var result = myTestFunction();

    expect(result).to.be.equal('hello test');
  });
});