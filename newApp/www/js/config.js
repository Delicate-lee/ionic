//配置模块，控制不同平台的兼容性
//tabs显示位置
angular.module('config',[])
  .config(function ($ionicConfigProvider) {

    $ionicConfigProvider.platform.android.tabs.position("bottom");
    $ionicConfigProvider.platform.ios.tabs.position("bottom");

  })
