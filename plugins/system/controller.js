function SystemInfo($scope, $http, SystemInfoService, SpeechService, Focus, $interval) {
    
	SystemInfoService.init(function () {
//        infoDevice();
        $interval(temperatureCPU, 1000 * 1); // seconds
        $interval(loadCPU, 1000 * 1); // seconds
    });
    
    var infoDevice = function () {
        SystemInfoService.getDevice();
    }
    
    var temperatureCPU = function () {
        SystemInfoService.getTempCPU();
    }
    
    var loadCPU = function () {
        SystemInfoService.getLoadCPU();
    }
}

angular.module('SmartMirror')
    .controller('SystemInfo', SystemInfo);