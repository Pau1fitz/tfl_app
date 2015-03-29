describe('tubeAppController', function() {
  beforeEach(module('tube'));

  var httpBackend, scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {

    scope = $rootScope.$new();
    ctrl = $controller('tubeController', {
        $scope: scope,
        $http: $http
    });
  }));

});