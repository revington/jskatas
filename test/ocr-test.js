var assert = require('assert'),
    ocr = require('../ocr');
describe('ocr kata', function () {
	describe('User story 1', function(){
    describe('#encodeOne()', function () {
        it('should encode 8 as 506', function () {
            var eight = ' _ ' + '|_|' + '|_|';
            assert(506 === ocr.encodeOne(eight));
        });
    });
    describe('#encodeEntry()', function () {
        it('should encode 123456789', function () {
          var entry = '    _  _     _  _  _  _  _ /n' + 
											'  | _| _||_||_ |_   ||_||_|/n' + 
											'  ||_  _|  | _||_|  ||_| _|/n' + 
											'                           /n';
					assert.deepEqual(ocr.encodeEntry(entry),[ 288, 242, 434, 312, 410, 474, 290, 506, 442 ]); 
        });
    });
		describe('#translateEntry()', function(){
        it('should translate 000000051 "', function () {
          var entry = ' _  _  _  _  _  _  _  _    /n' + 
											'| || || || || || || ||_   |/n' + 
											'|_||_||_||_||_||_||_| _|  |/n' + 
											'                           /n';
					assert(ocr.encodeEntry(entry),'000000051'); 
        });
        it('should translate 123456789 into a string "12345679"', function () {
          var entry = '    _  _     _  _  _  _  _ /n' + 
											'  | _| _||_||_ |_   ||_||_|/n' + 
											'  ||_  _|  | _||_|  ||_| _|/n' + 
											'                           /n';
					assert(ocr.encodeEntry(entry),'123456789'); 
        });

		});
	});
	describe('User story 2', function(){

	});
});
