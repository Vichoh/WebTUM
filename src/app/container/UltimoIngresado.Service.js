(function () {

	'use strict';

	angular
	.module('app')
	.service('UltimoIngresadoService', ultimoIngresadoService);

	ultimoIngresadoService.$inject = ['$resource'];

	function ultimoIngresadoService($resource) {
		//return $resource('http://200.13.4.230/php_arduino/Coneccion/obtenerValor.php/:id',{id: '@id'});
		
		//return $resource('http://localhost:8000/api/controladores/:id',{id: '@id'});
		return $resource('http://192.168.0.100:8888/Arduino/ProyectoTUM/public/api/ultimoValor/:id',{id: '@id'});
	}
})();