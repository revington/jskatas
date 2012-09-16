(function (ocr) {
    var mapNumbers = {
        '504': '0',
        '288': '1',
        '242': '2',
        '434': '3',
        '312': '4',
        '410': '5',
        '474': '6',
        '290': '7',
        '506': '8',
        '442': '9'
    },
        entryLen = 116,
        rows = 3,
        entryChars = 27,
        entryLimit = 29;
    ocr.encodeOne = function (input) {
        var ret = 0,
            i = input.length;
        while (i--) {
            ret += (input[i] === ' ') ? 0 : Math.pow(2, i);
        }
        return ret;
    };
    ocr.encodeEntry = function (input) {
        var i, ret = [],
            buffer = ['', '', '', '', '', '', '', '', ''];
        for (i = 0; i < entryChars; i++) {
            if (i > 0 && 0 === (i % rows)) {
                ret.push(ocr.encodeOne(buffer));
            }
            buffer[i % rows] = input[i];
            buffer[(i % rows) + rows] = input[i + entryLimit];
            buffer[(i % rows) + (rows * 2)] = input[i + (entryLimit * 2)];
        }
        ret.push(ocr.encodeOne(buffer));
        return ret;
    };
    ocr.translateEntry = function (input) {
        var arr = ocr.encodeEntry(input),
            i = arr.length,
            ret = '';
        while (i--) {
            ret = mapNumbers['' + arr[i]] + ret;
        }
				return ret;
    };
})(typeof exports === 'undefined' ? ocr = {} : exports);
