var app = angular.module('myweb', []);
/*----controller knowledge start----*/
app.controller('knowledge', function($scope, $http) {
	$http.get('Json/knowledge.json').success(function(respone) {
		$scope.knowledges = respone.knowledges;
	})
})

app.controller('knowledgeList', function($scope, $http) { //推荐知识列表
	$http.get('Json/knowledge.json').success(function(respone) {
		$scope.knowledgeLists = respone.knowledgeLists;
	})
})


/*---- controller knowledge end----*/

/*---- controller cases start----*/
app.controller('case', function($scope, $http) {
	$http.get('Json/cases.json').success(function(respone) {
		$scope.cases = respone.cases;
	})
})
/*---- controller cases end----*/

/*---- controller books start----*/
app.controller('book', function($scope, $http) {
	$http.get('Json/books.json').success(function(respone) {
		$scope.books = respone.books;
	})
})

app.controller('booksList', function($scope, $http) {//推荐书籍列表
	$http.get('Json/books.json').success(function(respone) {
		$scope.booksLists = respone.booksLists;
	})
})
/*---- controller books end----*/