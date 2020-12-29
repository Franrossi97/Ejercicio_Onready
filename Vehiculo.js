class Vehiculo
{
    constructor(marca, modelo, precio)
    {
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
    }

    getPrecio()
    {
        return this.precio;
    }

    getNombre()
    {
        return this.marca+" "+this.modelo;
    }

    getModelo()
    {
        return this.modelo;
    }
};

module.exports=Vehiculo;