angular
.module('photostoryApp')
.factory('Image', function ($http) {
    return {
        get: function () {
            return $http.get('data.json');
        }
    };
});
