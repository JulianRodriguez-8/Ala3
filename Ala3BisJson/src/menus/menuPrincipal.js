import readlineSync from 'readline-sync';
import { menuVerTareas } from './menuVerTareas.js';
import { menuBuscarTarea } from './menuBuscarTarea.js';
import { menuAgregarTarea } from './menuAgregarTarea.js';

//agregagmos async
export async function menuPrincipal() {
    console.log('BIENVENIDO AL MENÚ PRINCIPAL');
    console.log('Seleccione una opción:');
    console.log('1. Ver mis tareas');
    console.log('2. Buscar una tarea');
    console.log('3. Agregar una tarea');
    console.log("0. Salir");

    const op = readlineSync.questionInt('Ingrese el número de la opción deseada: ');

    //agregamos await donde corresponda para esperar las funciones asincronas
    switch (op) {
        case 1:
           await menuVerTareas();
            break;
        case 2:
            await menuBuscarTarea();
            break;
        case 3:
            await menuAgregarTarea();
            break;
        case 0:
            console.log('Saliendo...');
            break;
        default:
            console.log('Opción no válida');
    }
    return op;
}