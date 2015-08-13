var app = angular.module('sounder').service('mainService', function($http, $q) {

    this.getUser = function(username) {
        return $http({
            method: 'GET',
            url: 'http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e'
        })
    };

    this.getUserInfo = function(username) {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.soundcloud.com/users/' + username + '.json?client_id=bda4ada8694db06efcac9cf97b872b3e'
        })
            .then(function(data) {
                var userData = {
                    avatar: data.data.avatar_url,
                    username: username,
                    name: data.data.full_name,
                    city: data.data.city,
                    followers: data.data.followers_count,
                    tracks: data.data.track_count
                };
                dfd.resolve(userData);
            });
        return dfd.promise;
    }
});
