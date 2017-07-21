(function () {
	'use strict'
	angular
	.module('app')
	.service('buscarPorDiaService', buscarPorDiaService);

	buscarPorDiaService.$inject = ['$resource'];

	function buscarPorDiaService($resource){

		return $resource('http://192.168.0.100:8888/Arduino/ProyectoTUM/public/api/datosDia/:fecha',{fecha: '@fecha'},{
			get: {

				isArray: true
			}

		});
	}


})();