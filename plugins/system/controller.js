function System($scope, $http, SystemService, SpeechService, Focus, $interval) {
    
	SystemService.init(function () {
//        refreshAuth();
//        addVoiceControl();
//        currentStateInfo();
//        $interval(refreshAuth, 60000 * 30); // minutes
//        $interval(currentStateInfo, 1000 * config.spotify.timeout); // seconds
    });
}

angular.module('SmartMirror')
    .controller('System', System);