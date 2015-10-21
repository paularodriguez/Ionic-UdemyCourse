// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
(function(){
var app = angular.module('starter', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('list',{
    url: '/list',
    templateUrl: 'templates/list.html'
  });

  $stateProvider.state('edit',{
    url: '/edit/:noteId',
    templateUrl: 'templates/edit.html'
  });

  $urlRouterProvider.otherwise('/list');
});

var notes = [{
      id:'1',
      title: 'First note',
      description: 'This is my first note'
    },
    {
      id:'2',
      title: 'Second note',
      description: 'This is my second note'
    }];

function getNote(noteId){
  for (var i = 0; i < notes.length; i++){
    if(notes[i].id === noteId){
      return notes[i];
    }
  }
  return undefined;
}

function updateNote(note){
  for (var i = 0; i < notes.length; i++){
    if(notes[i].id === note.id){
      notes[i] = note;  //if the notes are the same, this note is replaced
      return;
    }
  }
}

app.controller('ListCtrl', function($scope){
  $scope.notes = notes;
});

app.controller('EditCtrl', function($scope, $state){  /*$state service allow us to get de param in url*/

  $scope.note = angular.copy(getNote($state.params.noteId)); //provides a note copy in order to get the original copy if user don't save the changes

  $scope.save = function(){
    updateNote($scope.note);
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