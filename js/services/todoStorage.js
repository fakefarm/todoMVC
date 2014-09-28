'use strict';

var todomvc = angular.module('todomvc');

todomvc.factory('todoStorage', function() {
  var STORAGE_ID = 'todos-angularjs';
  return {
    get: function () {

      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },
    put: function(todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    }
  };
});
