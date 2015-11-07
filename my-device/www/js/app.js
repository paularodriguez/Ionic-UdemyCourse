(function(){

var app  = angular.module('app', ['ionic', 'ngCordova']);

app.controller('DeviceCtrl', function($scope, $cordovaDevice, $ionicPlatform){

 $ionicPlatform.ready(function(){
    $scope.$apply(function(){
      $scope.device = $cordovaDevice.getDevice();
    });
  });

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

})();
