import { Horario } from "./horario";
import { Desdoble } from "./desdoble";
export class Asignatura{
    id: number;
    siglas: string;
    nombre: string;
    grupo: string
    cuatrimestre: number;
    codigo: string;
    curso: string;
    titulacion: string;
    departamento: {
        siglas: string;
        nombre: string;
        min_creditos: number;
        fecha_inicio_cuatri: string;
        max_creditos_teoria: number;
        max_creditos_lab: number;
        min_deuda_acumulable: number;
    };
    horario: Horario[]
    desdobles: Desdoble[]
};

