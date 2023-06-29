/* Agrega un método llamado retirar(cantidad) a la clase "CuentaBancaria" que reste la cantidad proporcionada del saldo actual. Asegúrate de verificar si hay suficiente saldo antes de realizar la operación */

class CuentaBancaria{

    constructor (saldo, titular){
       this.saldo = saldo
       this.titular = titular
    }   

    depositar(cantidad){
       this.saldo += cantidad 
       console.log(this.titular+" Saldo actual "+ this.saldo );

    }
    retirar(cantidad){
        if (cantidad > this.saldo) {
            console.log("Saldo insuficiente. No se puede realizar la operación.");
          } else {
            this.saldo -= cantidad;
            console.log("Retiro realizado. Saldo actual: " + this.saldo);
          }
        }
}
let cuenta = new CuentaBancaria(150, "Pedro")
cuenta.retirar(180)