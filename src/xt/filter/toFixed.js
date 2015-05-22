/* global angular:true */

/**
 * @ngdoc filter
 * @name xt.filter:toFixed
 * @kind function
 *
 * @description
 * This Filter just calls the toFixed method of any String passed to this filter.
 * If a number is passed, the number will be casted as string.
 * If strict is set to true and any other type is passed to this filter, the input will be returned and an error is shown.
 *
 * @param {string|number} input The Number that should be fixed to a custom amount
 * @param {number=} x The amount of fixed decimals
 * @param {boolean=} strict If set to true, any non string or number passed to this filter will abort the filter and return the input
 * @returns {string|*} A string with the custom fixed value or the input of strict set to true and input not number or string
 *
 */
toFixedFilter.$inject = ['$log'];
function toFixedFilter($log) {
    return function (input, x, strict) {
        var isValidType = angular.isString(input) || angular.isNumber(input);
        if (strict && !isValidType) {
            $log.error('xt.toFixed: input is typeof ' + typeof input);
            return input;
        }
        input = input + '';
        x = x || 0;
        return input.toFixed(x);
    };
}
