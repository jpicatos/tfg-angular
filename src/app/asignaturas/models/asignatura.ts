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
    departamento: string;
    horario: Horario[]
    desdobles: Desdoble[]

    constructor() {
    }
};

export class AsignaturaImportar {
    excel_file: string;
    departamento_siglas: string;
    departamento_nombre: string;
}