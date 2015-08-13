var app = angular.module('sounder').controller('mainCtrl', function($scope, $sce, mainService) {

    $scope.getUser = function() {
        mainService.getUser($scope.searchText)
            .then(function(data) {
                $scope.userData = data.data;
            })
    };

    $scope.getUserInfo = function() {
        mainService.getUserInfo($scope.searchText)
            .then(function(data) {
                console.log(data);
                $scope.userInfo = data;
            })
    };

    $scope.play = function(track_url) {
        SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
            $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
        });
    }

});
