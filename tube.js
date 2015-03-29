var tube = angular.module('tube',[]);

tube.controller('tubeController', function($scope, $http) {

   $scope.holder = [];
   $scope.destination = [];
   var i = 0;

  $http.get('http://transportapi.com/v3/uk/tube.json?api_key=d91966cd38ad23b8a95f759f7d983e62&app_id=14368b83')
    .success(function(data){
      $scope.lines = data.lines;
       $.each($scope.lines, function(name){
        $scope.holder.push(this.friendly_name + " Line: " + this.status );
        console.log($scope.holder)
      });
  });

$scope.postcode = function(){

   $scope.postcode1 = $scope.postcode1.replace(/ /g,"+");
   $scope.postcode2 = $scope.postcode2.replace(/ /g,"+");

  $http.get('http://transportapi.com/v3/uk/public/journey/from/postcode:' + $scope.postcode1 + '/to/postcode:' + $scope.postcode2 + '.json?api_key=d91966cd38ad23b8a95f759f7d983e62&app_id=14368b83')
    .success(function(data){
      $scope.arrival_time = data.routes[0].arrival_time;
      $scope.routes = data.routes[0];

        for (var i = 0; i < $scope.routes.route_parts.length; i++) {
        $scope.destination.push($scope.routes.route_parts[i].mode + " to: " + $scope.routes.route_parts[i].to_point_name + " arrival time:" + $scope.routes.route_parts[i].arrival_time );


          };
       console.log($scope.dest)
    });

    };
  });


