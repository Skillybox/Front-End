'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'temp_home/home.html',
    controller: 'HomeCtrl'
  });
}])


.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.lol = 'MDrrrrrr';
}]);