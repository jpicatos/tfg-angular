import { Horario } from "./horario";
import { Desdoble } from "./desdoble";
import { Calendario } from "./calendario";
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
    horario: Horario[];
    creditos: number;
    desdobles: Desdoble[];
    calendario: Calendario;
    docencia: Docencia;
    divisible: boolean;
    color: string;
    selected: boolean;

    constructor() {
        this.desdobles = [];
        this.horario = [];
        this.calendario = new Calendario();
        this.docencia = new Docencia();
    }
};

export class Docencia {
    id: number;
    fecha: string;
    confirmada: boolean;
    pda: number;
    deuda: number;
    profesor: number;
}

export class AsignaturaImportar {
    excel_file: string;
    departamento_siglas: string;
    departamento_nombre: string;
    anyo: string;
}