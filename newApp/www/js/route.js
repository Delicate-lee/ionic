
angular.module('route', [
  'guidePage.route',
  'tab.route',
  'home.route',
  'category.route',
  'goodsList.route',
  'starter.controllers',
  'starter.services'
])

  .config(function($stateProvider, $urlRouterProvider) {


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

  });
