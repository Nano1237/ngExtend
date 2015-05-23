/**
 * @ngdoc directive
 * @name xt.directive:xtSrcErr
 * @restrict A
 * @description
 * This Directive allowes you to define an alternative source if the source loaded with src or ngSrc is not found.
 * It works like the alt attribute, just that you load another image not a text.
 * @scope
 * @param {string} xtSrcErr Die Alternat Source Image Url
 */

var xtSrcErrDirective = function () {
    return {
        restrict: 'A',
        scope: {xtSrcErr: '=xtSrcErr'},
        link: function ($scope, $element, $attr) {
            $element.bind('error', function () {
                if ($attr.src != $scope.xtSrcErr) {
                    $attr.$set('src', $scope.xtSrcErr);
                }
            });
        }
    };
};
