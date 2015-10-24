// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function(){
var app = angular.module('mynotes', ['ionic', 'mynotes.notestore']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('list',{
    url: '/list',
    templateUrl: 'templates/list.html'
  });

  $stateProvider.state('add',{
    url: '/add',
    templateUrl: 'templates/edit.html',
    controller: 'AddCtrl'
  });

  $stateProvider.state('edit',{
    url: '/edit/:noteId',
    templateUrl: 'templates/edit.html',
    controller: 'EditCtrl'
  });

  $urlRouterProvider.otherwise('/list');
});

app.controller('ListCtrl', function($scope, NoteStore){
  $scope.notes = NoteStore.list();
});

app.controller('AddCtrl', function($scope, $state, NoteStore){  

  $scope.note = {
    id: new Date().getTime().toString(),
    title: '',
    description: ''
  };

  $scope.save = function(){
    NoteStore.create($scope.note);
    $state.go('list'); //we return to the main page
  };
});

app.controller('EditCtrl', function($scope, $state, NoteStore){  /*$state service allow us to get de param in url*/

  $scope.note = angular.copy(NoteStore.get($state.params.noteId)); //provides a note copy in order to get the original copy if user don't save the changes

  $scope.save = function(){
    NoteStore.update($scope.note);
    $state.go('list'); //we return to the main page
  };
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
}());