var assert = require("assert")
var regCheck = require("../regCheck")


describe('This test check whether or not number plates are from certain provinces' , function(){
    it('Will show its true if number plates had loaction(GP) on number plate' , function(){
        assert.equal(true,regCheck("DV 23 NB GP", "GP"));

        assert.deepEqual(false, regCheck("DV 23 NB GP", "L"));
    });

    it('Will show its true if number plates had loaction(L) on number plate' , function(){
        assert.equal(true,regCheck("DV 23 NB L", "L"));

        assert.deepEqual(false, regCheck("DV 23 NB GP", "MP"));
    });

    it('Will show its true if number plates had loaction(MP) on number plate' , function(){
        assert.equal(true,regCheck("DV 23 NB MP", "MP"));

        assert.deepEqual(false, regCheck("DV 23 NB GP", "NW"));
    });
});