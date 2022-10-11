'use strict'

class Domicilio{

    #calle;
    #numero;
    #departamento;
    #localidad;
    #provincia;
    #codigo_postal;

    constructor(calle, numero, departamento, localidad, provincia, codigo_postal){
    this.#calle = calle;
    this.#numero = numero;
    this.#departamento = departamento;
    this.#localidad = localidad;
    this.#provincia = provincia;
    this.#codigo_postal = codigo_postal;
    }

    set cambiarCalle(calle){
        this.#calle = calle;
    }
    set cambiarNumero(numero){
        this.#numero = numero;
    }
    set cambiarDepartamento(departamento){
        this.#departamento = departamento;
    }
    set cambiarLocalidad(localidad){
        this.#localidad = localidad;
    }
    set cambiarProvincia(provincia){
        this.#provincia = provincia;
    }
    set cambiarCodigo_postal(codigo_postal){
        this.#codigo_postal = codigo_postal;
    }

    get obtenerCalle(){
        return this.#calle;
    }
    get obtenerNumero(){
        return this.#numero;
    }
}