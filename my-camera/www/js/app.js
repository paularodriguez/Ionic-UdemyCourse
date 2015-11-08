(function(){

var app = angular.module('app', ['ionic', 'ngCordova']);

app.controller('CameraCtrl', function($scope, $cordovaCamera){
  $scope.pictureUrl = 'http://placehold.it/300x300';

  $scope.takePicture = function(){
    var options= {
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG
    };

    $cordovaCamera.getPicture(options)
      .then(function(data){
        console.log('camera data: ' + angular.toJson(data));
        $scope.pictureUrl = 'data:image/jpeg;base64,' + data;
      }, function(error){
        console.log('camera error: ' + angular.toJson(data));
      });
  }
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
