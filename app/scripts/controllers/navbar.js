'use strict';

angular.module('marksAndSpencerApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Feed',
        'link': '/feed'
      },
    ];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
