import { Deuda } from "./deuda";
import { Usuario } from "./usuario";

export class Profesor{
    id: number;
    usuario: Usuario;
    deuda: Deuda;
    escalafon: Number;
    telefono: string;
    despacho: string;
    pda: Number;
    categoria: string;
    departamento: String;
};