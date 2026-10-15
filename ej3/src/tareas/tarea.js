export function Tarea(titulo, descripcion, estado, vencimiento, dificultad) {
    Tarea.ultimoId = Tarea.ultimoId + 1;
    this.id = Tarea.ultimoId;
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
    this.fechaCreacion = ahora;
    this.fechaUltimaEdicion = ahora;
}

Tarea.ultimoId = 0;

Tarea.prototype.mostrarDetalle = function () {
    console.log("DETALLE DE LA TAREA");
    console.log("Titulo: " + this.titulo);
    if (this.descripcion !== '') {
        console.log("Descripcion: " + this.descripcion);
    }
    console.log("Estado: " + this.estado);
    console.log("Dificultad: " + this.dificultad);
    if (this.vencimiento !== null) {
        console.log("Vencimiento: " + this.vencimiento);
    }
    console.log("Fecha de creación: " + this.fechaCreacion);
    console.log("Fecha de última modificación: " + this.fechaUltimaEdicion);
};

Tarea.prototype.contieneEnTitulo = function (palabraBuscada) {
    for (let i = 0; i <= this.titulo.length - palabraBuscada.length; i++) {
        let coincide = true;

        for (let j = 0; j < palabraBuscada.length; j++) {
            if (this.titulo[i + j] !== palabraBuscada[j]) {
                coincide = false;
            }
        }

        if (coincide === true) {
            return true;
        }
    }

    return false;
};

Tarea.prototype.tieneEstado = function (estadoBuscado) {
    if (this.estado === estadoBuscado) {
        return true;
    }
    return false;
};

Tarea.prototype.registrarEdicion = function () {
    this.fechaUltimaEdicion = new Date();
};