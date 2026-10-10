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
    const ahora = new Date();
    this.fechacreacion = ahora;
    this.fechaultimacreacion = ahora;

}
tarea.ultimoId = 0;

tarea.prototype.mostrarDetalle = function () {
    console.log("DETALLE DE LA TAREA");
    console.log("Titulo: " + titulo.);
    if (this.descripcion !== '') {
        console.log("Descripcion: " + this.descripcion);
    }
    console.log("Estado: " + this.estado);
    console.log("Dificultad: " + this.dificultad);
    if (this.vencimiento !== null) {
        console.log("Vencimiento: " + this.vencimiento);
    }

    console.log("Fecha de creación: " + this.fechacreacion);
    console.log("Fecha de última modificación: " + this.fechaultimacreacion);
};