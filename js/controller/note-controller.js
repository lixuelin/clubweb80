var app = angular.module('myweb', []);

app.controller('knowledge', function($scope, $http) {
	$http.get('../../Json/knowledge.json').success(function(respone) {
		$scope.knowledges = respone.knowledges;
	})
})

app.controller('knowledgeList', function($scope, $http) { //推荐知识列表
	$http.get('../../Json/knowledge.json').success(function(respone) {
		$scope.knowledgeLists = respone.knowledges;
	})
})

app.controller('booksList', function($scope, $http) {//推荐书籍列表
	$http.get('../../Json/books.json').success(function(respone) {
		$scope.booksLists = respone.books;
	})
})