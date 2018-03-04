var util = require('handlebars-utils');
var HandlebarsHelper = function () {

};
HandlebarsHelper.prototype.or = function () {
    var len = arguments.length - 1;
    var options = arguments[len];
    var val = false;

    for (var i = 0; i < len; i++) {
        if (arguments[i]) {
            val = true;
            break;
        }
    }
    return util.value(val, this, options);
};
HandlebarsHelper.prototype.compare = function(a, operator, b, options) {
        /*eslint eqeqeq: 0*/

        if (arguments.length < 4) {
            throw new Error('handlebars Helper {{compare}} expects 4 arguments');
        }

        var result;
        switch (operator) {
            case '==':
                result = a == b;
                break;
            case '===':
                result = a === b;
                break;
            case '!=':
                result = a != b;
                break;
            case '!==':
                result = a !== b;
                break;
            case '<':
                result = a < b;
                break;
            case '>':
                result = a > b;
                break;
            case '<=':
                result = a <= b;
                break;
            case '>=':
                result = a >= b;
                break;
            case 'typeof':
                result = typeof a === b;
                break;
            default: {
                throw new Error('helper {{compare}}: invalid operator: `' + operator + '`');
            }
        }

        return util.value(result, this, options);

}
module.exports = HandlebarsHelper;