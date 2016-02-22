// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var atyaatAppModule = angular.module('atyaatAppModule', ['ionic'])

atyaatAppModule.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


atyaatAppModule.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider


    .state('login',{
    url:'/',
    controller:'loginCtrl',
    templateUrl:'template/login.html'
  })

    .state('popUp',{
      url:'/popup',
      templateUrl:'template/popup.html'
    })

    .state('signUp',{
      url:'/signUp',
    controller:'signUpCtrl',
      templateUrl:'template/signUp.html'
    })

    .state('mainPage',{
      url:'/mainPage',
      controller:'mainPageController',
      templateUrl:'template/mainPage.html'
    })

    .state('atyat',{
      url:'/atyat',
      controller:'atyatCtrl',
      templateUrl:'template/atyat.html'
    })

    .state('sadqat',{
      url:'/sadqat',
      controller:'mainPageController',
      templateUrl:'template/sadqat.html'
    })

    .state('zakat',{
      url:'/zakat',
      controller:'mainPageController',
      templateUrl:'template/zakat.html'
    })

    .state('fidya',{
      url:'/fidya',
      controller:'mainPageController',
      templateUrl:'template/fidya.html'
    })

    .state('fitra',{
      url:'/fitra',
      controller:'mainPageController',
      templateUrl:'template/fitra.html'
    })

    .state('taamer-e-masjid',{
      url:'/taamer-e-masjid',
      controller:'mainPageController',
      templateUrl:'template/taamer-e-masjid.html'
    })

    .state('Card',{
      url:'/card',
      controller:'mainPageController',
      templateUrl:'template/card.html'
    })

});
