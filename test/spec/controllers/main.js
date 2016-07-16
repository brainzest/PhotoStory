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
    httpBackend.whenGET("tags.json").respond([{ "tag" : "Watch Dogs"},{"tag" : "Assassin Creed"},{"tag":"Game"}]);

       // Which HTTP requests do we expect to occur, and how do we response?
       httpBackend.expectGET('data.json').respond(
         [{
           "url": "images/ac_l.jpg",
           "thumbUrl": "images/abe_s.jpg",
           "description": "This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.",
           "tag":"Game"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/mmho_s.jpg",
           "tag":"Assassin Creed"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/coa_l.jpg",
           "description": "The left and right arrow keys are binded for navigation. ",
           "tag":"Watch Dogs"
         },{
           "url": "images/ac_l.jpg",
           "thumbUrl": "images/abe_s.jpg",
           "description": "This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.",
           "tag":"Game"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/mmho_s.jpg",
           "tag":"Assassin Creed"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/coa_l.jpg",
           "description": "The left and right arrow keys are binded for navigation. ",
           "tag":"Watch Dogs"
         },{
           "url": "images/ac_l.jpg",
           "thumbUrl": "images/abe_s.jpg",
           "description": "This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.",
           "tag":"Game"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/mmho_s.jpg",
           "tag":"Assassin Creed"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/coa_l.jpg",
           "description": "The left and right arrow keys are binded for navigation. ",
           "tag":"Watch Dogs"
         },{
           "url": "images/ac_l.jpg",
           "thumbUrl": "images/abe_s.jpg",
           "description": "This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.",
           "tag":"Game"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/mmho_s.jpg",
           "tag":"Assassin Creed"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/coa_l.jpg",
           "description": "The left and right arrow keys are binded for navigation. ",
           "tag":"Watch Dogs"
         },{
           "url": "images/ac_l.jpg",
           "thumbUrl": "images/abe_s.jpg",
           "description": "This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.",
           "tag":"Game"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/mmho_s.jpg",
           "tag":"Assassin Creed"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/coa_l.jpg",
           "description": "The left and right arrow keys are binded for navigation. ",
           "tag":"Watch Dogs"
         },{
           "url": "images/ac_l.jpg",
           "thumbUrl": "images/abe_s.jpg",
           "description": "This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.",
           "tag":"Game"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/mmho_s.jpg",
           "tag":"Assassin Creed"
         },
         {
           "url": "images/coa_l.jpg",
           "thumbUrl": "images/coa_l.jpg",
           "description": "The left and right arrow keys are binded for navigation. ",
           "tag":"Watch Dogs"
         }
         ]

       );
       it('should attach a list of images to the scope', function () {
         expect(scope.images.length).toBe(18);
       });
       // Respond to all HTTP requests
       //httpBackend.flush();

       // Triggering the AngularJS digest cycle in order to resolve all promises
       scope.$apply();



   });




});
