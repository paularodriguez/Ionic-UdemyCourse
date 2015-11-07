(function(){

var app  = angular.module('app', ['ionic']);

app.controller('DeviceCtrl', function($scope){

  document.addEventListener('deviceready', function(){
    console.log('device is ' + angular.toJson(device));
    $scope.$apply(function(){
      $scope.device = device;
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
