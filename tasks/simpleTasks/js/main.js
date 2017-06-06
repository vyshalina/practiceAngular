angular.module('myPracriceApp', []).controller('myPracriceController', function MyController($scope) {
	$scope.name = 'Иван';
	$scope.surname = 'Иванов';
	$scope.age = 25;

	$scope.langs = {
		name: 'Иван',
		surname: 'Иванов',
		age: '25',
	};
	$scope.languages = ['html', 'css', 'js', 'php'];

	$scope.countries = {
		Минск: 'Беларусь',
		Москва: 'Россия',
		Киев: 'Украина',
	};
	$scope.workers = [
		{name: 'Коля', age: 30, salary: 400},
		{name: 'Вася', age: 31, salary: 500},
		{name: 'Петя', age: 32, salary: 600},
	];

	$scope.nameChange = 'Иван';
	$scope.changeName = function(){
		$scope.nameChange = 'Дима';
	}

});

