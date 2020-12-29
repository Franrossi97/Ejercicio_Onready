var Concesionaria=require('./Concesionaria.js')

var concesionaria=new Concesionaria("Franco","Gascon 1770");

concesionaria.cargarDatos();

console.log('Vehiculo mas caro: '+concesionaria.vehiculoMasCaro());
console.log('Vehiculo mas barato: '+concesionaria.vehiculoMasBarato());
console.log('Vehículo que contiene en el modelo la letra ‘Y’: '+concesionaria.vehiculoConLetra('Y'));

console.log('Vehículos ordenados por precio de mayor a menor:\n'+concesionaria.ordenarVehiculosPrecio());