var app = angular.module('myweb', []);

/*---- controller cases start----*/
app.controller('case', function($scope, $http) {
	$http.get('../../Json/cases.json').success(function(respone) {
		$scope.cases = respone.cases;
	})
})
/*---- controller cases end----*/