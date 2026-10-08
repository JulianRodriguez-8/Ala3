//constructor de la clase tarea
export function tarea(titulo, descripcion, estado, vencimiento, dificultad) {
    tarea.ultimoId = tarea.ultimoId + 1;
    this.id = tarea.ultimoId;
    this.titulo = titulo;
    if (descripcion === undefined) {
        this.descripcion = '';
    } else {
        this.descripcion = descripcion;
    }
    if (estado === undefined) {
        this.estado = 'pendiente';
    } else {
        this.estado = estado;
    }
    if (vencimiento === undefined) {
        this.vencimiento = null;
    } else {
        this.vencimiento = vencimiento;
    }
    if (dificultad === undefined) {
        this.dificultad = 'facil';
    } else {
        this.dificultad = dificultad;
    }

    
}