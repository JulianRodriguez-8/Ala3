import fs from "fs/promises"; //para poder leer (readFile) y escribir (writeFile) de forma asíncrona sin bloquear el programa.
import { crearTarea } from './tarea.js';
let tareas = []; //cambio a let para poder reasignar el array cuando se cargan tareas desde un archivo externo.
let ultimoId = 0; //lo agrego para poder reiniciar el contador de ids cuando se cargan tareas desde un archivo externo.


//Función asíncrona para leer y validar el archivo tasks.json al iniciar la app
export async function cargarTareas() {
    try {
        const contenido = await fs.readFile('tasks.json', 'utf-8');//Lee el archivo de texto en formato JSON de forma asíncrona.
        const datos = JSON.parse(contenido);//Convierte ese texto plano en un array de objetos de JavaScript para poder recorrerlos.

        let tareasValidas = [];
        let descartadas = 0;

        for (let i = 0; i < datos.length; i++) {
            const t = datos[i];

            // Validación 
            if (typeof t.titulo === 'string' && t.titulo.trim() !== '' &&
                (t.estado === "PENDING" || t.estado === "IN-PROGRESS" || t.estado === "FINISHED" || t.estado === "CANCELED") &&
                typeof t.creacion === 'string' &&
                (t.dificultad === 1 || t.dificultad === 2 || t.dificultad === 3)) {

                ultimoId++;
                tareasValidas.push({
                    id: ultimoId,
                    titulo: t.titulo,
                    //condición ? verdadero : falso
                    descripcion: t.descripcion !== undefined ? t.descripcion : null,
                    estado: t.estado,
                    creacion: t.creacion,
                    ultimaEdicion: t.ultimaEdicion !== undefined ? t.ultimaEdicion : null,
                    vencimiento: t.vencimiento !== undefined ? t.vencimiento : null,
                    dificultad: t.dificultad
                });
            } else {
                descartadas++; //si no cumple
            }
        }

        tareas = tareasValidas;
        console.log(`¡Carga exitosa! Se cargaron ${tareas.length} tareas.`);
        if (descartadas > 0) {
            console.log(`Aviso: Se descartaron ${descartadas} tareas por no cumplir con el formato.`);
        }
         //errores especificos
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log("El archivo tasks.json no existe. Arrancamos con la lista vacía.");
            tareas = [];
        } else if (error instanceof SyntaxError) {
            console.log("Error: El archivo JSON está roto (SyntaxError). No se pisará el archivo.");
            tareas = [];
        } else {
            console.log("Ocurrió un error al leer el archivo:", error.message);
            tareas = [];
        }
    }
}

//ahora es async y llama a guardarTareas
export async function agregarTarea({ titulo, descripcion, estado, vencimiento, dificultad }) {
    const tarea = crearTarea({ titulo, descripcion, estado, vencimiento, dificultad });
    tareas.push(tarea); //Agrega la tarea al final del array
    await guardarTareas(); //Guarda automáticamente en el disco al agregar
    return tarea;
}

//Función auxiliar para disparar el guardado tras una edición
export async function actualizarYGuardar(tareaActualizada) {
    await guardarTareas(); 
}

export function obtenerTareas() {
    return tareas;
}

export function buscarTareaPorId(id) { 
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id === id) {
            return tareas[i];
        }
    }
    return null;
}

//bucle externo (i) hace una pasada completa por vez; bucle interno (j) compara elementos vecinos. 
export function ordenarTareasPorTitulo(arrayDeTareas) {
    for (let i = 0; i < arrayDeTareas.length - 1; i++) {
        for (let j = 0; j < arrayDeTareas.length - 1 - i; j++) {
            if (arrayDeTareas[j].titulo > arrayDeTareas[j + 1].titulo) {
                const temporal = arrayDeTareas[j];
                arrayDeTareas[j] = arrayDeTareas[j + 1];//Si el título en j es alfabéticamente mayor que el de j+1, están en el orden equivocado: los intercambia usando una variable temporal para no perder el valor original en el proceso.
                arrayDeTareas[j + 1] = temporal;
            }
        }
    }

    return arrayDeTareas; //Devuelve el array ordenado aunque no haga falta
}