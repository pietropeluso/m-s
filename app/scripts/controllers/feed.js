'use strict';

angular.module('marksAndSpencerApp')
  .controller('FeedCtrl', function ($scope, $http) {

    $scope.category = 'all';

    $http.get('/api/feed').success(function(data) {
      $scope.items = data;
    });

    $scope.categorySelected = function (category) {
      var cat = category.toLowerCase();
      
      if ($scope.category === 'all') {
        return true;
      }
      else {
        if (cat === 'food & wine') {
          if ($scope.category === 'food_and_wine') {
            return true;
          }
          else {
            return false;
          }
        }
        else if (cat === 'flowers & gifts') {
          if ($scope.category === 'flowers_and_gifts') {
            return true;
          }
          else {
            return false;
          }
        }
        else {
          return $scope.category === cat;
        }
      }
    };
  });
