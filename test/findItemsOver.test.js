var assert = require("assert");

var findItemsOver = require("../findItemsOver")


describe('This test checks the object and looks for items with quanitities which are above the threshold' , function(){

    it("This should give us the name of the fruits with quantities over the threshold" , function(){
    assert.deepEqual([], findItemsOver([]));
    });

});
