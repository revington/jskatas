(function (potter) {
    potter.line = function () {
        return {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0
        };
    };
    potter.price = function (input) {
        var ret = 0,
            discount = 0,
            cost = 8,
            lines = [potter.line()],
            i = input.length,
            j = 0;
        for (i = 0; i < input.length; i++) {
            for (j = 0; j < lines.length; j++) {
                if (0 === lines[j][input[i] + '']) {
                    lines[j][input[i] + '']++;
                    break;
                }
            }
            if (j === lines.length) {
                var nLine = potter.line();
                nLine[input[i] + '']++;
                lines.push(nLine);
            }
        }
        for (i = 0; i < lines.length; i++) {
            ret += potter.computeLine(lines[i]);
        }
        return ret;
    };
    potter.discount = function (input) {
        return input * [0, 1, 0.95, 0.9, 0.8, 0.75][input / 8];
    };
    potter.computeLine = function (input) {
        var i, ret = 0;
        for (i in input) {
            if (0 < input[i]) {
                ret += 8;
            }
        }
        var r = potter.discount(ret);
        return r;
    };
})(typeof exports === "undefined" ? potter = {} : exports);
