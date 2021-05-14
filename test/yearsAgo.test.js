var assert = require("assert");

var yearsAgo = require("../yearsAgo");

describe('This test how many years ago it was from the current year? ' , function(){
    it('How many years between the current year and 2010' , function(){
        assert.equal(2010, yearsAgo(11));
    });

    it('How many years between the current year and 2005' , function(){
        assert.equal(2005, yearsAgo(16));
    });

    it('How many years between the current year and 2013' , function(){ 
        assert.deepEqual(2013, yearsAgo(8));
        
    });

});