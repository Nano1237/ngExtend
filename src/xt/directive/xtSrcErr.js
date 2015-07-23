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
            var regex_isString = /(^['"]|['"]$)/g,
                isValue = regex_isString.test($attr.xtSrcErr);
            $element.bind('error', function () {
                var value = isValue ? $attr.xtSrcErr.replace(regex_isString, '') : $scope[$attr.xtSrcErr];
                if ($attr.src != value) {
                    $attr.$set('src', value);
                }
            });
        }
    };
}