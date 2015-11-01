(function(){

var app = angular.module('app', ['ionic']);

app.controller('AppCtrl', function($q, $scope){

  function add(x,y){
    var q = $q.defer();
    setTimeout(function(){
      var result = x + y;
      if (result >= 0){
      q.resolve(x + y);
      }else{
        q.reject('negative value: ' + result);
      }   
    }, 100);
    return q.promise;
  }

  var startTime= Date.now();
  var promise = add(5,-10)
    .then(function(result){
      return add(result,3);
    })
    .then(function(result){
      return add(result,1); // You can use both of them ( result + 1; // add(result,1); )
    }/*, function(failure){
      return 0;
    }*/)
  /*  .then(function(result){
      return Array(result).join('*');
    })*/
    .then(function(result){
      $scope.result = result;
  })
    .catch(function(failure){
      $scope.failure = failure;
    })
    .finally(function(){
      $scope.elapsedTime = Date.now() - startTime;
    });
  //add(5,2, function(result){
    //add(result, 3, function(result){
      // add(result, 1, function(result){
        //  $scope.result = result;
          //$scope.elapsedTime = Date.now() - startTime;
   //     }, function(error){/*handle error*/});
    //  }, function(error){/*handle error*/});
   // }, function(error){/*handle error*/});
  });
})();
