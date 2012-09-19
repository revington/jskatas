var assert = require('assert'),
    ocr = require('../ocr');
describe('ocr kata', function () {
    describe('User story 1', function () {
        describe('#encodeEntry()', function () {
            it('should encode 123456789', function () {
              var entry = '    _  _     _  _  _  _  _ /n' + 
													'  | _| _||_||_ |_   ||_||_|/n' + 
													'  ||_  _|  | _||_|  ||_| _|/n' + 
													'                           /n';
                assert.deepEqual(ocr.encodeEntry(entry), '123456789');
            });
            it('should encode 000000051 "', function () {
              var entry = ' _  _  _  _  _  _  _  _    /n' + 
													'| || || || || || || ||_   |/n' + 
													'|_||_||_||_||_||_||_| _|  |/n' + 
													'                           /n';
                assert(ocr.encodeEntry(entry), '000000051');
            });
        });
    });
    describe('User story 2', function () {
        it('#checksum(111111111) should return false"', function () {
            assert(ocr.checksum('111111111') === false);
        });
        it('#checksum(404045750) should return false"', function () {
            assert(ocr.checksum('404045750') === false);
        });
    });
});
