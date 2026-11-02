//no cambia nada porque no se necesita asincornia (async(await) porque no realiza nunguna escritura en el disco)

import readlineSync from "readline-sync";
import { obtenerTareas } from "../tareas/tareaStores.js";
import { menuDetalleTarea } from "./menuDetalleTarea.js";

function contieneTexto(textoCompleto, textoBuscado) {  //Función interna (sin export, solo la usa este archivo). Busca si textoBuscado aparece dentro de textoCompleto.
    for (let i = 0; i <= textoCompleto.length - textoBuscado.length; i++) {
        let coincide = true;

        for (let j = 0; j < textoBuscado.length; j++) { //Bucle externo: prueba cada posición posible donde podría empezar una coincidencia. El límite resta el largo de lo buscado para no salirse del string.
            if (textoCompleto[i + j] !== textoBuscado[j]) {
                coincide = false;   //Asume que coincide, y el bucle interno (j) compara letra por letra desde la posición i. Si encuentra una letra distinta, marca coincide = false. i + j es una suma simple que da una posición dentro del string
            }
        }

        if (coincide === true) {
            return true;
        }
    }

    return false;
}

export function menuBuscarTarea() {
    console.log("=== BUSCAR UNA TAREA ===");

    const palabraBuscada = readlineSync.question("Ingresá la palabra a buscar (0 para volver): ");

    if (palabraBuscada === "0") {
        console.log("Volviendo...");
        return;
    }

    const todasLasTareas = obtenerTareas();

    console.log("--- Resultados de la búsqueda ---");
    const tareasEncontradas = [];

    for (let i = 0; i < todasLasTareas.length; i++) {
        const tarea = todasLasTareas[i];

        if (contieneTexto(tarea.titulo, palabraBuscada) === true) {
            tareasEncontradas[tareasEncontradas.length] = tarea;
            console.log(tareasEncontradas.length + ". " + tarea.titulo + " - Estado: " + tarea.estado);
        }
    }

    if (tareasEncontradas.length === 0) {
        console.log("No se encontraron tareas con esa palabra.");
        return;
    }

    console.log("0. Volver");
    const seleccion = readlineSync.questionInt("Elegí una tarea para ver el detalle (0 para volver): ");

    if (seleccion === 0) {
        console.log("Volviendo...");
        return;
    }

    if (seleccion < 1 || seleccion > tareasEncontradas.length) {
        console.log("Número de tarea inválido.");
        return;
    }

    const tareaElegida = tareasEncontradas[seleccion - 1];
    menuDetalleTarea(tareaElegida);
}