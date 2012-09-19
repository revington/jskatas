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
    ocr.encodeEntry = function (input) {
        var i, k, j = 0,
            ret = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < entryChars; i++) {
            if (i && 0 === (i % rows)) {
                j++;
            }
            for (k = 0; k < 3; k++) {
                if (input[i + (entryLimit * k)] !== ' ') {
                    ret[j] += (1 << ((i % rows) + rows * k));
                }
            }
        }
        return ret.map(function (c) {
            return mapNumbers[c] || '?';
        }).join('');
    };
    ocr.checksum = function (input) {
        var sum = 0,
            len = input.length,
            i = len;
        while (i--) {
            if (input[i] === '?') {
                return 'err';
            }
            sum += (input[i] - 0) * i;
        }
        return sum % 11 === 0;
    };
})(typeof exports === 'undefined' ? ocr = {} : exports);
