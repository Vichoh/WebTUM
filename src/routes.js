angular
.module('app')
.config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url: '/',
    component: 'app'
  })
  .state('barTemperatura', {
    url: '/temperatura/bar',
    controller: 'BarGrafTemperatura.controller',
    controllerAs: 'vm',
    templateUrl: 'app/components/Temperatura/Temperatura.html'
  })
  .state('lineTemperatura', {
    url: '/temperatura/line',
    controller: 'LineGrafTemperatura.controller',
    controllerAs: 'vm',
    templateUrl: 'app/components/Temperatura/Temperatura.html'
  })
  .state('diaUV', {
    url: '/indiceUV/dia',
    controller: 'DiarioGrafUV.controller',
    controllerAs: 'vm',
    templateUrl: 'app/components/IndiceUV/GrafIndiceUV.html'
  })
  .state('vivoUV', {
    url: '/indiceUV/vivo',
    controller: 'VivoGrafUV.controller',
    controllerAs: 'vm',
    templateUrl: 'app/components/IndiceUV/GrafIndiceUV.html'
  })
  .state('diaMonoxido', {
    url: '/monoxido/dia',
    controller: 'DiarioGrafMonoxido.controller',
    controllerAs: 'vm',
    templateUrl: 'app/components/Monoxido/GrafMonoxido.html'
  })
  .state('vivoMonoxido', {
    url: '/monoxido/vivo',
    controller: 'VivoGrafMonoxido.controller',
    controllerAs: 'vm',
    templateUrl: 'app/components/Monoxido/GrafMonoxido.html'
  });
}
