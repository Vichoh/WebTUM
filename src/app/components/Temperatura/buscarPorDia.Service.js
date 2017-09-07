(function () {
  'use strict'

  angular
  .module('app')
  .service('buscarPorDiaService', buscarPorDiaService);

  buscarPorDiaService.$inject = ['$resource', 'API_CONST'];

  function buscarPorDiaService($resource, API_CONST) {
    return $resource(API_CONST.apiUrl + 'datosDia/:fecha', {fecha: '@fecha'}, {
      get: {
        isArray: true
      }
    });
  }
})();
