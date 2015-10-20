	
 angular.module('flickrApp', ['ngMaterial']).
 controller('ListCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.results = [];
		$scope.isSearching = false;
		$scope.search = function(){
			$scope.isSearching = true;
			$http({
				method: 'GET',
				url: 'https://api.flickr.com/services/rest',
				params: {
					method: 'flickr.photos.search',
					api_key: 'f2e4d4689df02b2dd3b417e37262134c',
					text: $scope.searchTerm,
					format: 'json',
					nojsoncallback: 1
				}
			}).success(function(data){
				$scope.isSearching = false;
				$scope.results = data ;	
			}).error(function(error){
				$scope.isSearching = false;
				console.error(error);
			});
		};
 }]);