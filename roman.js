(function (roman) {
    var t = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM', 'MMMM', 'MMMMM', 'MMMMMM', 'MMMMMMM', 'MMMMMMMM', 'MMMMMMMMM']
    ],
        t2 = [
            [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
        ],
        t3 = {
            two: {
                'CM': 900,
                'CD': 400,
                'XC': 90,
                'XL': 40,
                'IX': 9,
                'IV': 4
            },
            one: {
                'M': 1000,
                'D': 500,
                'C': 100,
                'L': 50,
                'X': 10,
                'V': 5,
                'I': 1
            }
        };
    roman.toRoman = function (input) {
        var i, len, str = '' + input,
            ret = '';
        for (i = 0, len = str.length; i < len; i++) {
            ret += t[len - (i + 1)][str[i] - 0];
        }
        return ret;
    };
    roman.toRomanRemainder2 = function (input) {
        var ret = '',
            remainder = input || 0,
            i = t2.length;
        for (i = 0; i < t2[0].length; i++) {
            while (remainder && remainder >= t2[0][i]) {
                remainder -= t2[0][i];
                ret += t2[1][i];
            }
        }
        return ret;
    };
    roman.toRomanRemainder = function (input) {
        var ret = '',
            n = 0,
            remainder = input,
            i = t.length,
            j;
        while (i--) {
            j = t[i].length;
            while (remainder && j--) {
                n = Math.pow(10, i) * j;
                if (remainder >= n) {
                    remainder -= n;
                    ret += t[i][j];
                }
            }
        }
        return ret;
    };
    roman.toRomanRec = function (input) {
        var str = '' + input;
        return !input ? '' : t[str.length - 1][str[0] - 0] + roman.toRomanRec(str.substring(1));
    };
    roman.toDecimal = function (input) {
        var i = t.length,
            j, ret = 0,
            entry = '',
            skip = 0;
        while (i--) {
            j = t[i].length;
            while (j--) {
                entry = t[i][j];
                if (skip === input.indexOf(entry, skip)) {
                    skip += entry.length;
                    ret += Math.pow(10, i) * j;
                    continue;
                }
            }
        }
        return ret;
    };
    roman.toDecimalRec = function rec(input) {
        var val = 0;
        if (!input) {
            return 0;
        }
        val = t3.two[input.substring(0, 2)] || false;
        if (val) {
            return val + rec(input.substring(2));
        } else {
            return t3.one[input[0]] + rec(input.substring(1));
        }
    };
    roman.toDecimalRec2 = function rec(input) {
        return !input ? 0 : (function (v) {
            return v ? v + rec(input.substring(2)) : t3.one[input[0]] + rec(input.substring(1));
        })(t3.two[input.substring(0, 2)] || 0);
    };
		// Mutual recursion with #drm()
    roman.toDecimalRecMutual = function rec(input) {
        if (!input) {
            return 0;
        }
        var two = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV'].indexOf(input.substring(0, 2));
        return two >= 0 ? ((two % 2 ? 4 : 9) * drm(input[0])) + rec(input.substring(2)) : drm(input);
    };
    var drm = function (input) {
            if (!input) {
                return 0;
            }
            var i = 'IVXLCDM'.indexOf(input[0]),
                x = (i % 2 === 0) ? 1 : 5;
            i = x === 5 ? i - 1 : i;
            return x * Math.pow(10, Math.round(i / 2)) + roman.toDecimalRecMutual(input.substring(1));
        };
})(typeof exports === "undefined" ? roman = {} : exports);
