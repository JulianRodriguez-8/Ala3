export function fechaValida(texto) {
    if (typeof texto !== "string" || texto === "") {
        return false;
    }
    const fecha = new Date(texto);
    if (Number.isNaN(fecha.getTime())) {
        return false;
    }
    return true;
}