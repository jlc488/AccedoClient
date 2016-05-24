'use strict';


angular.module('accedoClientApp')
  .controller('MovieViewCtrl',['$scope','HistoryService','$rootScope', '$uibModalInstance','idx','$sce', function($scope, HistoryService, $rootScope, $uibModalInstance, idx, $sce){

    $scope.API = null;

    $scope.onPlayerReady = function(API){
        $scope.API = API;
    };

    $scope.config = {
      preload: 'none',
      sources:[
        {
          src: $sce.trustAsResourceUrl($rootScope.ret.entries[idx].contents[0].url),
          type: 'video/mp4'
        }
      ],
      tracks:[],
      theme: {
        url: 'http://www.videogular.com/styles/themes/default/latest/videogular.css'
      },
      plugins:{
        poster:$rootScope.ret.entries[idx].images[0].url
      }
    };

    $scope.close = function () {
      $uibModalInstance.dismiss('cancel');
    };
/*
    var ret = HistoryService.Add($rootScope.ret.entries[$routeParams.id]).then(function(d){
      console.log(d);
    }, function( d ){
      console.log(d);
    });
*/

}]);
