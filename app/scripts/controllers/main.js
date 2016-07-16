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
    $scope.filteredImages=[];
    $scope.currentPage = 1;
    $scope.numPerPage = 16
    $scope.maxSize = 5;
    $scope.blocked=false;
    $scope.numPages = function () {
        return Math.ceil($scope.todos.length / $scope.numPerPage);
      };
    $scope.getData= function () {
      Image.get().then(function (msg) {
        $scope.images = msg.data;
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;
        $scope.filteredImages = $scope.images.slice(begin, end);
      });

    }
    $scope.login=function(){
      $scope.authenticated=true;
      $rootScope.order = 'order';

    }

    $scope.logout=function(){
      $scope.authenticated=false;
      $rootScope.order = '';

    }
    $scope.selected = '';
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
    $scope.openLightboxModal = function (index) {
     Lightbox.openModal($scope.images, index);
    };
    $scope.getTags = function(val) {
      return $http.get('tags.json').then(function(response){
        return response.data;
      });
    };



  })
  .config(function (LightboxProvider) {
    LightboxProvider.fullScreenMode = true;
});
