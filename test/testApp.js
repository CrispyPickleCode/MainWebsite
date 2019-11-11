const chai = require('chai');
const fs = require('fs');

describe('Basic Testing', function(){    
    it('Enviornment File Exists', function() {
        chai.assert.isTrue(fs.existsSync('.env'));
    });
});