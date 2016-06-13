//guidePage页面业务逻辑
//页面功能：引导页功能
angular.module('guidePage.controller',['guidePage.service'])
  .controller('GuidePageCtrl', function ($scope, $state,$ionicSlideBoxDelegate,$ionicModal,$ionicActionSheet,$ionicPopup) {
    $scope.contents=[
      {
        name:'中国',
        english:'CN'
      },
      {
        name:'美国',
        english:'USA'
      },
      {
        name:'英国',
        english:'UK'
      }
    ];
  $scope.choice={
    choice:''
  };
    $scope.click= function (index) {
      alert(index);
    };
    $scope.change= function (index) {
      alert(index);
    }
    setInterval(function () {
      $ionicSlideBoxDelegate.next();
    },3000);

    $ionicModal.fromTemplateUrl('modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //当我们用到模型时，清除它！
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // 当隐藏的模型时执行动作
    $scope.$on('modal.hide', function() {
      // 执行动作
    });
    // 当移动模型时执行动作
    $scope.$on('modal.removed', function() {
      // 执行动作
    });


    // 点击按钮触发，或一些其他的触发条件
    $scope.show = function() {

      // 显示操作表
      $ionicActionSheet.show({
        buttons: [
          { text: '<b>拍照</b> This' },
          { text: '相册' },
        ],
        destructiveText: '删除',
        titleText: '选择图片',
        cancelText: '关闭',
        buttonClicked: function(index) {
          switch (index){
            case 0:
                  console.log('拍照');
                  break;
            case 1:
                  console.log('相册');
                  break;
          }
          return true;
        }
      });
     };

    // 一个提示对话框
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Don\'t eat that!',
        template: 'It might taste good'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };

    // 触发一个按钮点击，或一些其他目标
    $scope.showPopup = function() {
      $scope.data = {}

      // 一个精心制作的自定义弹窗
      var myPopup = $ionicPopup.show({
        template: '<input type="password" ng-model="data.wifi">',
        title: '请输入 Wi-Fi 密码',
        subTitle: '请以正确格式输入',
        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.wifi) {
                //不允许用户关闭，除非他键入wifi密码
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          },
        ]
      });
      myPopup.then(function (res) {
        console.log('您的输入Wifi:', res);
      });
      $timeout(function () {
        myPopup.close(); //由于某种原因3秒后关闭弹出
      }, 3000);
    };

    //swiper 部分

    var mySwiper = new Swiper('.swiper-container', {
      //autoplay: 3000,//可选选项，自动滑动
      initialSlide :0,
      //direction : 'vertical',
      //watchSlidesProgress : true,
      //observer:true,
      pagination : '.swiper-pagination',
      //paginationType : 'fraction',//数字标识页码
      onSlideChangeEnd: function(swiper){
          var index = mySwiper.activeIndex+1;
        $('.animate').removeClass('guide-show');
        if(index === 2|| index ===3 ){

          var item = $('#tips-'+index);
          if(item.hasClass('hidden')){
            item.removeClass('hidden');
          }
          item.addClass('guide-show');
        }

      }
    });

    $scope.func_goHome= function () {
      $state.go('tab.home');
    }


    })
