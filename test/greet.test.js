var assert = require("assert");
var greet = require("../greet");

describe('This test should greet a  friend.' , function(){

    it('I am going to greet "Hello, Tim" ', function(){
        assert.equal("Hello, Tim", greet("Tim"));
    });
    it('I am going to greet "Hello, Zamo" ' , function(){
        assert.equal("Hello, Zamo", greet("Zamo"));
    });
    it('I am going to greet "Hello, khakhathi" ' , function(){
        assert.equal("Hello, Khakhathi", greet("Khakhathi"));
    });
});