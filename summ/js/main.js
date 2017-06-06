angular.module('AddNumbersApp', [])
.controller('AddNumbersController', function($scope) {
		var a =10;
		var b = 20;
        $scope.summ = b+a;
        $scope.AddNumbers = function() {
            var c = Number($scope.c || 0);
            var d = Number($scope.d || 0);
            $scope.summ2 = c+d;
        }
        
});

