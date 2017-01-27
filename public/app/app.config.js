(function() {
  'use strict';

  console.log('inside config');
  angular.module('app').config(config)

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'score',
        url: '/',
        component: 'score',
      })

  }
}());
