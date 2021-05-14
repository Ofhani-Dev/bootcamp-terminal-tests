
var assert = require("assert");

var totalPhoneBill =require("../totalPhoneBill");

describe('This test check the total bill for data that is provided' , function(){
    it('should give the total amount of data used for both calls and sms' , function(){
        //assert.equal("R2.75", totalPhoneBill("call"));
        assert.equal("R3.25", totalPhoneBill("call"));
    });
    it('should give the total amount of data used for both calls and sms' , function(){
       // assert.equal("R0.65", totalPhoneBill("sms"));
        assert.equal("R1.65", totalPhoneBill("sms"));
    });

});