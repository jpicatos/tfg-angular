import { Asignatura } from "./models/asignatura";

export const ASIGNATURA: Asignatura[] = [
    {
        "id": 0,
        "siglas": "ADBD",
        "nombre": "Administración de bases de datos",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "607300",
        "curso": "2º",
        "titulacion": "MII",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 0,
                "dia": "M",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 7"
            },
            {
                "id": 1,
                "dia": "J",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 7"
            }
        ],
        "desdobles": []
    },
    {
        "id": 1,
        "siglas": "ABD",
        "nombre": "Ampliación de bases de datos",
        "grupo": "B",
        "cuatrimestre": 2,
        "codigo": "803284",
        "curso": "3º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 2,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 13"
            },
            {
                "id": 3,
                "dia": "X",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 13"
            },
            {
                "id": 4,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 13"
            }
        ],
        "desdobles": [
            {
                "id": 0,
                "asignatura": 1,
                "horario": [
                    274
                ]
            }
        ]
    },
    {
        "id": 2,
        "siglas": "ABD",
        "nombre": "Ampliación de bases de datos",
        "grupo": "C",
        "cuatrimestre": 2,
        "codigo": "803284",
        "curso": "3º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 5,
                "dia": "M",
                "hora_inicio": "16:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 8"
            },
            {
                "id": 6,
                "dia": "X",
                "hora_inicio": "16:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 8"
            }
        ],
        "desdobles": [
            {
                "id": 1,
                "asignatura": 2,
                "horario": [
                    275
                ]
            }
        ]
    },
    {
        "id": 3,
        "siglas": "AW",
        "nombre": "Aplicaciones web",
        "grupo": "E",
        "cuatrimestre": 1,
        "codigo": "803337",
        "curso": "4º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 7,
                "dia": "M",
                "hora_inicio": "16:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 14"
            },
            {
                "id": 8,
                "dia": "J",
                "hora_inicio": "16:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 14"
            },
            {
                "id": 9,
                "dia": "X",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 14"
            }
        ],
        "desdobles": [
            {
                "id": 2,
                "asignatura": 3,
                "horario": [
                    276
                ]
            }
        ]
    },
    {
        "id": 4,
        "siglas": "ACFI",
        "nombre": "Auditoría, calidad y fiabilidad informáticas",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "607292",
        "curso": "1º",
        "titulacion": "MII",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 10,
                "dia": "X",
                "hora_inicio": "19:00:00",
                "hora_fin": "20:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 11,
                "dia": "V",
                "hora_inicio": "19:00:00",
                "hora_fin": "20:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": []
    },
    {
        "id": 5,
        "siglas": "NSQ",
        "nombre": "Bases de Datos noSQL",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "803368",
        "curso": "Opt.",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 12,
                "dia": "L",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 13,
                "dia": "M",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 9"
            }
        ],
        "desdobles": []
    },
    {
        "id": 6,
        "siglas": "BD",
        "nombre": "Bases de datos",
        "grupo": "I",
        "cuatrimestre": 1,
        "codigo": "803273",
        "curso": "2º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 14,
                "dia": "M",
                "hora_inicio": "15:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 13"
            },
            {
                "id": 15,
                "dia": "V",
                "hora_inicio": "13:00:00",
                "hora_fin": "14:50:00",
                "aula": "Aula 13"
            }
        ],
        "desdobles": []
    },
    {
        "id": 7,
        "siglas": "BD",
        "nombre": "Bases de datos",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "803273",
        "curso": "2º",
        "titulacion": "GI/GC/GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 16,
                "dia": "L",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 17,
                "dia": "M",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 18,
                "dia": "V",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 3"
            }
        ],
        "desdobles": [
            {
                "id": 3,
                "asignatura": 7,
                "horario": [
                    277
                ]
            }
        ]
    },
    {
        "id": 8,
        "siglas": "BD",
        "nombre": "Bases de datos",
        "grupo": "B",
        "cuatrimestre": 1,
        "codigo": "803273",
        "curso": "2º",
        "titulacion": "GI/GC/GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 19,
                "dia": "L",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 20,
                "dia": "X",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 3"
            }
        ],
        "desdobles": [
            {
                "id": 4,
                "asignatura": 8,
                "horario": [
                    278
                ]
            }
        ]
    },
    {
        "id": 9,
        "siglas": "BD",
        "nombre": "Bases de datos",
        "grupo": "D",
        "cuatrimestre": 1,
        "codigo": "803273",
        "curso": "2º",
        "titulacion": "GI/GC/GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 21,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 22,
                "dia": "X",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 10"
            }
        ],
        "desdobles": [
            {
                "id": 5,
                "asignatura": 9,
                "horario": [
                    279
                ]
            }
        ]
    },
    {
        "id": 10,
        "siglas": "BD",
        "nombre": "Bases de datos",
        "grupo": "F",
        "cuatrimestre": 1,
        "codigo": "803333",
        "curso": "2º",
        "titulacion": "GS/GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 23,
                "dia": "L",
                "hora_inicio": "17:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula Mult.-1208"
            },
            {
                "id": 24,
                "dia": "J",
                "hora_inicio": "16:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula Mult.-1208"
            },
            {
                "id": 25,
                "dia": "V",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula Mult.-1208"
            }
        ],
        "desdobles": [
            {
                "id": 6,
                "asignatura": 10,
                "horario": [
                    280
                ]
            }
        ]
    },
    {
        "id": 11,
        "siglas": "DA",
        "nombre": "Diseño de algoritmos",
        "grupo": "D",
        "cuatrimestre": 1,
        "codigo": "803225",
        "curso": "3º",
        "titulacion": "GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 26,
                "dia": "M",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 12"
            },
            {
                "id": 27,
                "dia": "V",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 12"
            }
        ],
        "desdobles": [
            {
                "id": 7,
                "asignatura": 11,
                "horario": [
                    281
                ]
            }
        ]
    },
    {
        "id": 12,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "C",
        "cuatrimestre": 1,
        "codigo": "901558/803270",
        "curso": "2º",
        "titulacion": "ADE-GI/GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 28,
                "dia": "L",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 29,
                "dia": "M",
                "hora_inicio": "14:00:00",
                "hora_fin": "14:50:00",
                "aula": "Aula 10"
            }
        ],
        "desdobles": [
            {
                "id": 10,
                "asignatura": 12,
                "horario": [
                    284
                ]
            }
        ]
    },
    {
        "id": 13,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "C",
        "cuatrimestre": 2,
        "codigo": "901558/803270",
        "curso": "2º",
        "titulacion": "ADE-GI/GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 30,
                "dia": "L",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 31,
                "dia": "M",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 10"
            }
        ],
        "desdobles": [
            {
                "id": 11,
                "asignatura": 13,
                "horario": [
                    285
                ]
            }
        ]
    },
    {
        "id": 14,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "DG",
        "cuatrimestre": 1,
        "codigo": "900213",
        "curso": "2º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 32,
                "dia": "L",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 6"
            },
            {
                "id": 33,
                "dia": "M",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 6"
            },
            {
                "id": 34,
                "dia": "J",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 6"
            }
        ],
        "desdobles": []
    },
    {
        "id": 15,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "DG",
        "cuatrimestre": 2,
        "codigo": "900213",
        "curso": "2º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 35,
                "dia": "M",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 6"
            },
            {
                "id": 36,
                "dia": "J",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 6"
            },
            {
                "id": 37,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 6"
            }
        ],
        "desdobles": []
    },
    {
        "id": 16,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "803270",
        "curso": "2º",
        "titulacion": "GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 38,
                "dia": "M",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 39,
                "dia": "J",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 40,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 3"
            }
        ],
        "desdobles": [
            {
                "id": 8,
                "asignatura": 16,
                "horario": [
                    282
                ]
            }
        ]
    },
    {
        "id": 17,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "803270",
        "curso": "2º",
        "titulacion": "GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 41,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 42,
                "dia": "J",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 43,
                "dia": "V",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 10"
            }
        ],
        "desdobles": [
            {
                "id": 9,
                "asignatura": 17,
                "horario": [
                    283
                ]
            }
        ]
    },
    {
        "id": 18,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "E",
        "cuatrimestre": 1,
        "codigo": "803330",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 44,
                "dia": "X",
                "hora_inicio": "13:00:00",
                "hora_fin": "13:50:00",
                "aula": "Aula 4"
            },
            {
                "id": 45,
                "dia": "J",
                "hora_inicio": "12:00:00",
                "hora_fin": "13:50:00",
                "aula": "Aula 4"
            }
        ],
        "desdobles": [
            {
                "id": 12,
                "asignatura": 18,
                "horario": [
                    286
                ]
            }
        ]
    },
    {
        "id": 19,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "E",
        "cuatrimestre": 2,
        "codigo": "803330",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 46,
                "dia": "M",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 4"
            },
            {
                "id": 47,
                "dia": "J",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 4"
            },
            {
                "id": 48,
                "dia": "V",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 4"
            }
        ],
        "desdobles": [
            {
                "id": 13,
                "asignatura": 19,
                "horario": [
                    287
                ]
            }
        ]
    },
    {
        "id": 20,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "F",
        "cuatrimestre": 1,
        "codigo": "803330",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 49,
                "dia": "M",
                "hora_inicio": "15:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula Mult.-1208"
            },
            {
                "id": 50,
                "dia": "J",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula Mult.-1208"
            }
        ],
        "desdobles": [
            {
                "id": 14,
                "asignatura": 20,
                "horario": [
                    288
                ]
            }
        ]
    },
    {
        "id": 21,
        "siglas": "EDA",
        "nombre": "Estructura de datos y algoritmos",
        "grupo": "F",
        "cuatrimestre": 2,
        "codigo": "803330",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 51,
                "dia": "L",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 52,
                "dia": "J",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 53,
                "dia": "M",
                "hora_inicio": "17:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 3"
            }
        ],
        "desdobles": [
            {
                "id": 15,
                "asignatura": 21,
                "horario": [
                    289
                ]
            }
        ]
    },
    {
        "id": 22,
        "siglas": "EDA",
        "nombre": "Estructuras de datos y algoritmos",
        "grupo": "V",
        "cuatrimestre": 1,
        "codigo": "805313",
        "curso": "2º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 54,
                "dia": "L",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 55,
                "dia": "M",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 56,
                "dia": "V",
                "hora_inicio": "15:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 5"
            }
        ],
        "desdobles": [
            {
                "id": 16,
                "asignatura": 22,
                "horario": [
                    290
                ]
            }
        ]
    },
    {
        "id": 23,
        "siglas": "FP",
        "nombre": "Fundamentos de la programación",
        "grupo": "DG",
        "cuatrimestre": 1,
        "codigo": "900203",
        "curso": "1º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 57,
                "dia": "L",
                "hora_inicio": "13:30:00",
                "hora_fin": "14:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 58,
                "dia": "M",
                "hora_inicio": "13:30:00",
                "hora_fin": "14:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 59,
                "dia": "J",
                "hora_inicio": "12:30:00",
                "hora_fin": "14:20:00",
                "aula": "Aula 11"
            }
        ],
        "desdobles": []
    },
    {
        "id": 24,
        "siglas": "FP",
        "nombre": "Fundamentos de la programación",
        "grupo": "DG",
        "cuatrimestre": 2,
        "codigo": "900203",
        "curso": "1º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 60,
                "dia": "M",
                "hora_inicio": "13:30:00",
                "hora_fin": "14:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 61,
                "dia": "J",
                "hora_inicio": "12:30:00",
                "hora_fin": "14:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 62,
                "dia": "V",
                "hora_inicio": "13:00:00",
                "hora_fin": "13:50:00",
                "aula": "Aula 11"
            }
        ],
        "desdobles": []
    },
    {
        "id": 25,
        "siglas": "FP",
        "nombre": "Fundamentos de la programación",
        "grupo": "V",
        "cuatrimestre": 1,
        "codigo": "805305",
        "curso": "1º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 63,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 64,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 65,
                "dia": "X",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 5"
            }
        ],
        "desdobles": [
            {
                "id": 25,
                "asignatura": 25,
                "horario": [
                    299
                ]
            }
        ]
    },
    {
        "id": 26,
        "siglas": "FP",
        "nombre": "Fundamentos de la programación",
        "grupo": "V",
        "cuatrimestre": 2,
        "codigo": "805305",
        "curso": "1º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 66,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 67,
                "dia": "X",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 68,
                "dia": "J",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 5"
            }
        ],
        "desdobles": [
            {
                "id": 26,
                "asignatura": 26,
                "horario": [
                    300
                ]
            }
        ]
    },
    {
        "id": 27,
        "siglas": "FP",
        "nombre": "Fundamentos de la Programación",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "803264",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 69,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 70,
                "dia": "J",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 71,
                "dia": "V",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": [
            {
                "id": 17,
                "asignatura": 27,
                "horario": [
                    291
                ]
            }
        ]
    },
    {
        "id": 28,
        "siglas": "FP",
        "nombre": "Fundamentos de la Programación",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "803264",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 72,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 73,
                "dia": "J",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 74,
                "dia": "V",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": [
            {
                "id": 18,
                "asignatura": 28,
                "horario": [
                    292
                ]
            }
        ]
    },
    {
        "id": 29,
        "siglas": "FP",
        "nombre": "Fundamentos de la Programación",
        "grupo": "B",
        "cuatrimestre": 1,
        "codigo": "803264",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 75,
                "dia": "L",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 76,
                "dia": "J",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 77,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": [
            {
                "id": 19,
                "asignatura": 29,
                "horario": [
                    293
                ]
            }
        ]
    },
    {
        "id": 30,
        "siglas": "FP",
        "nombre": "Fundamentos de la Programación",
        "grupo": "B",
        "cuatrimestre": 2,
        "codigo": "803264",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 78,
                "dia": "L",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 79,
                "dia": "J",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 80,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": [
            {
                "id": 20,
                "asignatura": 30,
                "horario": [
                    294
                ]
            }
        ]
    },
    {
        "id": 31,
        "siglas": "FP",
        "nombre": "Fundamentos de la Programación",
        "grupo": "E",
        "cuatrimestre": 1,
        "codigo": "803264",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 81,
                "dia": "M",
                "hora_inicio": "13:00:00",
                "hora_fin": "14:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 82,
                "dia": "J",
                "hora_inicio": "13:00:00",
                "hora_fin": "13:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 83,
                "dia": "V",
                "hora_inicio": "13:00:00",
                "hora_fin": "13:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": [
            {
                "id": 21,
                "asignatura": 31,
                "horario": [
                    295
                ]
            }
        ]
    },
    {
        "id": 32,
        "siglas": "FP",
        "nombre": "Fundamentos de la Programación",
        "grupo": "E",
        "cuatrimestre": 2,
        "codigo": "803264",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 84,
                "dia": "M",
                "hora_inicio": "13:00:00",
                "hora_fin": "14:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 85,
                "dia": "J",
                "hora_inicio": "13:00:00",
                "hora_fin": "13:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 86,
                "dia": "V",
                "hora_inicio": "13:00:00",
                "hora_fin": "13:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": [
            {
                "id": 22,
                "asignatura": 32,
                "horario": [
                    296
                ]
            }
        ]
    },
    {
        "id": 33,
        "siglas": "FP",
        "nombre": "Fundamentos de la Programación",
        "grupo": "F",
        "cuatrimestre": 1,
        "codigo": "803264",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 87,
                "dia": "M",
                "hora_inicio": "19:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 88,
                "dia": "V",
                "hora_inicio": "19:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 89,
                "dia": "X",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": [
            {
                "id": 23,
                "asignatura": 33,
                "horario": [
                    297
                ]
            }
        ]
    },
    {
        "id": 34,
        "siglas": "FP",
        "nombre": "Fundamentos de la Programación",
        "grupo": "F",
        "cuatrimestre": 2,
        "codigo": "803264",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 90,
                "dia": "M",
                "hora_inicio": "19:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 91,
                "dia": "V",
                "hora_inicio": "19:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 92,
                "dia": "X",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": [
            {
                "id": 24,
                "asignatura": 34,
                "horario": [
                    298
                ]
            }
        ]
    },
    {
        "id": 35,
        "siglas": "FLI",
        "nombre": "Fundamentos de los lenguajes informáticos",
        "grupo": "DG",
        "cuatrimestre": 2,
        "codigo": "900224",
        "curso": "3º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 93,
                "dia": "L",
                "hora_inicio": "12:30:00",
                "hora_fin": "13:20:00",
                "aula": "Aula Mult.-1218"
            },
            {
                "id": 94,
                "dia": "X",
                "hora_inicio": "12:30:00",
                "hora_fin": "13:20:00",
                "aula": "Aula Mult.-1218"
            },
            {
                "id": 95,
                "dia": "M",
                "hora_inicio": "12:30:00",
                "hora_fin": "14:20:00",
                "aula": "Aula Mult.-1218"
            }
        ],
        "desdobles": []
    },
    {
        "id": 36,
        "siglas": "GIW",
        "nombre": "Gestión de la información en la web",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "803348/805620",
        "curso": "Opt.",
        "titulacion": "GI/GC/GS/GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 96,
                "dia": "M",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 7"
            },
            {
                "id": 97,
                "dia": "J",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 7"
            }
        ],
        "desdobles": []
    },
    {
        "id": 37,
        "siglas": "GC",
        "nombre": "Gráficos por computador",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "607288",
        "curso": "1º",
        "titulacion": "MII",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 98,
                "dia": "M",
                "hora_inicio": "17:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 99,
                "dia": "V",
                "hora_inicio": "19:00:00",
                "hora_fin": "20:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": []
    },
    {
        "id": 38,
        "siglas": "HJA",
        "nombre": "Herramientas informáticas para los juegos de azar",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "803369",
        "curso": "Opt.",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 100,
                "dia": "M",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 101,
                "dia": "J",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": []
    },
    {
        "id": 39,
        "siglas": "ICTSSI",
        "nombre": "Implantación corporativa de tecnologías, servicios y sistemas informáticos",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "607287",
        "curso": "1º",
        "titulacion": "MII",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 102,
                "dia": "X",
                "hora_inicio": "17:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 103,
                "dia": "J",
                "hora_inicio": "19:00:00",
                "hora_fin": "20:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": []
    },
    {
        "id": 40,
        "siglas": "IG1",
        "nombre": "Informática gráfica I",
        "grupo": "V",
        "cuatrimestre": 2,
        "codigo": "805316",
        "curso": "2º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 104,
                "dia": "X",
                "hora_inicio": "17:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 105,
                "dia": "J",
                "hora_inicio": "17:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 106,
                "dia": "V",
                "hora_inicio": "15:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 5"
            }
        ],
        "desdobles": [
            {
                "id": 27,
                "asignatura": 40,
                "horario": [
                    301
                ]
            }
        ]
    },
    {
        "id": 41,
        "siglas": "IG2",
        "nombre": "Informática gráfica II",
        "grupo": "V",
        "cuatrimestre": 1,
        "codigo": "805317",
        "curso": "3º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 107,
                "dia": "M",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 7"
            },
            {
                "id": 108,
                "dia": "X",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula Mult.-1208"
            }
        ],
        "desdobles": [
            {
                "id": 28,
                "asignatura": 41,
                "horario": [
                    302
                ]
            }
        ]
    },
    {
        "id": 42,
        "siglas": "MUS",
        "nombre": "Informática Musical",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "805758",
        "curso": "Opt.",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 109,
                "dia": "X",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 6"
            },
            {
                "id": 110,
                "dia": "J",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 6"
            }
        ],
        "desdobles": []
    },
    {
        "id": 43,
        "siglas": "IS",
        "nombre": "Ingeniería del Software",
        "grupo": "D",
        "cuatrimestre": 1,
        "codigo": "803272",
        "curso": "2º",
        "titulacion": "GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 111,
                "dia": "J",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 112,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 10"
            }
        ],
        "desdobles": [
            {
                "id": 29,
                "asignatura": 43,
                "horario": [
                    303
                ]
            }
        ]
    },
    {
        "id": 44,
        "siglas": "IS",
        "nombre": "Ingeniería del Software",
        "grupo": "D",
        "cuatrimestre": 2,
        "codigo": "803272",
        "curso": "2º",
        "titulacion": "GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 113,
                "dia": "L",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 114,
                "dia": "X",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 3"
            }
        ],
        "desdobles": [
            {
                "id": 30,
                "asignatura": 44,
                "horario": [
                    304
                ]
            }
        ]
    },
    {
        "id": 45,
        "siglas": "IS",
        "nombre": "Ingeniería del software",
        "grupo": "F",
        "cuatrimestre": 1,
        "codigo": "803332",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 115,
                "dia": "L",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula Mult.-1208"
            },
            {
                "id": 116,
                "dia": "M",
                "hora_inicio": "19:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula Mult.-1208"
            }
        ],
        "desdobles": []
    },
    {
        "id": 46,
        "siglas": "IS",
        "nombre": "Ingeniería del software",
        "grupo": "F",
        "cuatrimestre": 2,
        "codigo": "803332",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 117,
                "dia": "L",
                "hora_inicio": "17:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 118,
                "dia": "X",
                "hora_inicio": "17:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 3"
            }
        ],
        "desdobles": []
    },
    {
        "id": 47,
        "siglas": "LPP",
        "nombre": "Lenguajes de programación y procesadores de lenguaje",
        "grupo": "D",
        "cuatrimestre": 1,
        "codigo": "803226",
        "curso": "3º",
        "titulacion": "GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 119,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 12"
            },
            {
                "id": 120,
                "dia": "J",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 12"
            }
        ],
        "desdobles": []
    },
    {
        "id": 48,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "C",
        "cuatrimestre": 1,
        "codigo": "901544",
        "curso": "1º",
        "titulacion": "ADE-GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 121,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula Mult.-1208"
            },
            {
                "id": 122,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula Mult.-1208"
            }
        ],
        "desdobles": []
    },
    {
        "id": 49,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "C",
        "cuatrimestre": 2,
        "codigo": "901544",
        "curso": "1º",
        "titulacion": "ADE-GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 123,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula Mult.-1208"
            },
            {
                "id": 124,
                "dia": "X",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula Mult.-1208"
            }
        ],
        "desdobles": []
    },
    {
        "id": 50,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "DG",
        "cuatrimestre": 1,
        "codigo": "900204",
        "curso": "1º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 125,
                "dia": "L",
                "hora_inicio": "11:30:00",
                "hora_fin": "12:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 126,
                "dia": "M",
                "hora_inicio": "11:30:00",
                "hora_fin": "12:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 127,
                "dia": "J",
                "hora_inicio": "11:30:00",
                "hora_fin": "12:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 128,
                "dia": "V",
                "hora_inicio": "12:30:00",
                "hora_fin": "13:20:00",
                "aula": "Aula 11"
            }
        ],
        "desdobles": []
    },
    {
        "id": 51,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "DG",
        "cuatrimestre": 2,
        "codigo": "900204",
        "curso": "1º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 129,
                "dia": "L",
                "hora_inicio": "11:30:00",
                "hora_fin": "12:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 130,
                "dia": "M",
                "hora_inicio": "11:30:00",
                "hora_fin": "12:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 131,
                "dia": "J",
                "hora_inicio": "11:30:00",
                "hora_fin": "12:20:00",
                "aula": "Aula 11"
            },
            {
                "id": 132,
                "dia": "V",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 11"
            }
        ],
        "desdobles": []
    },
    {
        "id": 52,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "I",
        "cuatrimestre": 1,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 133,
                "dia": "L",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula Mult.-1220"
            },
            {
                "id": 134,
                "dia": "M",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula Mult.-1220"
            },
            {
                "id": 135,
                "dia": "X",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula Mult.-1220"
            },
            {
                "id": 136,
                "dia": "V",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula Mult.-1220"
            }
        ],
        "desdobles": []
    },
    {
        "id": 53,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "I",
        "cuatrimestre": 2,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 137,
                "dia": "L",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula Mult.-1220"
            },
            {
                "id": 138,
                "dia": "M",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula Mult.-1220"
            },
            {
                "id": 139,
                "dia": "X",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula Mult.-1220"
            },
            {
                "id": 140,
                "dia": "V",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula Mult.-1220"
            }
        ],
        "desdobles": []
    },
    {
        "id": 54,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 141,
                "dia": "L",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 142,
                "dia": "M",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 143,
                "dia": "J",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 144,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": []
    },
    {
        "id": 55,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 145,
                "dia": "L",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 146,
                "dia": "M",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 147,
                "dia": "J",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 148,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": []
    },
    {
        "id": 56,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "B",
        "cuatrimestre": 1,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 149,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 150,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 151,
                "dia": "J",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 152,
                "dia": "V",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": []
    },
    {
        "id": 57,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "B",
        "cuatrimestre": 2,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 153,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 154,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 155,
                "dia": "J",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 156,
                "dia": "V",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": []
    },
    {
        "id": 58,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "D",
        "cuatrimestre": 1,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 157,
                "dia": "L",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 158,
                "dia": "X",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 159,
                "dia": "J",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 160,
                "dia": "V",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 9"
            }
        ],
        "desdobles": []
    },
    {
        "id": 59,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "D",
        "cuatrimestre": 2,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 161,
                "dia": "L",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 162,
                "dia": "X",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 163,
                "dia": "J",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 164,
                "dia": "V",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 9"
            }
        ],
        "desdobles": []
    },
    {
        "id": 60,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "E",
        "cuatrimestre": 1,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 165,
                "dia": "L",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 166,
                "dia": "M",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 167,
                "dia": "J",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 168,
                "dia": "V",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": []
    },
    {
        "id": 61,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "E",
        "cuatrimestre": 2,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 169,
                "dia": "L",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 170,
                "dia": "M",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 171,
                "dia": "J",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 172,
                "dia": "V",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": []
    },
    {
        "id": 62,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "F",
        "cuatrimestre": 1,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 173,
                "dia": "L",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 174,
                "dia": "M",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 175,
                "dia": "J",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 176,
                "dia": "V",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": []
    },
    {
        "id": 63,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "F",
        "cuatrimestre": 2,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 177,
                "dia": "L",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 178,
                "dia": "M",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 179,
                "dia": "X",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 180,
                "dia": "V",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": []
    },
    {
        "id": 64,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "G",
        "cuatrimestre": 1,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 181,
                "dia": "L",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 182,
                "dia": "M",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 183,
                "dia": "J",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 184,
                "dia": "V",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 9"
            }
        ],
        "desdobles": []
    },
    {
        "id": 65,
        "siglas": "MDL",
        "nombre": "Matemática Discreta y Lógica Matemática",
        "grupo": "G",
        "cuatrimestre": 2,
        "codigo": "803263",
        "curso": "1º",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 185,
                "dia": "L",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 186,
                "dia": "X",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 187,
                "dia": "J",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 9"
            },
            {
                "id": 188,
                "dia": "V",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 9"
            }
        ],
        "desdobles": []
    },
    {
        "id": 66,
        "siglas": "MD",
        "nombre": "Matemática discreta",
        "grupo": "V",
        "cuatrimestre": 1,
        "codigo": "805301",
        "curso": "1º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 189,
                "dia": "L",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 190,
                "dia": "M",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 191,
                "dia": "X",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 192,
                "dia": "V",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 5"
            }
        ],
        "desdobles": []
    },
    {
        "id": 67,
        "siglas": "MAR",
        "nombre": "Métodos algorítmicos en resolución de problemas",
        "grupo": "DG",
        "cuatrimestre": 1,
        "codigo": "900225",
        "curso": "3º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 193,
                "dia": "L",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 11"
            },
            {
                "id": 194,
                "dia": "X",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 11"
            }
        ],
        "desdobles": []
    },
    {
        "id": 68,
        "siglas": "MAR",
        "nombre": "Métodos algorítmicos en resolución de problemas",
        "grupo": "DG",
        "cuatrimestre": 2,
        "codigo": "900225",
        "curso": "3º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 195,
                "dia": "M",
                "hora_inicio": "14:30:00",
                "hora_fin": "15:20:00",
                "aula": "Aula Mult.-1218"
            },
            {
                "id": 196,
                "dia": "J",
                "hora_inicio": "12:30:00",
                "hora_fin": "14:20:00",
                "aula": "Aula Mult.-1218"
            }
        ],
        "desdobles": []
    },
    {
        "id": 69,
        "siglas": "MAR",
        "nombre": "Métodos algorítmicos en resolución de problemas",
        "grupo": "V",
        "cuatrimestre": 1,
        "codigo": "805315",
        "curso": "3º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 197,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 7"
            },
            {
                "id": 198,
                "dia": "J",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula Mult.-1208"
            }
        ],
        "desdobles": [
            {
                "id": 33,
                "asignatura": 69,
                "horario": [
                    307
                ]
            }
        ]
    },
    {
        "id": 70,
        "siglas": "MAR",
        "nombre": "Métodos algorítmicos en resolución de problemas",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "803276",
        "curso": "3º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 199,
                "dia": "X",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 11"
            },
            {
                "id": 200,
                "dia": "M",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 13"
            },
            {
                "id": 201,
                "dia": "X",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 11"
            }
        ],
        "desdobles": [
            {
                "id": 31,
                "asignatura": 70,
                "horario": [
                    305
                ]
            }
        ]
    },
    {
        "id": 71,
        "siglas": "MAR",
        "nombre": "Métodos algorítmicos en resolución de problemas",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "803276",
        "curso": "3º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 202,
                "dia": "X",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 6"
            },
            {
                "id": 203,
                "dia": "X",
                "hora_inicio": "10:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 14"
            },
            {
                "id": 204,
                "dia": "V",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 6"
            }
        ],
        "desdobles": [
            {
                "id": 32,
                "asignatura": 71,
                "horario": [
                    306
                ]
            }
        ]
    },
    {
        "id": 72,
        "siglas": "MIN",
        "nombre": "Minería de datos y el paradigma Big Data",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "803347",
        "curso": "Opt.",
        "titulacion": "GI/GC/GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 205,
                "dia": "L",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 206,
                "dia": "M",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": []
    },
    {
        "id": 73,
        "siglas": "PL",
        "nombre": "Procesadores de Lenguajes",
        "grupo": "DG",
        "cuatrimestre": 2,
        "codigo": "900235",
        "curso": "4º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 207,
                "dia": "M",
                "hora_inicio": "13:30:00",
                "hora_fin": "15:20:00",
                "aula": "Aula 12"
            },
            {
                "id": 208,
                "dia": "V",
                "hora_inicio": "11:30:00",
                "hora_fin": "13:20:00",
                "aula": "Aula 12"
            }
        ],
        "desdobles": []
    },
    {
        "id": 74,
        "siglas": "PR",
        "nombre": "Programación con restricciones",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "803293",
        "curso": "Opt.",
        "titulacion": "GI/GC/GS/DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 209,
                "dia": "J",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 14"
            },
            {
                "id": 210,
                "dia": "V",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 14"
            }
        ],
        "desdobles": []
    },
    {
        "id": 75,
        "siglas": "PC",
        "nombre": "Programación Concurrente",
        "grupo": "DG",
        "cuatrimestre": 2,
        "codigo": "900236",
        "curso": "4º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 211,
                "dia": "L",
                "hora_inicio": "12:30:00",
                "hora_fin": "13:20:00",
                "aula": "Aula 12"
            },
            {
                "id": 212,
                "dia": "M",
                "hora_inicio": "12:30:00",
                "hora_fin": "13:20:00",
                "aula": "Aula 12"
            },
            {
                "id": 213,
                "dia": "X",
                "hora_inicio": "12:30:00",
                "hora_fin": "14:20:00",
                "aula": "Aula 12"
            }
        ],
        "desdobles": []
    },
    {
        "id": 76,
        "siglas": "PC",
        "nombre": "Programación Concurrente",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "803274",
        "curso": "3º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 214,
                "dia": "M",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 14"
            },
            {
                "id": 215,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 14"
            },
            {
                "id": 216,
                "dia": "J",
                "hora_inicio": "10:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 14"
            }
        ],
        "desdobles": [
            {
                "id": 34,
                "asignatura": 76,
                "horario": [
                    308
                ]
            }
        ]
    },
    {
        "id": 77,
        "siglas": "PSD",
        "nombre": "Programación de sistemas distribuidos",
        "grupo": "D",
        "cuatrimestre": 1,
        "codigo": "803220",
        "curso": "4º",
        "titulacion": "GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 217,
                "dia": "X",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 218,
                "dia": "J",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 10"
            }
        ],
        "desdobles": []
    },
    {
        "id": 78,
        "siglas": "PDAP",
        "nombre": "Programación declarativa aplicada",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "607298",
        "curso": "2º",
        "titulacion": "MII",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 219,
                "dia": "L",
                "hora_inicio": "16:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 7"
            },
            {
                "id": 220,
                "dia": "X",
                "hora_inicio": "16:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 7"
            }
        ],
        "desdobles": []
    },
    {
        "id": 79,
        "siglas": "PD",
        "nombre": "Programación Declarativa",
        "grupo": "DG",
        "cuatrimestre": 1,
        "codigo": "900226",
        "curso": "4º",
        "titulacion": "DG",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 221,
                "dia": "L",
                "hora_inicio": "12:30:00",
                "hora_fin": "14:20:00",
                "aula": "Aula 7"
            },
            {
                "id": 222,
                "dia": "V",
                "hora_inicio": "10:30:00",
                "hora_fin": "12:20:00",
                "aula": "Aula 7"
            }
        ],
        "desdobles": []
    },
    {
        "id": 80,
        "siglas": "PD",
        "nombre": "Programación declarativa",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "803275",
        "curso": "3º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 223,
                "dia": "J",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 13"
            },
            {
                "id": 224,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 13"
            }
        ],
        "desdobles": [
            {
                "id": 35,
                "asignatura": 80,
                "horario": [
                    309
                ]
            }
        ]
    },
    {
        "id": 81,
        "siglas": "SGDI",
        "nombre": "Sistemas de gestión de datos y de la información",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "607290",
        "curso": "1º",
        "titulacion": "MII",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 225,
                "dia": "L",
                "hora_inicio": "19:00:00",
                "hora_fin": "20:50:00",
                "aula": "Aula 1"
            },
            {
                "id": 226,
                "dia": "X",
                "hora_inicio": "17:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 1"
            }
        ],
        "desdobles": []
    },
    {
        "id": 82,
        "siglas": "SC",
        "nombre": "Software corporativo",
        "grupo": "E",
        "cuatrimestre": 1,
        "codigo": "803338",
        "curso": "4º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 227,
                "dia": "L",
                "hora_inicio": "16:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 14"
            },
            {
                "id": 228,
                "dia": "M",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 14"
            }
        ],
        "desdobles": [
            {
                "id": 36,
                "asignatura": 82,
                "horario": [
                    310
                ]
            }
        ]
    },
    {
        "id": 83,
        "siglas": "SC",
        "nombre": "Software corporativo",
        "grupo": "E",
        "cuatrimestre": 2,
        "codigo": "803338",
        "curso": "4º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 229,
                "dia": "M",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 14"
            },
            {
                "id": 230,
                "dia": "X",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 14"
            }
        ],
        "desdobles": [
            {
                "id": 37,
                "asignatura": 83,
                "horario": [
                    311
                ]
            }
        ]
    },
    {
        "id": 84,
        "siglas": "SON",
        "nombre": "Sonido en videojuegos",
        "grupo": "V",
        "cuatrimestre": 1,
        "codigo": "805332",
        "curso": "4º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 231,
                "dia": "L",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 6"
            },
            {
                "id": 232,
                "dia": "X",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula 6"
            }
        ],
        "desdobles": []
    },
    {
        "id": 85,
        "siglas": "TAIS",
        "nombre": "Técnicas algorítmicas en ingeniería del software",
        "grupo": "E",
        "cuatrimestre": 1,
        "codigo": "803336",
        "curso": "3º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 233,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 14"
            },
            {
                "id": 234,
                "dia": "X",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 14"
            }
        ],
        "desdobles": [
            {
                "id": 38,
                "asignatura": 85,
                "horario": [
                    312
                ]
            }
        ]
    },
    {
        "id": 86,
        "siglas": "TPV",
        "nombre": "Tecnología de la programación de videojuegos",
        "grupo": "V",
        "cuatrimestre": 1,
        "codigo": "805319",
        "curso": "2º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 235,
                "dia": "L",
                "hora_inicio": "17:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 236,
                "dia": "X",
                "hora_inicio": "17:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 237,
                "dia": "M",
                "hora_inicio": "17:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula 5"
            }
        ],
        "desdobles": [
            {
                "id": 39,
                "asignatura": 86,
                "horario": [
                    313
                ]
            }
        ]
    },
    {
        "id": 87,
        "siglas": "TPV",
        "nombre": "Tecnología de la programación de videojuegos",
        "grupo": "V",
        "cuatrimestre": 2,
        "codigo": "805319",
        "curso": "2º",
        "titulacion": "GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 238,
                "dia": "L",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 239,
                "dia": "X",
                "hora_inicio": "15:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 5"
            },
            {
                "id": 240,
                "dia": "V",
                "hora_inicio": "17:00:00",
                "hora_fin": "17:50:00",
                "aula": "Aula 5"
            }
        ],
        "desdobles": [
            {
                "id": 40,
                "asignatura": 87,
                "horario": [
                    314
                ]
            }
        ]
    },
    {
        "id": 88,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "I",
        "cuatrimestre": 1,
        "codigo": "803271",
        "curso": "2º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 241,
                "dia": "L",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 13"
            },
            {
                "id": 242,
                "dia": "V",
                "hora_inicio": "15:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 13"
            },
            {
                "id": 243,
                "dia": "X",
                "hora_inicio": "15:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 13"
            }
        ],
        "desdobles": []
    },
    {
        "id": 89,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "I",
        "cuatrimestre": 2,
        "codigo": "803271",
        "curso": "2º",
        "titulacion": "GI",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 244,
                "dia": "X",
                "hora_inicio": "13:00:00",
                "hora_fin": "14:50:00",
                "aula": "Aula 13"
            },
            {
                "id": 245,
                "dia": "J",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 13"
            }
        ],
        "desdobles": []
    },
    {
        "id": 90,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "803271",
        "curso": "2º",
        "titulacion": "GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 246,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 247,
                "dia": "M",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 248,
                "dia": "X",
                "hora_inicio": "09:00:00",
                "hora_fin": "09:50:00",
                "aula": "Aula 3"
            }
        ],
        "desdobles": [
            {
                "id": 41,
                "asignatura": 90,
                "horario": [
                    315
                ]
            }
        ]
    },
    {
        "id": 91,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "A",
        "cuatrimestre": 2,
        "codigo": "803271",
        "curso": "2º",
        "titulacion": "GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 249,
                "dia": "L",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 250,
                "dia": "X",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 251,
                "dia": "V",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 10"
            }
        ],
        "desdobles": [
            {
                "id": 42,
                "asignatura": 91,
                "horario": [
                    316
                ]
            }
        ]
    },
    {
        "id": 92,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "D",
        "cuatrimestre": 1,
        "codigo": "803271",
        "curso": "2º",
        "titulacion": "GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 252,
                "dia": "L",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 253,
                "dia": "V",
                "hora_inicio": "12:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 10"
            },
            {
                "id": 254,
                "dia": "M",
                "hora_inicio": "11:00:00",
                "hora_fin": "12:50:00",
                "aula": "Aula 10"
            }
        ],
        "desdobles": [
            {
                "id": 43,
                "asignatura": 92,
                "horario": [
                    317
                ]
            }
        ]
    },
    {
        "id": 93,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "D",
        "cuatrimestre": 2,
        "codigo": "803271",
        "curso": "2º",
        "titulacion": "GI/GC",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 255,
                "dia": "L",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 256,
                "dia": "X",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 257,
                "dia": "J",
                "hora_inicio": "11:00:00",
                "hora_fin": "11:50:00",
                "aula": "Aula 3"
            }
        ],
        "desdobles": [
            {
                "id": 44,
                "asignatura": 93,
                "horario": [
                    318
                ]
            }
        ]
    },
    {
        "id": 94,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "E",
        "cuatrimestre": 1,
        "codigo": "803331",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 258,
                "dia": "M",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 4"
            },
            {
                "id": 259,
                "dia": "X",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 4"
            },
            {
                "id": 260,
                "dia": "J",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 4"
            }
        ],
        "desdobles": [
            {
                "id": 45,
                "asignatura": 94,
                "horario": [
                    319
                ]
            }
        ]
    },
    {
        "id": 95,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "E",
        "cuatrimestre": 2,
        "codigo": "803331",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 261,
                "dia": "M",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 4"
            },
            {
                "id": 262,
                "dia": "V",
                "hora_inicio": "10:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 4"
            },
            {
                "id": 263,
                "dia": "J",
                "hora_inicio": "09:00:00",
                "hora_fin": "10:50:00",
                "aula": "Aula 4"
            }
        ],
        "desdobles": [
            {
                "id": 46,
                "asignatura": 95,
                "horario": [
                    320
                ]
            }
        ]
    },
    {
        "id": 96,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "F",
        "cuatrimestre": 1,
        "codigo": "803331",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 264,
                "dia": "M",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula Mult.-1208"
            },
            {
                "id": 265,
                "dia": "X",
                "hora_inicio": "19:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula Mult.-1208"
            },
            {
                "id": 266,
                "dia": "J",
                "hora_inicio": "18:00:00",
                "hora_fin": "19:50:00",
                "aula": "Aula Mult.-1208"
            }
        ],
        "desdobles": [
            {
                "id": 47,
                "asignatura": 96,
                "horario": [
                    321
                ]
            }
        ]
    },
    {
        "id": 97,
        "siglas": "TP",
        "nombre": "Tecnología de la programación",
        "grupo": "F",
        "cuatrimestre": 2,
        "codigo": "803331",
        "curso": "2º",
        "titulacion": "GS",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 267,
                "dia": "M",
                "hora_inicio": "15:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 268,
                "dia": "X",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 3"
            },
            {
                "id": 269,
                "dia": "V",
                "hora_inicio": "16:00:00",
                "hora_fin": "16:50:00",
                "aula": "Aula 3"
            }
        ],
        "desdobles": [
            {
                "id": 48,
                "asignatura": 97,
                "horario": [
                    322
                ]
            }
        ]
    },
    {
        "id": 98,
        "siglas": "TSW",
        "nombre": "Testing de Software",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "805756/805757",
        "curso": "Opt.",
        "titulacion": "GI/GC/GS/DG/GDV",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 270,
                "dia": "X",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 2"
            },
            {
                "id": 271,
                "dia": "V",
                "hora_inicio": "14:00:00",
                "hora_fin": "15:50:00",
                "aula": "Aula 2"
            }
        ],
        "desdobles": []
    },
    {
        "id": 99,
        "siglas": "TDM",
        "nombre": "Tratamiento de datos masivos",
        "grupo": "A",
        "cuatrimestre": 1,
        "codigo": "608902",
        "curso": "1º",
        "titulacion": "IoT",
        "departamento": {
            "siglas": "SIC",
            "nombre": "Sistemas Informáticos y Computación",
            "min_creditos": 24.0,
            "fecha_inicio_cuatri": "2018-09-12",
            "max_creditos_teoria": 16.0,
            "max_creditos_lab": 8.0,
            "min_deuda_acumulable": 3.0
        },
        "horario": [
            {
                "id": 272,
                "dia": "M",
                "hora_inicio": "17:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula Mult.-1210"
            },
            {
                "id": 273,
                "dia": "X",
                "hora_inicio": "18:00:00",
                "hora_fin": "18:50:00",
                "aula": "Aula Mult.-1210"
            }
        ],
        "desdobles": []
    }
]