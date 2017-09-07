(function () {
  'use strict';

  angular
  .module('app')
  .component('app', {
    templateUrl: 'app/container/main.html',
    controller: appCtrl,
    controllerAs: 'vm'
  });

  appCtrl.$inject = ['UltimoIngresadoService', '$interval', '$scope', '$log'];

  function appCtrl(UltimoIngresadoService, $interval, $scope, $log) {
    var vm = this;
    vm.imagePathUV = '../app/img/uv.png';
    vm.imagePathTemperatura = '../app/img/temperatura.png';
    vm.imagePathMonoxido = '../app/img/monoxido.png';
    vm.posts = function () {
      UltimoIngresadoService.get().$promise.then(function (data) {
        $log.debug(data);
        vm.microcontrolador = data;
      });
    };
    var promise = $interval(function () {
      vm.posts();
    }, 5000);
    $scope.$on('$destroy', function () {
      $interval.cancel(promise);
    });
  }
})();
