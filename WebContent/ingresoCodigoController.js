var app = angular.module('myApp', []).controller('ingresoCodigoController',
		ingresoCodigoController);

function ingresoCodigoController($scope, $http) {

	$scope.consultarCodigo = function() {
		$http(
				{
					method : 'GET',
					url : 'http://localhost:8081/codigo-seguimiento/'
							+ $scope.codigoSeguimiento,
				}).then(function successCallback(response) {
			$scope.pedido = response.data;
			$state.go("consultaPedido", {
				pedido : $scope.pedido
			});
		});
	}

};