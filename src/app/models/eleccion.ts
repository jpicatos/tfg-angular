import { Asignatura } from "./asignatura";

export class Eleccion {
    id: number
    asignaturas: any[]; // Tipo asignatura en GET tipo int en POST
    asignaturas_divisibles: any[]; // Tipo asignatura en GET tipo int en POST
    desdobles: any[];
    fecha: string;
    confirmada: boolean;
    profesor: number;
    pda: number;
    deuda: number;
    mensaje: string;
};