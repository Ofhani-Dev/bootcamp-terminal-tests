var assert = require("assert");
var isWeekday = require("../isWeekday");


describe('This test finds out if the parameter passed in is a day of the week or falls in the weekend ' , function(){
    it('Should return false if the week day is on a weekend i.e starting with an "S"' , function(){
        assert.equal(false,isWeekday ("Sunday"));

        assert.deepEqual(true,isWeekday("Monday"));
         
    });

    it('Should return false if the week day is a on a weekend i.e starting with an "S"' , function(){
        assert.equal(false,isWeekday ("Saturday"));

        assert.deepEqual(true,isWeekday("Friday"));
    
    });

});