
angular.module('tab.route', [
  'tab.controller',
  'starter.controllers',
  'starter.services'
])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      //先找抽象路由，把模板内容放到index.html中
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'areas/tab/tab.html'
      })

      // Each tab has its own nav history stack:
      //把内容放到views指定的坑里
      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'areas/tab/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'areas/tab/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'areas/tab/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'areas/tab/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })


    .state('tab.self', {
      url: '/self',
      views: {
        'tab-account': {
          templateUrl: 'areas/tab/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  });


