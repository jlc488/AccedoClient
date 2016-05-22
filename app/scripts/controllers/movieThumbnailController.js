'use strict';


/**
 * @ngdoc function
 * @name accedoClientApp.controller:MovieThumbnailCtrl
 * @description
 * # MovieThumbnailCtrl
 * Controller of the accedoClientApp
 */
angular.module('accedoClientApp')
  .controller('MovieThumbnailCtrl',['$scope', 'MTService', '$rootScope', '$uibModal' ,function ($scope, MTService, $rootScope, $uibModal) {

    MTService.FindAll().then(function( ret ){
      $scope.totalCount = ret.totalCount;
      $scope.result = ret;
      $rootScope.ret = ret;
      $scope.dataLoaded = true;
    }, function( ret ){
      console.log(ret);
    }, function( ret ){
      console.log('error : '+ret);
    });

    $scope.open = function (idx) {

      var modalInstance = $uibModal.open({
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        resolve : {
          idx : function(){
            return idx;
          }
        }
      });
    };

      $scope.slickConfig = {
        enabled: true,
        accessibility : true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        dots: false,
        mobileFirst: false ,
        swipeToSlide: true,
        draggable: true,
        event: {
          beforeChange: function (event, slick, currentSlide, nextSlide) {
            //console.log( slick );
            //console.log('before' + event + slick + currentSlide + nextSlide );
          },
          afterChange: function (event, slick, currentSlide, nextSlide) {
            //console.log( currentSlide);
          }
      },
      responsive: [
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
     ]
    };

  }]);
