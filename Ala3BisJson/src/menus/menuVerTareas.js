import readlineSync from "readline-sync";
import { obtenerTareas, ordenarTareasPorTitulo } from "../tareas/tareaStores.js";
import { menuDetalleTarea } from "./menuDetalleTarea.js";

//async
export async function menuVerTareas() {
    console.log("¿QUÉ TAREAS DESEAS VER?");
    console.log("Seleccione una opción:");
    console.log("1. Ver todas las tareas");
    console.log("2. Ver tareas pendientes (PENDING)");
    console.log("3. Ver tareas en curso (IN-PROGRESS)");
    console.log("4. Ver tareas terminadas (FINISHED)");
    console.log("0. Volver");
    const op = readlineSync.questionInt("Ingrese el número de la opción deseada: ");
    const todasLasTareas = obtenerTareas();

    if (op === 0) {
        console.log("Volviendo...");
        return;
    }
     //ACTULIZO NOMBRES
    let filtroEstado;
    if (op === 1) {
        filtroEstado = null;
    } else if (op === 2) {
        filtroEstado = "PENDING";
    } else if (op === 3) {
        filtroEstado = "IN-PROGRESS";
    } else if (op === 4) {
        filtroEstado = "FINISHED";
    } else {
        console.log("Opción no válida");
        return;
    }

    const tareasFiltradas = [];

    for (let i = 0; i < todasLasTareas.length; i++) {
        const tarea = todasLasTareas[i];
        if (filtroEstado === null || tarea.estado === filtroEstado) {   //Recorre todas las tareas y arma un array nuevo solo con las que cumplen el filtro (o todas, si filtroEstado es null).
            tareasFiltradas[tareasFiltradas.length] = tarea;
        }
    }

    ordenarTareasPorTitulo(tareasFiltradas);//Ordena ese array filtrado alfabéticamente, antes de mostrarlo.

    if (tareasFiltradas.length === 0) {
        console.log("No se encontraron tareas que coincidan con el criterio de búsqueda.");
        return;
    }  //Si no quedó ninguna tarea después de filtrar, avisa y corta (evita mostrar un listado vacío).

    console.log("TAREAS:");//Recién acá imprime el listado, ya ordenado, numerado desde 1.
    for (let i = 0; i < tareasFiltradas.length; i++) {
        console.log((i + 1) + ". " + tareasFiltradas[i].titulo + " - Estado: " + tareasFiltradas[i].estado);
    }

    console.log("0. Volver");
    const seleccion = readlineSync.questionInt("Elegí una tarea para ver el detalle (0 para volver): ");

    if (seleccion === 0) {
        console.log("Volviendo...");
        return;
    }

    if (seleccion < 1 || seleccion > tareasFiltradas.length) {
        console.log("Número de tarea inválido.");
        return;
    }

    const tareaElegida = tareasFiltradas[seleccion - 1];
    //agregamos await para que espere a que se muestre el detalle de la tarea antes de continuar
    await menuDetalleTarea(tareaElegida);
}   