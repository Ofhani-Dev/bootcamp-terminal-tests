
var assert = require("assert");

var fromWhere = require("../fromWhere");

describe('This test check where the car is from based on the Reg Number' , function(){
    it('should give the the right location based on the details of the reg number' , function(){
        assert.equal("Bellville", fromWhere("CY"));
        
    });

    it('should give the the right location based on the details of the reg number' , function(){
        assert.equal("Paarl", fromWhere("CJ"));
       
    });

    it('should give the the right location based on the details of the reg number' , function(){
        assert.equal("Cape Town", fromWhere("CA"));
        
    });

    it('should give the the right location based on the details of the reg number' , function(){
        assert.equal("Some other place!", fromWhere("GP"));
       
    });

})