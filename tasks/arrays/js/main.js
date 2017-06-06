angular.module('myApp', []).controller('MyController', function MyController($scope) {
	$scope.users = ['Коля', 'Вася', 'Петя'];
	$scope.people = [
					{name: 'Коля', age: 25},
					{name: 'Вася', age: 26},
					{name: 'Петя', age: 27},
				];
});

