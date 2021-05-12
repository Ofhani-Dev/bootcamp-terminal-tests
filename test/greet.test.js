var assert = require("assert");
var greet = require("../greet");

describe('This test should greet a  friend.' , function(){

    it( 'should greet "Hello, Tim" ', function(){
        assert.equal("Hello, Tim", greet("Tim"));
    });
    it('should return "Hello, Zamo" ' , function(){
        assert.equal("Hello, Zamo", greet("Zamo"));
    });
    it('should return "Hello, khakhathi" ' , function(){
        assert.equal("Hello, Khakhathi", greet("Khakhathi"));
    });
});