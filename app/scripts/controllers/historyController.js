'use strict';

angular.module('accedoClientApp')
.controller('HistoryCtrl', function($scope, HistoryService){

  HistoryService.FindAll().then(function(ret){
  //  $scope.totalCount = ret.totalCount;
    $scope.result = ret;
  }, function( ret ){
    console.log(ret);
  }, function( ret ){
    console.log('error : '+ret);
  });

});
