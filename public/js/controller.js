app.controller('JourneyCtrl', function($scope, journeyfact, $http) {

		$scope.test = "Hello";

		$scope.addToDB = function() {

// Below: Server and Client Interacting
			$http.post('/', {data: $scope.input}).success(function (response) {
				console.log(response);
			})
		} 
})
