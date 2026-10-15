
import readlineSync from "readline-sync";
import {tituloValido,descripcionValida} from "../tareas/validaciones.js";

export function MenuEditarTarea(tarea) {this.tarea = tarea;}

MenuEditarTarea.prototype.ejecutar = function () {
    const tarea = this.tarea;

    console.log("=== EDITAR TAREA ===");
    console.log("Dejá vacío y presioná Enter para no modificar ese valor.");

    const nuevoTitulo = readlineSync.question(
        "Título (" + tarea.titulo + "): "
    );

    if (nuevoTitulo !== "") {
        if (tituloValido(nuevoTitulo)) {
            tarea.titulo = nuevoTitulo;
        } else {
            console.log("Título inválido. No se modificó.");
        }
    }

    const nuevaDescripcion = readlineSync.question(
        "Descripción (" + tarea.descripcion + "): "
    );

    if (nuevaDescripcion !== "") {
        if (descripcionValida(nuevaDescripcion)) {
            tarea.descripcion = nuevaDescripcion;
        } else {
            console.log("Descripción inválida. No se modificó.");
        }
    }

    console.log("Estado actual: " + tarea.estado);
    console.log("1. Pendiente  2. En curso  3. Terminada  4. Cancelada  (0 para no modificar)");

    const opEstado = readlineSync.questionInt("Elegí una opción: ");

    if (opEstado === 1) {
        tarea.estado = "pendiente";
    } else if (opEstado === 2) {
        tarea.estado = "en curso";
    } else if (opEstado === 3) {
        tarea.estado = "terminada";
    } else if (opEstado === 4) {
        tarea.estado = "cancelada";
    }

    console.log("Dificultad actual: " + tarea.dificultad);
    console.log("1. Fácil  2. Media  3. Difícil  (0 para no modificar)");

    const opDificultad = readlineSync.questionInt("Elegí una opción: ");

    if (opDificultad === 1) {
        tarea.dificultad = "facil";
    } else if (opDificultad === 2) {
        tarea.dificultad = "media";
    } else if (opDificultad === 3) {
        tarea.dificultad = "dificil";
    }

    const nuevoVencimiento = readlineSync.question(
        "Vencimiento (" + tarea.vencimiento + "): "
    );

    if (nuevoVencimiento !== "") {
        tarea.vencimiento = nuevoVencimiento;
    }

    tarea.registrarEdicion();

    console.log("¡Tarea actualizada con éxito!");
};
