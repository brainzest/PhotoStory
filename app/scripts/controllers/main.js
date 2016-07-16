//'use strict';

/**
 * @ngdoc function
 * @name photostoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photostoryApp
 */
angular.module('photostoryApp')
  .controller('MainCtrl', function ($scope,$rootScope,$http,Lightbox,Image) {

    $scope.authenticated=false;
    $scope.images=[];
    //Get list of Images
    $scope.getData= function () {
      Image.get().then(function (response) {
        $scope.images = response.data;
      });

    }
    //Return tags from tags api /json  used for  search
    $scope.getTags = function(val) {
      return $http.get('tags.json').then(function(response){
        return response.data;
      });
    };
    // if login page and credentials are created, store cookies and authenticate
    // currently a boolean which just renders the data based on order if 'Authenticated' param is set to true.
    $scope.login=function(){
      $scope.authenticated=true;
      $rootScope.order = 'order';
    }
    $scope.logout=function(){
      $scope.authenticated=false;
      $rootScope.order = '';

    }
    $scope.selected = '';

    /**Pagination Code ----//
    $scope.filteredImages=[];
    $scope.currentPage = 1;
    $scope.numPerPage = 16
    $scope.maxSize = 5;
    $scope.blocked=false;
    $scope.numPages = function () {
        return Math.ceil($scope.todos.length / $scope.numPerPage);
      };
        $scope.$watch("currentPage + numPerPage + selected", function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;
        if($scope.selected!=''){
          $scope.filteredImages=$scope.images;
          $scope.blocked=true;
        }
        else {
            $scope.blocked=false;
            $scope.filteredImages = $scope.images.slice(begin, end);
          }
      });
    **/

    $scope.openLightboxModal = function (index) {
     Lightbox.openModal($scope.images, index);
    };
  })
  .config(function (LightboxProvider) {
    LightboxProvider.fullScreenMode = true;
}).directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    };
});
