'use strict';


angular.module('accedoClientApp')
  .controller('MovieViewCtrl',['$scope','HistoryService','$rootScope', '$uibModalInstance','idx', function($scope, HistoryService, $rootScope, $uibModalInstance, idx){

    $scope.videoURL = $rootScope.ret.entries[idx].contents[0].url;
    $scope.imgURL = $rootScope.ret.entries[idx].images[0].url;

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
  }])
  .filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
