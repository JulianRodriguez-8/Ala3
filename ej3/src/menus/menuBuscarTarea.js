
import readlineSync from "readline-sync";
import { MenuDetalleTarea } from "./menuDetalleTarea.js";

export function MenuBuscarTarea(listaDeTareas) {
    this.listaDeTareas = listaDeTareas;
}

MenuBuscarTarea.prototype.ejecutar = function () {
    console.log("=== BUSCAR UNA TAREA ===");

    const palabraBuscada = readlineSync.question(
        "Ingresá la palabra a buscar (0 para volver): "
    );

    if (palabraBuscada === "0") {
        console.log("Volviendo...");
        return;
    }

    const todasLasTareas = this.listaDeTareas.obtenerTodas();
    const tareasEncontradas = [];

    for (let i = 0; i < todasLasTareas.length; i++) {
        const tarea = todasLasTareas[i];

        if (tarea.contieneEnTitulo(palabraBuscada)) {
            tareasEncontradas[tareasEncontradas.length] = tarea;

            console.log(
                tareasEncontradas.length + ". " +
                tarea.titulo + " - Estado: " + tarea.estado
            );
        }
    }

    if (tareasEncontradas.length === 0) {
        console.log("No se encontraron tareas con esa palabra.");
        return;
    }

    console.log("0. Volver");

    const seleccion = readlineSync.questionInt(
        "Elegí una tarea para ver el detalle: "
    );

    if (seleccion === 0) {
        console.log("Volviendo...");
        return;
    }

    if (seleccion < 1 || seleccion > tareasEncontradas.length) {
        console.log("Número de tarea inválido.");
        return;
    }

    const tareaElegida = tareasEncontradas[seleccion - 1];

    const menuDetalle = new MenuDetalleTarea(tareaElegida);
    menuDetalle.ejecutar();
};
