(function () {
	'use strict';
	angular
	.module('app')
	.controller('VivoGrafMonoxido.controller', vivoGrafMonoxidoCtrl);

	vivoGrafMonoxidoCtrl.$inject = ['UltimoIngresadoService', '$interval', '$scope'];


	function vivoGrafMonoxidoCtrl(UltimoIngresadoService, $interval, $scope) {
		var vm = this;
		vm.location = 'line';
		var contMonoxido = 0;
		var id = -1;
		vm.monoxidos = [];
		vm.created = [];

		vm.posts = function() {

			UltimoIngresadoService.get().$promise.then(function (data){

				console.log(data);

				if (contMonoxido == 12) {
					contMonoxido = 0;
					vm.monoxidos = [];
					vm.data = vm.monoxidos;
				}
				if (data.id != id) {

					vm.monoxidos[contMonoxido] = data.monoxido;
					vm.created[contMonoxido] = data.created_at;

					id = data.id ;
					contMonoxido++;
					console.log(contMonoxido);	
					console.log(vm.monoxidos);
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


		vm.data = vm.monoxidos;

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
            		text: 'Monoxido en tiempo real'
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
			borderColor: 'blue'
		}
		

  		

	}


})();