var tube = angular.module('tube',[]);

tube.controller('tubeController', function($scope, $http) {

   $scope.holder = [];

  $http.get('http://transportapi.com/v3/uk/tube.json?api_key=d91966cd38ad23b8a95f759f7d983e62&app_id=14368b83')
    .success(function(data){
      $scope.lines = data.lines;
       $.each($scope.lines, function(name){
        $scope.holder.push(this.friendly_name + " Line: " + this.status );
        console.log($scope.holder)
      });
  });
});


