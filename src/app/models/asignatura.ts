import { Horario } from "./horario";
import { Desdoble } from "./desdoble";
import { Calendario } from "./calendario";
import { Eleccion } from "./eleccion";
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
    docencia: Eleccion;
    docencia_divisible: AsignaturaDivisible[];
    divisible: boolean;
    color: string;
    selected: boolean;
    minCreditos: number;
    maxCreditos: number;
    disponible: boolean;

    constructor() {
        this.desdobles = [];
        this.horario = [];
        this.calendario = new Calendario();
        this.docencia = new Eleccion();
    }
};

export class AsignaturaDivisible{
    id: number;
    creditos: number;
    asignatura: Asignatura;
    profesor: any;

    constructor(){
        this.asignatura = new Asignatura();
    }
}


export class AsignaturaImportar {
    excel_file: string;
    departamento_siglas: string;
    departamento_nombre: string;
    sobrescribir: boolean;
    anyo: string;
}