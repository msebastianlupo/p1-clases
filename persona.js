'use strict'

class Persona{
    #domicilio;

    constructor(nombre, apellido, fecha_nacimiento, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.dni = dni;
    }

    set guardarDomicilio(domicilio){
        this.#domicilio = domicilio;
    }
}