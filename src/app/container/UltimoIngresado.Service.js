(function () {

  'use strict';

  angular
  .module('app')
  .service('UltimoIngresadoService', ultimoIngresadoService);

  ultimoIngresadoService.$inject = ['$resource', 'API_CONST'];

  function ultimoIngresadoService($resource, API_CONST) {
    return $resource(API_CONST.apiUrl + 'ultimoValor/:id', {id: '@id'});
  }
})();
