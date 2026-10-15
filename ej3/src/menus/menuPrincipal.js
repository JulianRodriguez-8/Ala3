
import readlineSync from "readline-sync";
import { MenuVerTareas } from "./menuVerTareas.js";
import { MenuBuscarTarea } from "./menuBuscarTarea.js";
import { MenuAgregarTarea } from "./menuAgregarTareas.js";

export function MenuPrincipal(listaDeTareas) {
    this.listaDeTareas = listaDeTareas;

    this.menuVer = new MenuVerTareas(listaDeTareas);
    this.menuBuscar = new MenuBuscarTarea(listaDeTareas);
    this.menuAgregar = new MenuAgregarTarea(listaDeTareas);
}

MenuPrincipal.prototype.ejecutar = function () {
    console.log("BIENVENIDO AL MENÚ PRINCIPAL");
    console.log("1. Ver mis tareas");
    console.log("2. Buscar una tarea");
    console.log("3. Agregar una tarea");
    console.log("0. Salir");

    const op = readlineSync.questionInt(
        "Ingrese el número de la opción deseada: "
    );

    if (op === 1) {
        this.menuVer.ejecutar();
    } else if (op === 2) {
        this.menuBuscar.ejecutar();
    } else if (op === 3) {
        this.menuAgregar.ejecutar();
    } else if (op === 0) {
        console.log("Saliendo...");
    } else {
        console.log("Opción no válida.");
    }

    return op;
};
