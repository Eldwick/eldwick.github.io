(function() {
  var app = angular.module("jamesj", ['ui.router', 'ngAnimate','ui.bootstrap'])

  app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.
      state('home', {
        url: '/',
        templateUrl: 'template/splash.html',
        controller: 'PortfolioController'
      }).
      state('portfolio', {
        url: '/portfolio',
        templateUrl: 'template/portfolio.html',
        controller: 'PortfolioController'
      }).
      state('contact', {
        url: '/contact',
        templateUrl: 'template/contact.html',
        controller: 'PortfolioController'
      })
  }]);

  app.controller("PortfolioController", ["$http", "$scope", "$modal", function($http, $scope, $modal) {
    $scope.tab = 2;
    $scope.selectTab = function(tabNum) {
      $scope.tab = tabNum;
    }
    $scope.isSelected = function(tabNum) {
      return $scope.tab === tabNum
    }

  }])
})() 

function openModal() {
  $('#jobr').modal()
}