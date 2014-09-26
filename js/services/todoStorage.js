angular.module('todomvc').factory('todoStorage', [todoStorage]);

function todoStorage(){
  'use strict';
  var STORAGE_ID = 'todos-angularjs';

  return {
    get: function () {
      return JSON.parse(localStorage.getItems(STORAGE_ID) || '[]');
    },
    put: function(todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    }
  };
}
