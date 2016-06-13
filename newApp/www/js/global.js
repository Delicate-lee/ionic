//全局变量模块
angular.module('global',[])
  .constant("GlobalVariable",{
    'SERVER_PATH':'192.168.1.1:8000/',//服务器地址，约定大于配置
    'VERSION':'1.0.1'
  })
