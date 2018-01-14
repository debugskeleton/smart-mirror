(function () {
	'use strict';

	function SystemInfoService() {
		var service = {};
        const si = require('systeminformation');
    }

    service.init = function (cb) {
        // callback style
        si.cpu(function(data) {
            console.log('CPU-Information:');
            console.log(data);
        });

        // promises style - new in version 3
        si.cpu()
            .then(data => console.log(data))
            .catch(error => console.error(error));

        // full async / await example (node >= 7.6)
        async function cpu() {
          try {
            const data = await si.cpu();
            console.log(data)
          } catch (e) {
            console.log(e)
          }
        }
    }

    return service;

	angular.module('SmartMirror')
    .factory('SystemInfoService', SystemInfoService);

} ());
