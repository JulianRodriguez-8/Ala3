
import { ListaDeTareas } from "./src/tareas/tareaStores.js";
import { MenuPrincipal } from "./src/menus/menuPrincipal.js";

const listaDeTareas = new ListaDeTareas();
const menuPrincipal = new MenuPrincipal(listaDeTareas);

let opcion;

do {
    opcion = menuPrincipal.ejecutar();
} while (opcion !== 0);
