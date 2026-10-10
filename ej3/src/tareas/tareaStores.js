import { Tarea } from "./tarea.js";

export function ListaDeTareas() {
    this.tareas = [];
}

ListaDeTareas.prototype.agregar = function (titulo, descripcion, estado, vencimiento, dificultad) {
    const tarea = new Tarea(titulo, descripcion, estado, vencimiento, dificultad);
    this.tareas[this.tareas.length] = tarea;
    return tarea;
};

ListaDeTareas.prototype.buscarPorId = function (id) {
    for (let i = 0; i < this.tareas.length; i++) {
        if (this.tareas[i].id === id) {
            return this.tareas[i];
        }
    }
    return null;
};