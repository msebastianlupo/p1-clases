'use strict'

class Familia{

    #integrantes;

    constructor(){
        this.#integrantes = [];
    }
    agregarIntegrante(integrante){
        this.#integrantes.push(integrante);
    }

    obtenerCantidadIntegrantes(){
      return this.#integrantes.length;
    }

    listarIntegrantes(){
        let nombres = [];
        let integrante;
        for(integrante of this.#integrantes){
            nombres.push(integrante.nombre);
        }
        return nombres;
    }

    obtenerDomicilio(){
    return `${domicilio.obtenerCalle} ${domicilio.obtenerNumero}`;
    }
}