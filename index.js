'use strict'

let domicilio = new Domicilio("corrientes", 3040, 3, "caba", "buenos aires", 1234);
let persona = new Persona("Matías", "Godoy", "11/11/1990", 33635135);
persona.guardarDomicilio = domicilio;
let familia = new Familia();