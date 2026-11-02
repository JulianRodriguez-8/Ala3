
//controlamos null tambien
export function tituloValido(titulo) {
    if (titulo === "" || titulo === undefined || titulo === null) {
        return false;
    }
    if (titulo.length > 100) {
        return false;
    }
    return true;
}

export function descripcionValida(descripcion) {
    if (descripcion === undefined || descripcion === null) {
        return true;
    }
    if (descripcion.length > 500) {
        return false;
    }
    return true;
}