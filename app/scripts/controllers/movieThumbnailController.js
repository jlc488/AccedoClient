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

    var currMovieIdx = 0;

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
      currMovieIdx = idx;

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


    $rootScope.$on('$viewContentLoaded', function () {
console.log('start');
      //$scope.element( ($document).getElementById(currMovieIdx)).focus();
    if( $scope.dataLoaded ){
      angular.element('#0').attr('class', 'selected').focus();
    }
  });


    $rootScope.checkBtnEvent = function( evt ){

      if( evt.which == 13){ //enter
        evt.preventDefault();
        $scope.open(currMovieIdx);
      }

    };


      $scope.slickConfig = {
        enabled: true,
        accessibility : true,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
        dots: false,
        mobileFirst: false ,
        swipeToSlide: true,
        draggable: true,
        slidesToScroll: 1,
        event: {
          beforeChange: function (event, slick, currentSlide, nextSlide) {
          //  event.preventDefault();
//console.log(event);

              //$(slick.currentTarget).attr('class', 'selected').focus()
              //$(slide.$slides.get(index)).attr
              angular.element('#'+currentSlide).attr('class', '');
              angular.element('#'+nextSlide).attr('class', 'selected').focus();

          },
          init: function( event, slick, currentSlide, nextSlide){
              angular.element('#0').attr('class', 'selected').focus();
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
