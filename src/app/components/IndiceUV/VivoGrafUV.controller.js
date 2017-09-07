(function () {
  'use strict';
  angular
  .module('app')
  .controller('VivoGrafUV.controller', vivoGrafUVCtrl);
  vivoGrafUVCtrl.$inject = ['UltimoIngresadoService', '$interval', '$scope', '$log'];
  function vivoGrafUVCtrl(UltimoIngresadoService, $interval, $scope, $log) {
    var vm = this;
    vm.location = 'line';
    var contUV = 0;
    var id = -1;
    vm.indices = [];
    vm.created = [];
    vm.posts = function () {
      UltimoIngresadoService.get().$promise.then(function (data) {
        $log.debug(data);
        if (contUV === 12) {
          contUV = 0;
          vm.indices = [];
          vm.data = vm.indices;
        }
        if (data.id !== id) {
          vm.indices[contUV] = data.radiacion;
          vm.created[contUV] = data.created_at;
          id = data.id;
          contUV++;
          $log.debug(contUV);
          $log.debug(vm.indices);
        }
      });
    };
    var promise = $interval(function () {
      vm.posts();
    }, 3000);
    $scope.$on('$destroy', function () {
      $interval.cancel(promise);
    });
    vm.data = vm.indices;
    vm.labels = [ , , , , , , , , , , ,];
    vm.options = {
      scales: {
        yAxes: [{
          stacked: false,
          ticks: {
            beginAtZero: true
          }
        }]
      },
      title: {
        display: true,
        text: 'Indice UV en tiempo real'
      },
      animation: {
        duration: 0
      },
      hover: {
        animationDuration: 0
      },
      responsiveAnimationDuration: 0
    };
    vm.datasetOverride = {
      fill: false,
      borderColor: 'yellow'
    };
  }
})();
