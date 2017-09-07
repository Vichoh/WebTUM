(function () {
  'use strict';
  angular
  .module('app')
  .component('footer', {
    templateUrl: 'app/components/Footer/Footer.html',
    controller: footerCtrl,
    controllerAs: 'vm'
  });

  footerCtrl.$inject = [];

  function footerCtrl() {

  }
})();