(function () {
	'use strict';
	angular.module('app')
	.controller('BarGrafTemperatura.controller', barGrafCtrl);

	barGrafCtrl.$inject = ['buscarPorDiaService'];

	function barGrafCtrl(buscarPorDiaService) {
		var vm = this;
		vm.location = 'bar';

		var fecha = new Date();
		vm.fecha = (fecha.getMonth()+1)+"/"+fecha.getDate()+"/"+fecha.getFullYear();

		vm.datoTemperatura = [];

		buscarPorDiaService.get({fecha: convertDate(vm.fecha)}).$promise.then(function(data){

	  		for(var i=0;i<data.length;i++){
				vm.datoTemperatura[i] = data[i].temperatura;
			}
			

	  	});

		// consulta al servidor cada vez que elegimos una fecha
	  	
	  	vm.enviarForm = function (data) {
	  		

	  		console.log(convertDate(data));	


	  		buscarPorDiaService.get({fecha: convertDate(data)}).$promise.then(function(data){


	  			console.log(data);
		  		for(var i=0;i<data.length;i++){
					vm.datoTemperatura[i] = data[i].temperatura;
				}
				console.log(vm.data);

		  	});


	  	}

	  	// datos para el grafico

	  	vm.data = vm.datoTemperatura;

	  	vm.labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
	  	'07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
	  	'17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

	  	vm.colors = ['#46BFBD'];

	  	vm.options = {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        },
		        title: {
            		display: true,
            		text: 'Temperatura por hora'
        		}
		    };

		function convertDate(str) {
			var date = new Date(str);
			var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
			var day = ('0' + date.getDate()).slice(-2);
			return [date.getFullYear(), mnth, day].join('-');
		}  

	}

})();