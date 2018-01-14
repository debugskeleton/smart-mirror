(function () {
	'use strict';

    // https://www.npmjs.com/package/systeminformation
	function SystemInfoService() {
		var service = {};
        const si = require('systeminformation');

        service.init = function (cb) {
            // callback style
            si.system(function (data) {
                console.log('System-Information:', data.model);
                console.log(data);
            });
        }
        
        service.getLoadCPU = function (option='currentload') {
            si.cpuLoad(function (data) {
                console.log('CPU-Load:', data[option]);
                console.log(data);
            });
        }
        
        service.getTempCPU = function (option='main') {
            si.cpuTemperature(function (data) {
                console.log('CPU-Temperature:', data[option]);
                console.log(data);
            });
        }

        return service;
    }

	angular.module('SmartMirror')
    .factory('SystemInfoService', SystemInfoService);

} ());
