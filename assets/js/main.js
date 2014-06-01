var webApp = angular.module('webApp', []);
webApp.controller('MainController', function($scope, $http) {
	$scope.template = {};
	$http.get('json/configs.json').success(function(data) {
		$scope.template = data;
	});
});
