import React from 'react';
import stringSimilarity from 'string-similarity'
import { questions as preguntas } from '../exams/questions.js';

export const funcionVerificacionGeneral = () => {
    //verificando UQUID repetidos
    const uquid = preguntas.map((e) => { return e.uqid });
    const rta = uquid.reduce((obj, contenido) => ({
        ...obj,
        [contenido]: obj[contenido] ? obj[contenido] + 1 : 1
    }), {});
    const repetidos = Object.keys(rta).filter((e) => rta[e] > 1);
    if (repetidos !== []) {
        document.getElementById('uquid-repetidas').innerHTML = "UQUID que se repiten son: \n  " + repetidos.toString();
    }

    //verificando si hay preguntas repetidas
    const preguntasAcumuladas = preguntas.map((e) => { return e.question.toLowerCase() });
    const preguntasSimilares = [];
    const preguntasRepetidas = [];
    for (let index = 0; index < preguntasAcumuladas.length; index++) {
        for (let index2 = 0; index2 < preguntasAcumuladas.length; index2++) {
            if (index !== index2) {
                const resultado = stringSimilarity.compareTwoStrings(preguntasAcumuladas[index], preguntasAcumuladas[index2]);
                if (resultado > 0.6 && resultado < 1) {
                    preguntasSimilares.push(preguntas[index].uqid, resultado);
                } if (resultado === 1) {
                    preguntasRepetidas.push(preguntas[index].uqid);
                } else {

                }
            }
        }
    }
    if (preguntasSimilares.length > 0) {
        document.getElementById('similares-preguntas').innerHTML = "Hay preguntas similares, revisar la consola";
        console.log(preguntasSimilares);
    }
    if (preguntasRepetidas.length > 0) {
        document.getElementById('preguntas-repetidas').innerHTML = "Hay preguntas repetidas, revisar la consola";
        console.log(preguntasRepetidas);
    }

    //verificando si hay KEYS (alternativas) repetidas
    const keys = preguntas.map((e) => { return e.keys });
    const rta3 = keys.reduce((obj, contenido) => ({
        ...obj,
        [contenido]: obj[contenido] ? obj[contenido] + 1 : 1
    }), {});
    const repetidos3 = Object.keys(rta3).filter((e) => rta3[e] > 1);
    if (repetidos !== []) {
        document.getElementById("keys-repetidas").innerHTML = "KEYS que se repiten son: \n " + repetidos3.toString();
    }


    //verificando si no hay URLs repetidas
    const url = preguntas.map((e) => { return e.UrlOfImage });
    const rta2 = url.reduce((obj, contenido) => ({
        ...obj,
        [contenido]: obj[contenido] ? obj[contenido] + 1 : 1
    }), {});
    const repetidos2 = Object.keys(rta2).filter((e) => rta2[e] > 1);
    if (repetidos2 !== [] && repetidos2.length !== 1 && repetidos2[0] !== null) {
        document.getElementById("url-repetidas").innerHTML = "URL que se repiten son: \n " + repetidos2.toString();
    }


    const cantidadPreguntasPorCurso = preguntas.map((e) => { return e.course });
    const cursosCantidad = cantidadPreguntasPorCurso.reduce((obj, contenido) => ({
        ...obj,
        [contenido]: obj[contenido] ? obj[contenido] + 1 : 1
    }), {});
document.getElementById("cantidad-preguntas").innerHTML = "Cantidad de preguntas por curso: \n " + JSON.stringify(cursosCantidad);


    const cantidadPreguntas = Object.values(cursosCantidad).reduce((a, b) => a + b, 0);
    document.getElementById("cantidad-total-preguntas").innerHTML = "Cantidad total de preguntas: \n " + cantidadPreguntas;

}