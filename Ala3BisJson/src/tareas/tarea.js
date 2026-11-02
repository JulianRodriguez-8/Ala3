
let ultimoId = 0;
export function crearTarea({ titulo, descripcion, estado, vencimiento, dificultad }) {
    const ahora = new Date().toString;//new Date().toString usamos ahora 
    ultimoId = ultimoId + 1;

    let estadoFinal;
    if (estado === undefined || estado === null) {
        estadoFinal = 'PENDING'; //adapto al formato tasks.json
    } else {
        estadoFinal = estado;
    }
    let dificultadFinal;
    if (dificultad === undefined || dificultad === null) {
        dificultadFinal = 2; //difcultad media por defecto,numero en formato tasks.json
    } else {
        dificultadFinal = dificultad;
    }
    let descripcionFinal;
    if (descripcion === undefined || descripcion === '') {
        descripcionFinal = null; //los campos vacíos se guarden como null, nunca undefined
    } else {
        descripcionFinal = descripcion;
    }

    let vencimientoFinal;
    if (vencimiento === undefined || vencimiento === '') {
        vencimientoFinal = null; //lo mismo
    } else {
        vencimientoFinal = vencimiento;
    }

    return {
        id: ultimoId,
        titulo: titulo,
        descripcion: descripcionFinal,
        estado: estadoFinal,
        vencimiento: vencimientoFinal,
        dificultad: dificultadFinal,
        creacion: ahora, //nombre que exige el json base, que es distinto al nombre que usamos en la app. Por eso lo renombramos.
        ultimaEdicion: ahora, //lo mismo
    };
}



