var assert = require("assert");

var transportFee = require("../transportFee");


describe('This test check the appropriate amount of transport fee' , function(){
    it('should give the right amount of transport fee according to the shift' , function(){
        assert.equal("R20", transportFee("morning"));
        // assert.deepEqual("R10", transportFee("morning"));
    });

    it('should give the right amount of transport fee according to the shift' , function(){
        assert.equal("R10", transportFee("afternoon"));
       // assert.deepEqual("R10", transportFee("night"));
    });

    it('should give the right amount of transport fee according to the shift' , function(){
        assert.equal("free", transportFee("night"));
      // assert.deepEqual("R20", transportFee("night"));
    });

});