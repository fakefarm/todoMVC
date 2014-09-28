  'use strict';

  var todomvc = angular.module('todomvc');

  todomvc.controller('todoCtrl', ['$scope', function ($scope) {
    $scope.hello = { name: 'dave'};
  }]);

todomvc.controller('secondController', function($scope){
});
