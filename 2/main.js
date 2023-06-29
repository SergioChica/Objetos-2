/* Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección. Llama al método  ladrar() de la instancia */

class Perro{

    constructor(nombre){

    this.nombre = nombre;
     }
    ladrar() {
    console.log(" ¡Woof!"+ this.nombre);
    }

}
let Miperro = new Perro("Rocky")
let perro = new Perro("Tyson")
console.log(Miperro.ladrar());