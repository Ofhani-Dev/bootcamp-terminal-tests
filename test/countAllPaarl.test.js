var assert = require("assert");

var countAllPaarl = require("../countAllPaarl");

describe('This test should check all number plates from Paarl.' , function(){
    it('should return true if number plates contains "CJ"' , function(){
        assert.equal(true,countAllPaarl("CJ"));
    });

    it('should return false if number plates contains "CL"' , function(){
        assert.equal(false,countAllPaarl("CL"));
    });

});