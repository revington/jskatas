var assert = require('assert'),
    roman = require('../roman.js');
describe('Roman to decimal', function () {
    var toRoman = ['toRoman','toRomanRemainder','toRomanRemainder2', 'toRomanRec'],
        i, len, curr;
    for (i = 0, len = toRoman.length; i < len; i++) {
        curr = roman[toRoman[i]];
        describe('#' + toRoman[i] + ' ()', function () {
            it('should convert 3999 to "MMMCMXCIX"', function () {
                assert('MMMCMXCIX' === curr(3999));
            });
            it('should convert 2000 to "MM"', function () {
                assert('MM' === curr(2000));
            });
            it('should convert 1999 to "MCMXCIX"', function () {
                assert('MCMXCIX' === curr(1999));
            });
            it('should convert 1981 to "MCMLXXXI"', function () {
                assert('MCMLXXXI' === curr(1981));
            });
            it('should convert 1 to "I"', function () {
                assert('I' === curr(1));
            });
        });
    }
});
describe('Decimal to roman', function(){
    var toDecimal = ['toDecimal', 'toDecimalRec', 'toDecimalRec2','toDecimalRecMutual'],
        i, len, curr;
    for (i = 0, len = toDecimal.length; i < len; i++) {
        curr = roman[toDecimal[i]];
        describe('#' + toDecimal[i] + '()', function () {
            it('should convert "MMMCMXCIX" to 3999 ', function () {
                assert(3999 === curr('MMMCMXCIX'));
            });
            it('should convert "MM" to 2000', function () {
                assert(2000 === curr('MM'));
            });
            it('should convert "MCMXCIX" to 1999', function () {
                assert(1999 === curr('MCMXCIX'));
            });
            it('should convert "MCMLXXXIV" to 1984', function () {
                assert(1984 === curr('MCMLXXXIV'));
            });
            it('should convert "MCMLXXXI" to 1981', function () {
                assert(1981 === curr('MCMLXXXI'));
            });
        });
    }
});
