
import readlineSync from "readline-sync";
import { MenuDetalleTarea } from "./menuDetalleTarea.js";

export function MenuVerTareas(listaDeTareas) {
    this.listaDeTareas = listaDeTareas;
}

MenuVerTareas.prototype.ejecutar = function () {
    console.log("¿QUÉ TAREAS DESEAS VER?");
    console.log("1. Ver todas las tareas");
    console.log("2. Ver tareas pendientes");
    console.log("3. Ver tareas en curso");
    console.log("4. Ver tareas terminadas");
    console.log("0. Volver");

    const op = readlineSync.questionInt("Ingrese la opción deseada: ");

    if (op === 0) {
        console.log("Volviendo...");
        return;
    }

    let filtroEstado;

    if (op === 1) {
        filtroEstado = null;
    } else if (op === 2) {
        filtroEstado = "pendiente";
    } else if (op === 3) {
        filtroEstado = "en curso";
    } else if (op === 4) {
        filtroEstado = "terminada";
    } else {
        console.log("Opción no válida.");
        return;
    }

    const todasLasTareas = this.listaDeTareas.obtenerTodas();
    const tareasFiltradas = [];

    for (let i = 0; i < todasLasTareas.length; i++) {
        const tarea = todasLasTareas[i];

        if (filtroEstado === null ||
            tarea.tieneEstado(filtroEstado)) {
            tareasFiltradas[tareasFiltradas.length] = tarea;
        }
    }

    // Ordenar alfabéticamente por título.
    for (let i = 0; i < tareasFiltradas.length - 1; i++) {
        for (let j = 0; j < tareasFiltradas.length - 1 - i; j++) {
            if (tareasFiltradas[j].titulo >
                tareasFiltradas[j + 1].titulo) {
                const auxiliar = tareasFiltradas[j];
                tareasFiltradas[j] = tareasFiltradas[j + 1];
                tareasFiltradas[j + 1] = auxiliar;
            }
        }
    }

    if (tareasFiltradas.length === 0) {
        console.log("No se encontraron tareas.");
        return;
    }

    console.log("TAREAS:");

    for (let i = 0; i < tareasFiltradas.length; i++) {
        console.log(
            (i + 1) + ". " +
            tareasFiltradas[i].titulo +
            " - Estado: " + tareasFiltradas[i].estado
        );
    }

    console.log("0. Volver");
    const seleccion = readlineSync.questionInt(
        "Elegí una tarea para ver el detalle: "
    );

    if (seleccion === 0) {
        console.log("Volviendo...");
        return;
    }

    if (seleccion < 1 || seleccion > tareasFiltradas.length) {
        console.log("Número de tarea inválido.");
        return;
    }

    const tareaElegida = tareasFiltradas[seleccion - 1];

    const menuDetalle = new MenuDetalleTarea(tareaElegida);
    menuDetalle.ejecutar();
};
