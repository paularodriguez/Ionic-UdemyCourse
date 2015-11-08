(function(){
var app = angular.module('app', ['ionic','ngCordova']);

app.controller('LocationCtrl', function($scope, $cordovaGeolocation, $ionicPlatform){

  function showMap(coords){
    var mapOptions = {
      center: {lat: coords.latitude, lng: coords.longitude},
      zoom:8
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  };

  $ionicPlatform.ready(function(){

  var posOptions = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.coords = position.coords;
      showMap(position.coords);
    }, function(err) {
      console.log('getCurrentPosition error: ' + angular.toJson(err));
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
