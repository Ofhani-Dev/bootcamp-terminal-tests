var assert = require("assert");

var countAllFromTown = require("../countAllFromTown");

describe('This test check all the registration numbers from town' , function(){
    it('should give the right number of reg number in the string for that location' , function(){
        assert.equal("3", countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
        
    });
    it('should give the right number of reg number in the string for that location' , function(){
        assert.equal("1", countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CY'));
        
    });
    it('should give the right number of reg number in the string for that location' , function(){
        assert.equal("1", countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ'));
        
    });

});