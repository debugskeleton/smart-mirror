function SystemInfo($scope, $http, SystemInfoService, SpeechService, Focus, $interval) {
    
	SystemInfoService.init(function () {
        $interval(refreshAuth, 1000 * 1); // seconds
        $interval(currentStateInfo, 1000 * 1); // seconds
    });
    
    var temperatureCPU = function () {
        SystemInfoService.getTempCPU();
    }
    
    var loadCPU = function () {
        SystemInfoService.getLoadCPU();
    }
}

angular.module('SmartMirror')
    .controller('SystemInfo', SystemInfo);