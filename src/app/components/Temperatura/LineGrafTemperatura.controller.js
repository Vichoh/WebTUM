(function () {
	'use strict';
	angular
	.module('app')
	.controller('LineGrafTemperatura.controller', lineGrafTempCtrl);

	lineGrafTempCtrl.$inject = ['UltimoIngresadoService', '$interval', '$scope'];


	function lineGrafTempCtrl(UltimoIngresadoService, $interval, $scope) {
		var vm = this;
		vm.location = 'line';
		var contTemperaturas = 0;
		var id = -1;
		vm.temperaturas = [];
		vm.created = [];

		vm.posts = function() {

			UltimoIngresadoService.get().$promise.then(function (data){

				console.log(data);

				if (contTemperaturas == 12) {
					contTemperaturas = 0;
					vm.temperaturas = [];
					vm.data = vm.temperaturas;
				}
				if (data.id != id) {

					vm.temperaturas[contTemperaturas] = data.temperatura;
					vm.created[contTemperaturas] = data.created_at;

					id = data.id ;
					contTemperaturas++;
					console.log(contTemperaturas);	
					console.log(vm.temperaturas);
				}
				


			});
		}

		var promise = $interval(function() {

			vm.posts();

		},
		3000);

		$scope.$on('$destroy', function () 
		{ 
			$interval.cancel(promise); 
		});


		vm.data = vm.temperaturas;

		vm.labels = [,,,,,,,,,,,];


		vm.options = {

		        scales: {
		            yAxes: [{
		            	stacked: false,
		                ticks: {
		                    beginAtZero:true
		                }

		            }]
		        },
		        title: {
            		display: true,
            		text: 'Temperatura en tiempo real'
        		},
        		animation: {
            		duration: 0, 
		        },
		        hover: {
		            animationDuration: 0, 
		        },
		        responsiveAnimationDuration: 0,
		       

		    };

		vm.datasetOverride = {
			fill: false,
			borderColor: 'orange'
		}
		

  		

	}


})();