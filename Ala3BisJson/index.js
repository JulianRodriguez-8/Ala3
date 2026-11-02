import { menuPrincipal } from './src/menus/menuPrincipal.js';
import { cargarTareas } from './src/tareas/tareaStores.js';//agrego

let opcionElegida;

//creamos una funcion asincronica para manejar el arranque
async function iniciarApp() {
    //cargamos las tareas desde el JSON antes de mostrar el menu principal
    await cargarTareas();


    // esperamos de forma asincronica a que el usuario elija una opcion del menu principal
    do {
        opcionElegida = await menuPrincipal();
    } while (opcionElegida !== 0);

    console.log("¡Programa finalizado con exito!");

}
//llamamos a la funcion asincronica para iniciar la aplicacion
iniciarApp();