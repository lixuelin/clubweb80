var app = angular.module('myweb', []);

/*---- controller cases start----*/
app.controller('work', function($scope, $http) {
	$http.get('../../Json/msg.json').success(function(respone) {
		$scope.works = respone.works;
	})
})

app.controller('skill', function($scope, $http) {
	$http.get('../../Json/msg.json').success(function(respone) {
		$scope.skills = respone.skill;
	})
})
/*---- controller cases end----*/