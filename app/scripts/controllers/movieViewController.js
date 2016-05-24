'use strict';


angular.module('accedoClientApp')
  .controller('MovieViewCtrl',['$scope','HistoryService','$rootScope', '$uibModalInstance','idx','$sce', function($scope, HistoryService, $rootScope, $uibModalInstance, idx, $sce){

    $scope.videoAPI = null;

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
        poster:$rootScope.ret.entries[idx].images[0].url,
        controls: {
                       autoHide: true,
                       autoHideTime: 5000
                   }
      }
    };

    $scope.onPlayerReady = function(api) {
          //  console.log('onPlayerReady : : ', api);
           $scope.videoAPI = api;
       };

    $scope.close = function () {
      $uibModalInstance.dismiss('cancel');
    };

    HistoryService.Add($rootScope.ret.entries[idx]).then(function(d){
      console.log(d);
    }, function( d ){
      console.log(d);
    });

}]);
