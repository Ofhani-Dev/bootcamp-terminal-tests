var assert = require("assert");

var findItemsOver20 = require("../findItemsOver20");


describe('This test checks the object and looks for items with quanitities which are above 20' , function(){

    it("This should give us the name of the fruits with quantities over 20" , function(){
     //     assert.equal([], findItemsOver20([]));
            assert.deepEqual([], findItemsOver20([]));
    });

});