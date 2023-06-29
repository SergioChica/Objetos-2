/* Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual. */

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
let cuenta = new CuentaBancaria(0, "Pedro")
cuenta.depositar(500)