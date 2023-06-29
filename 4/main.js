/* Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular de tu elección. Deposita 100 en la cuenta llamando al método depositar(). */

class CuentaBancaria{

    constructor (saldo, titular){
       this.saldo = saldo
       this.titular = titular
    }   

    depositar(cantidad){
       this.saldo += cantidad 
       console.log(this.titular+" Saldo actual "+ this.saldo );

    }
}
let miCuenta = new CuentaBancaria(0, "Camilo")
let cuenta = new CuentaBancaria(0, "Pedro")
miCuenta.depositar(100)