'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('photostoryApp'));

  var MainCtrl,httpBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
  it('should query the webservice', function() {

       // Which HTTP requests do we expect to occur, and how do we response?
       httpBackend.expectGET('/users').respond('[{"name": "First User"}, {"name": "Second User"}]');

       // Starting the controller
       controller('MainCtrl', {'$scope': scope });

       // Respond to all HTTP requests
       httpBackend.flush();

       // Triggering the AngularJS digest cycle in order to resolve all promises
       scope.$apply();

       // We expect the controller to put the right value onto the scope
       expect(scope.firstUsername).toEqual('First User');

   });


  it('should attach a list of images to the scope', function () {
    expect(scope.images.length).toBe(18);
  });
  it('should attach a list of available Tags to the scope', function () {
    expect(scope.tags.length).toBe(3);
  });
});
