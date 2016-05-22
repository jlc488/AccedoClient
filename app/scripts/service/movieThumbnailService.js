'use strict';


angular.module('accedoClientApp')
  .factory('MTService', function($http){

    var thisMTService = {};

    thisMTService.FindAll = function(){
      var promise = $http({
        method : 'GET',
        url : 'https://demo2697834.mockable.io/movies'
      })
      .then( function( resp ){
        return resp.data;
      }, function( resp ){
        return resp.data;
      });
      return promise;
    };

    return thisMTService;
  });
