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
    'ui.event'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/movie-thumbnails.html',
        controller: 'MovieThumbnailCtrl',
        controllerAs: 'MTCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
