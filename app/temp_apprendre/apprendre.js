'use strict';

angular.module('myApp.apprendre', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/apprendre', {
    templateUrl: 'temp_apprendre/apprendre.html',
    controller: 'ApprendreCtrl'
  });
}])


.controller('ApprendreCtrl', ['$scope', function($scope) {
    $scope.lol = 'MDrrrrrr';
}]);