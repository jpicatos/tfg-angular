import { Deuda } from "./deuda";
import { Usuario } from "./usuario";

export class Profesor{
    usuario: Usuario;
    deuda: Deuda;
    escalafon: number;
    telefono: string;
    despacho: string;
    pda: number;
    categoria: string;
    departamento: String;
    docencia: number;
    creditos_escoger: number;
    creditos_escogidos: number;
    docencia_confirmada: boolean;
    constructor() {
        this.usuario = new Usuario();
        this.deuda = new Deuda();
    }
};

export class ProfesorImportar {
    excel_file: string;
    departamento_siglas: string;
    sobrescribir: boolean;
}