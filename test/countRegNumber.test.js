var assert = require("assert")

var countRegNumber = require("../countRegNumber")


describe('This test returns the number of registration numbers' , function(){
    it('The quantity of registeration numbers must be rflected' , function(){
        assert.equal("1", countRegNumber("1"));
    });

});