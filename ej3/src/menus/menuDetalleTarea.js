
import readlineSync from "readline-sync";
import { MenuEditarTarea } from "./menuEditarTarea.js";

export function MenuDetalleTarea(tarea) {
    this.tarea = tarea;
}

MenuDetalleTarea.prototype.ejecutar = function () {
    const tarea = this.tarea;

    console.log("=== DETALLE DE TAREA ===");
    console.log("Título: " + tarea.titulo);

    if (tarea.descripcion === "") {
        console.log("Descripción: (sin descripción)");
    } else {
        console.log("Descripción: " + tarea.descripcion);
    }

    console.log("Estado: " + tarea.estado);
    console.log("Dificultad: " + tarea.dificultad);

    if (tarea.vencimiento === null) {
        console.log("Vencimiento: (sin vencimiento)");
    } else {
        console.log("Vencimiento: " + tarea.vencimiento);
    }

    console.log("Fecha de creación: " + tarea.fechaCreacion);
    console.log("Última edición: " + tarea.fechaUltimaEdicion);

    console.log("Presioná E para editar, o 0 para volver.");

    const opcion = readlineSync.question("Opción: ");

    if (opcion === "e" || opcion === "E") {
        const menuEditar = new MenuEditarTarea(tarea);
        menuEditar.ejecutar();
    } else {
        console.log("Volviendo...");
    }
};
