import { ListaDeTareas } from "./src/tareas/tareaStores.js";
import { MenuAgregarTarea } from "./src/menus/AgregarTarea.js";

const lista = new ListaDeTareas();

// Prueba 1: agregar una tarea directo, sin menú
const nuevaTarea = lista.agregar(
    "Estudiar JavaScript",
    "Practicar constructores y prototipos",
    "pendiente",
    null,
    "facil"
);
nuevaTarea.mostrarDetalle();

// Prueba 2: agregar una tarea con el menú
const menuAgregar = new MenuAgregarTarea(lista);
menuAgregar.ejecutar();

console.log(lista.tareas);