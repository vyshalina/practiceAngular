angular.module('myApp', []).controller('MyController', function MyController($scope) {
	$scope.showMe = function(){
		alert('Привет');
	};	
	$scope.showMessege = function(){
		$scope.message = 'Привет Мир!';
	};

	$scope.mess = 'Меняющийся текст';

	$scope.messCh = function(){
		$scope.mess = 'Изменился текст';
	}
	
});

