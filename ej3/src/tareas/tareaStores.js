import { Tarea } from "./tarea.js";

export function ListaDeTareas() {
    this.tareas = [];
}

ListaDeTareas.prototype.agregar = function (titulo, descripcion, estado, vencimiento, dificultad) {
    const nuevaTarea = new Tarea(titulo, descripcion, estado, vencimiento, dificultad);
    this.tareas[this.tareas.length] = nuevaTarea;
    return nuevaTarea;
};

ListaDeTareas.prototype.buscarPorId = function (id) {
    for (let i = 0; i < this.tareas.length; i++) {
        if (this.tareas[i].id === id) {
            return this.tareas[i];
        }
    }
    return null;
};

ListaDeTareas.prototype.obtenerTodas = function () {
    return this.tareas;
};

ListaDeTareas.prototype.filtrarPorEstado = function (estado) {
    const filtradas = [];

    for (let i = 0; i < this.tareas.length; i++) {
        if (this.tareas[i].tieneEstado(estado) === true) {
            filtradas[filtradas.length] = this.tareas[i];
        }
    }

    return filtradas;
};