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
