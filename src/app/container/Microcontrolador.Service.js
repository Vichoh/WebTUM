(function () {

  'use strict';

  angular
  .module('app')
  .service('MicrocontroladorService', microcontroladorService);

  microcontroladorService.$inject = ['$resource', 'API_CONST'];

  function microcontroladorService($resource, API_CONST) {
    return $resource(API_CONST.apiUrl + 'controladores/:id', {id: '@id'});
  }
})();
