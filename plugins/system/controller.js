function SystemInfo($scope, $http, SystemInfoService, SpeechService, Focus, $interval) {
    
	SystemInfoService.init(function () {
//        refreshAuth();
//        addVoiceControl();
//        currentStateInfo();
//        $interval(refreshAuth, 60000 * 30); // minutes
//        $interval(currentStateInfo, 1000 * config.spotify.timeout); // seconds
    });
}

angular.module('SmartMirror')
    .controller('SystemInfo', SystemInfo);