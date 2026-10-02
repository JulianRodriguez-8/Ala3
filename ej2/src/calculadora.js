export class Calculadora {
    #resultado; // declara la variable como privada, ya no se puede acceder desde fuera de la clase como caluladora.resultado

    constructor(valorInicial) {
        this.#resultado = valorInicial; // Inicializa el resultado con el valor inicial
    }

    sumar(valor) {
        this.#resultado =this.#resultado + valor; // Suma el valor al resultado
        return this.#resultado; // Devuelve el resultado actualizado
    }
    restar(valor) {
        this.#resultado =this.#resultado - valor; // Resta el valor al resultado
        return this.#resultado; 
    }

    multiplicar(valor) {
        this.#resultado =this.#resultado * valor; // Multiplica el resultado por el valor
        return this.#resultado;
    }

    dividir(valor) {
        if (valor !== 0) {
            this.#resultado =this.#resultado / valor; // Divide el resultado por el valor
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        return this.#resultado;
    }

    obtenerResultado() { //sin este metodo no puedo acceder al resultado desde fuera de la clase, cambia al ej anterior
        return this.#resultado; // Devuelve el resultado actual
    }
}