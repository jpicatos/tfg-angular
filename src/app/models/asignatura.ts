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
    desdobles: Desdoble[];
    calendario: Calendario;
    docencia: Docencia;
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
    profesor: number;
}

export class AsignaturaImportar {
    excel_file: string;
    departamento_siglas: string;
    departamento_nombre: string;
    anyo: string;
}