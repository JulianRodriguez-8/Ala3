import readlineSync from "readline-sync";
import {guardarTareas} from "../tareas/tareaStores.js";// para persistir el JSON

//AGREGAMOS Async
export async function menuEditarTarea(tarea) {
    console.log("=== EDITAR TAREA ===");
    console.log("Dejá vacío y presioná Enter para no modificar ese valor.");

    const nuevoTitulo = readlineSync.question("Título (" + tarea.titulo + "): ");
    if (nuevoTitulo !== "") {
        tarea.titulo = nuevoTitulo;
    }

    const nuevaDescripcion = readlineSync.question("Descripción (" + tarea.descripcion + "): ");
    if (nuevaDescripcion !== "") {
        tarea.descripcion = nuevaDescripcion;
    }
      //cambio los nombres de las propiedades para que coincidan con el json
    console.log("Estado actual: " + tarea.estado);
    console.log("1. PENDING  2. IN-PROGRESS  3. FINISHED  4. CANCELED  (0 para no modificar)");
    const opEstado = readlineSync.questionInt("Elegí una opción: ");
    if (opEstado === 1) {
        tarea.estado = "PENDING";
    } else if (opEstado === 2) {
        tarea.estado = "IN-PROGRESS";
    } else if (opEstado === 3) {
        tarea.estado = "FINISHED";
    } else if (opEstado === 4) {
        tarea.estado = "CANCELED";
    }

    console.log("Dificultad actual: " + tarea.dificultad);
    console.log("1. Fácil  2. Media  3. Difícil (0 para no modificar)");
    const opDificultad = readlineSync.questionInt("Elegí una opción: ");
    //ACTULIAZO A NUMERO PARA QUE COINCIDA CON EL JSON
    if (opDificultad === 1) {
        tarea.dificultad = 1;
    } else if (opDificultad === 2) {
        tarea.dificultad = 2;
    } else if (opDificultad === 3) {
        tarea.dificultad = 3;
    } else if (opDificultad === 4) {
        tarea.dificultad = 4;
    }

    const nuevoVencimiento = readlineSync.question("Vencimiento (" + tarea.vencimiento + "): ");
    if (nuevoVencimiento !== "") {
        tarea.vencimiento = nuevoVencimiento;
    }
     //usamos toISOString y actulizamos a la fecha actual para que coincida con el JSON
    tarea.ultimaEdicion = new Date().toISOString();
   
    //llamamos a la funcion guardarTareas para que persista los cambios en el JSON
    await guardarTareas();

    console.log("¡Tarea actualizada con éxito!");
}