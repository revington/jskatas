var assert = require('assert'),
    potter = require('../potter');
describe('acceptance test', function () {
    it('should pass some basic tests', function () {
        assert(0 === potter.price([]));
        assert(8 === potter.price([0]));
        assert(8 === potter.price([1]));
        assert(8 === potter.price([2]));
        assert(8 === potter.price([3]));
        assert(8 === potter.price([4]));
        assert(8 * 2 === potter.price([0, 0]));
        assert(8 * 3 === potter.price([1, 1, 1]));
    });
    it('several discounts', function () {
        assert(8 * 2 * 0.95 === potter.price([0, 1]));
        assert(8 * 3 * 0.9 === potter.price([0, 2, 4]));
        assert(8 * 4 * 0.8 === potter.price([0, 1, 2, 4]));
        assert(8 * 5 * 0.75 === potter.price([0, 1, 2, 3, 4]));
    });
    it('should pass several discounts', function () {
        assert(8 + (8 * 2 * 0.95) === potter.price([0, 0, 1]));
        assert(2 * (8 * 2 * 0.95) === potter.price([0, 0, 1, 1]));
        assert((8 * 4 * 0.8) + (8 * 2 * 0.95) === potter.price([0, 0, 1, 2, 2, 3]));
        assert(8 + (8 * 5 * 0.75) === potter.price([0, 1, 1, 2, 3, 4]));
    });
});
describe('implementation tests', function () {
    it('should compute one line', function () {
        var line = potter.line();
        line['1'] = 1;
        line['0'] = 0;
        assert(16, potter.computeLine(line));
    });
});
