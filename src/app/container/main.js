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
    vm.imagePathUV = '../app/img/new-logos/UV/green.png';
    vm.imagePathTemperatura = '../app/img/new-logos/Temp/ice.png';
    vm.imagePathMonoxido = '../app/img//new-logos/CO/white.png';
    vm.posts = function () {
      UltimoIngresadoService.get().$promise.then(function (data) {
        $log.debug(data);
        $log.debug(selecTemp(data.temperatura));
        vm.imagePathTemperatura = selecTemp(data.temperatura);
        vm.imagePathMonoxido = selecMO(data.monoxido);
        vm.imagePathUV = selecUV(data.radiacion);
        vm.microcontrolador = data;
      });
    };
    var promise = $interval(function () {
      vm.posts();
    }, 5000);
    $scope.$on('$destroy', function () {
      $interval.cancel(promise);
    });
    function selecTemp(data) {
      if (data <= 15) {
        return '../app/img/new-logos/Temp/ice.png';
      }else if (data <= 30 && data > 15) {
        return '../app/img/new-logos/Temp/normal.png';
      }else{
        return '../app/img/new-logos/Temp/hot.png';
      }
    }
  }
  function selecMO(data) {
    if (data <= 15) {
      return '../app/img/new-logos/CO/white.png';
    }else if (data <= 30 && data > 15) {
      return '../app/img/new-logos/CO/gray.png';
    }else{
      return '../app/img/new-logos/CO/dark-gray.png';
    }
  }
  function selecUV(data) {
    if (data < 3) {
      return '../app/img/new-logos/UV/green.png';
    }else if (data < 6 && data >= 3) {
      return '../app/img/new-logos/UV/yellow.png';
    }else if (data <= 8 && data >= 6) {
      return '../app/img/new-logos/UV/orange.png';
    }else if (data <= 11 && data >= 11) {
      return '../app/img/new-logos/UV/red.png';
    }else{
      return '../app/img/new-logos/UV/purple.png';
    }
  }
})();
