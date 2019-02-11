import { Asignatura } from "./asignatura";

export class Eleccion {
    id: number
    asignaturas: any[]; // Tipo asignatura en GET tipo int en POST
    desdobles: any[];
    fecha: string;
    confirmada: boolean;
    profesor: number;
};