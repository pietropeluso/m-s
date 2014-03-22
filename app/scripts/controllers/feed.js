'use strict';

angular.module('marksAndSpencerApp')
  .controller('FeedCtrl', function ($scope, $http) {

    $scope.category = 'All';

    $http.get('/api/feed').success(function(data) {
      $scope.items = data;
    });

    $scope.categorySelected = function (category) {
      
      if ($scope.category === 'All') {
        return true;
      }
      else {
        return $scope.category === category;
      }
    };
  });
