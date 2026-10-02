import readlineSync from 'readline-sync';
import {Calculadora} from './src/calculadora.js';

console.log("Bienvenido a la calculadora");
const operador = readlineSync.question("Ingrese el operador (+, -, *, /): ");
const primerNumero = Number(readlineSync.question("Ingrese el primer numero: "));//antes res era una variable global que se actualizaba en cada while, ahora ese numero se lo entrego al objeto newCalculadora y es el quien guarda y actuliza el resultado internamente
const calculadora1= new Calculadora(primerNumero);

let continuar = "s";
while (continuar === "s" || continuar === "S") {
    let num = Number(readlineSync.question("Ingrese otro numero: "));

if(operador === "+"){
  calculadora1.sumar(num);
} else if(operador === "-"){
  calculadora1.restar(num);
} else if(operador === "*"){
  calculadora1.multiplicar(num);
} else if(operador === "/"){
  calculadora1.dividir(num);
}
continuar = readlineSync.question("Desea continuar? (s/n): ");

}


console.log("El resultado final es: " + calculadora1.obtenerResultado());