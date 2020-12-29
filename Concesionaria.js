var Auto=require('./Auto.js')
var Moto=require('./Moto');
var Vehiculo=require('./Vehiculo');

class Concesionaria
{
    constructor(nombre, direccion)
    {
        this.nombre=nombre;
        this.direccion=direccion;
        this.vehiculos=new Array();
    };

    cargarDatos()
    {
        this.vehiculos.push(new Auto("Peugeot","206",200000.00,4));
        this.vehiculos.push(new Moto("Honda","Titan",60000.00,125));
        this.vehiculos.push(new Auto("Peugeot","208",250000.00,5));
        this.vehiculos.push(new Moto("Yamaha","YBR",80500.50,160));
    }

    vehiculoMasCaro()
    {
        let max=-99999;
        let aux;
        let res="";
        this.vehiculos.forEach(vehiculo =>
        {
            aux=vehiculo.getPrecio();
            if(aux>max)
            {
                max=aux;
                res=vehiculo.getNombre();
            }
        });
        return res;
    }

    vehiculoMasBarato()
    {
        let max=99999;
        let aux;
        let res="";
        this.vehiculos.forEach(vehiculo =>
        {
            aux=vehiculo.getPrecio();
            if(aux<max)
            {
                max=aux;
                res=vehiculo.getNombre();
            }
        });
        return res;
    }

    vehiculoConLetra(letra)
    {
        let aux;
        let arr=new Array();
        let res='';
        this.vehiculos.forEach(vehiculo =>
        {
            aux=vehiculo.getPrecio();
            if(vehiculo.getModelo().includes(letra))
                arr.push(vehiculo);
        });
        arr.forEach(item =>
        {
            res+=item.getNombre()+' $'+item.getPrecio()+'\n';
        });
        return res;
    }

    ordenarVehiculosPrecio()
    {
        let stop=false;
        let arr;
        let res='';
        let max=-9999;
        arr=this.vehiculos.sort((a,b)=>
        {
            return a.getPrecio() < b.getPrecio() ? 1:-1;
        });
        arr.forEach(item =>
        {
            res+=item.getNombre()+'\n';
        });
        return res;
    }
};

module.exports=Concesionaria;