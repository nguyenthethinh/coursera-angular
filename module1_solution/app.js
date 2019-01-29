(function () {
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.menu = ""
        $scope.message = ""
        $scope.check = function () {
            if ($scope.menu == '') {
                $scope.message = 'Please enter data first';
            } else {
                var items = $scope.menu.split(',');
                const result = items.filter(item => item.trim() !== "").length;
                if (result <= 3)
                    $scope.message = 'Enjoy';
                else
                    $scope.message = 'Too much!';
            }
        }
    }
})();