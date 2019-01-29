export class ErroresEleccion{
    L: {
        primer_cuatrimestre: Detalles[],
        segundo_cuatrimestre: Detalles[]
    };
    M: {
        primer_cuatrimestre: Detalles[],
        segundo_cuatrimestre: Detalles[]
    };
    X: {
        primer_cuatrimestre: Detalles[],
        segundo_cuatrimestre: Detalles[]
    };
    J: {
        primer_cuatrimestre: Detalles[],
        segundo_cuatrimestre: Detalles[]
    };
    V: {
        primer_cuatrimestre: Detalles[],
        segundo_cuatrimestre: Detalles[]
    };
}

class Detalles{
    asignatura: string;
    nombre: string;
    horario_solapado: string[];
    grupo: string;
    siglas: string;
    calendario: string;
    titulacion: string;
    curso: string;
    codigo: string;
}
