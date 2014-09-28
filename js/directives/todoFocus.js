(function(){
  'use strict';
  var todomvc = angular.module('todomvc');
  todomvc.directive('todoFocus', function todoFocus($timeout) {
    return function(scope, elem, attrs) {
      scope.$watch(attrs.todoFocus, function(newVal) {
        if (newVal) {
          $timeout(function() {
            elem[0].focus(); // what is this?
          }, 0, false);
        }
      });
    };
  });
}());
