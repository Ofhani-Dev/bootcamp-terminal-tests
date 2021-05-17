var assert = require("assert");

var countAllPaarl = require("../countAllPaarl");

describe('This test check all the registration numbers from town' , function(){
    it('should give the right number of reg number in the string for that location' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));  
        
    });
    it('should give the right number of reg number in the string for that location' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
        
    });
   

});




