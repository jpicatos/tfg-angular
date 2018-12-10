import { Deuda } from "./deuda";
import { Usuario } from "./usuario";

export class Profesor{
    id: number;
    usuario: Usuario;
    deuda: Deuda;
    escalafon: Number;
    telefono: String;
    despacho: String;
    pda: Number;
    categoria: String;
    departamento: String;
};