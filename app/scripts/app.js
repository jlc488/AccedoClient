'use strict';

/**
 * @ngdoc overview
 * @name accedoClientApp
 * @description
 * # accedoClientApp
 *
 * Main module of the application.
 */
angular
  .module('accedoClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'slickCarousel',
    'ui.bootstrap',
    'ui.event',
    'com.2fdevs.videogular',
		'com.2fdevs.videogular.plugins.controls',
		'com.2fdevs.videogular.plugins.overlayplay',
		'com.2fdevs.videogular.plugins.poster'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/movie-thumbnails.html',
        controller: 'MovieThumbnailCtrl',
        controllerAs: 'MTCtrl'
      })
      .when('/history',{
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'HCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
