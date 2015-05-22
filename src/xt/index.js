/* global angular */

angular.module('xt', [])


    .filter('toFixed', toFixedFilter)


    .directive('xtSrcErr', xtSrcErrDirective)
;