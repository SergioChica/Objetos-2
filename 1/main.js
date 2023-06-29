/* Crea una clase llamada "Perro" con un atributo llamado "nombre". Agrega un método llamado ladrar() que imprima en la consola "¡Woof!" junto al nombre del perro. */

class Perro{

    constructor(nombre){

    this.nombre = nombre;
     }
    ladrar() {
    console.log(" ¡Woof!"+ this.nombre);
    }

}
let perro = new Perro("Tyson")
console.log(perro.ladrar());