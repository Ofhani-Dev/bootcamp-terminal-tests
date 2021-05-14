var assert = require ("assert");

var isFromBellville = require("../isFromBellville")

describe('This test should check all number plates from Bellville.' , function(){
    it('should return true if number plates contains "CY"' , function(){
        assert.equal(true,isFromBellville("CY"));
    });
    
    it('should return true if number plates contains "CY"' , function(){
        assert.equal(false,isFromBellville("CL"));
    });

});