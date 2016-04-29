'use strict';

var app = angular.module('myApp');

// services.js
// all services and factories

app.service('Item', function($http) {

  // manage all item api calls

  this.getAll= () => {
    return $http.get('/api/items');
  };

  this.create = item => {
    return $http.post('/api/items', item);
  };

  this.remove = item => {
    console.log('remove item:', item)
    return $http.delete(`/api/items/${item.id}`);
  };

  this.saveEdit = item => {
    return $http.post('/api/items', item);
  };



  // this.getTotalDebits = item => {
  //   return $http.get('/api/items', item);
  // }

 

 

 
});