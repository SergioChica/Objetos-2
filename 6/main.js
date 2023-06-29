/* Llama al método retirar() en la instancia "miCuenta" para retirar 50. Imprime en la consola el saldo actual después de la operación */

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
let miCuenta = new CuentaBancaria(1000, "Camilo")
let cuenta = new CuentaBancaria(150, "Pedro")
cuenta.retirar(50)