import readlineSync from "readline-sync";
import { agregarTarea } from "../tareas/tareaStores.js";
import { tituloValido, descripcionValida } from "../tareas/validaciones.js";

//async para usar await
export async function menuAgregarTarea() {
    console.log("=== AGREGAR UNA TAREA ===");

    const titulo = readlineSync.question("Título: ");

    if (tituloValido(titulo) === false) {
        console.log("El título no puede estar vacío ni superar los 100 caracteres.");
        return;
    }

    const descripcion = readlineSync.question("Descripción (dejar vacío si no aplica): ");

    if (descripcionValida(descripcion) === false) {
        console.log("La descripción no puede superar los 500 caracteres.");
        return;
    }

    console.log("Estado:");
    console.log("1. PENDING");      //cambio los nombres
    console.log("2. IN_PROGRESS");
    console.log("3. COMPLETED");
    console.log("4. CANCELLED");
    const opEstado = readlineSync.questionInt("Elegí una opción (o 0 para dejar el valor por defecto): ");

    let estado;
    if (opEstado === 1) {
        estado = "PENDING";
    } else if (opEstado === 2) {
        estado = "IN_PROGRESS";
    } else if (opEstado === 3) {
        estado = "COMPLETED";
    } else if (opEstado === 4) {
        estado = "CANCELLED";
    } else {
        estado = undefined;
    }

    console.log("Dificultad:");
    console.log("1. Fácil");
    console.log("2. Media");
    console.log("3. Difícil");
    const opDificultad = readlineSync.questionInt("Elegí una opción (o 0 para dejar el valor por defecto): ");

    let dificultad;
    if (opDificultad === 1) {
        dificultad = 1;
    } else if (opDificultad === 2) {
        dificultad = 2;              //cambio a numero
    } else if (opDificultad === 3) {
        dificultad = 3;
    } else {
        dificultad = undefined;
    }

    const vencimiento = readlineSync.question("Vencimiento(YYYY-MM-DDTHH:MM:SS) o dejar vacío si no aplica: ");

    let vencimientoFinal;
    if (vencimiento === "") {
        vencimientoFinal = undefined;
    } else {
        vencimientoFinal = vencimiento;
    }
    //agrego await para que espere a que se guarde la tarea antes de continuar
    const nuevaTarea = await agregarTarea({
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        dificultad: dificultad,
        vencimiento: vencimientoFinal,
    });

    console.log("¡Tarea guardada con éxito! (id: " + nuevaTarea.id + ")");
}