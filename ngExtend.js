/**
* @preserve Copyright 2015 Tim Ruecker.
*/
(function(window, angular, undefined){
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
        input = +input;
        x = x || 0;
        return input.toFixed(x);
    };
}

/**
 * @ngdoc directive
 * @name xt.directive:xtSrcErr
 * @restrict A
 * @description
 * This Directive allows you to define an alternative source if the source loaded with src or ngSrc is not found.
 * It works like the alt attribute, just that you load another image not a text.
 * @param {string} xtSrcErr Die Alternate Source Image Url or a variable containing the url
 */

function xtSrcErrDirective() {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attr) {
            var reg = /(^['"]|['"]$)/g;
            var isValue = reg.test($attr.xtSrcErr);
            $element.bind('error', function () {
                var value = isValue ? $attr.xtSrcErr.replace(reg, '') : $scope[$attr.xtSrcErr];
                if ($attr.src != value) {
                    $attr.$set('src', value);
                }
            });
        }
    };
}
/* global angular */

angular.module('ngExtend', [])


    .filter('toFixed', toFixedFilter)


    .directive('xtSrcErr', xtSrcErrDirective)
;
})(window, angular);