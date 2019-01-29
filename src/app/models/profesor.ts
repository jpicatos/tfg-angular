import { Deuda } from "./deuda";
import { Usuario } from "./usuario";

export class Profesor{
    id: number;
    usuario: Usuario;
    deuda: Deuda;
    escalafon: number;
    telefono: string;
    despacho: string;
    pda: Number;
    categoria: string;
    departamento: String;
    docencia: number;

    constructor() {
        this.usuario = new Usuario();
        this.deuda = new Deuda();
    }
};

export class ProfesorImportar {
    excel_file: string;
    departamento_siglas: string;
}