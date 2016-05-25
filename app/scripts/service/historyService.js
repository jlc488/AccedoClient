'use strict';


angular.module('accedoClientApp')
  .factory('HistoryService', function( $http){
    var thisHistoryService = {};

    var baseURL =  'http://accedotv-server.eastasia.cloudapp.azure.com:9000';

    //fetch all the history data from DB
    thisHistoryService.FindAll = function(){
      var promise = $http({
        method : 'GET',
        url : baseURL + '/v1/history'
      })
        .then(function(resp){
          return resp.data;
        }, function( resp){
          return resp.data;
        });
      return promise;
    };

    //post the history data to DB
    thisHistoryService.Add = function( obj ){
      var promise = $http({
        method : 'POST',
        url : baseURL + '/v1/history',
        data : obj
      })
        .then(function(resp){
          return resp.statusText;
        }, function( resp ){
          return resp.statusText;
        });

        return promise;
    };

    return thisHistoryService;
  });
