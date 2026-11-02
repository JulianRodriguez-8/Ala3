import readlineSync from "readline-sync";
import { menuEditarTarea } from "./menuEditarTarea.js";

//async para poder esperar la edicion y guardado
export async function menuDetalleTarea(tarea) {
    console.log("=== DETALLE DE TAREA ===");
    console.log("Título: " + tarea.titulo);
     
    //controlamos null tambien
    if (tarea.descripcion === null || tarea.descripcion === "") {
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
        //cambio los nombres de las propiedades para que coincidan con el json
    console.log("Fecha de creación: " + tarea.creacion);
    console.log("Última edición: " + tarea.ultimaEdicion);
    console.log("");
    console.log("Presioná E para editar, o 0 para volver.");

    const opcion = readlineSync.question("Opción: ");

    if (opcion === "e" || opcion === "E") {
        //agregao await para que espere a que se edite la tarea antes de continuar
        await menuEditarTarea(tarea);
    } else {
        console.log("Volviendo...");
    }
}