import React from 'react';
import stringSimilarity from 'string-similarity'
import { questions as preguntas } from '../exams/questions.js';

export const funcionRepetidos = () => {
    //verificando UQUID repetidos
    const uquid = preguntas.map((e) => { return e.uqid });
    const rta = uquid.reduce((obj, contenido) => ({
        ...obj,
        [contenido]: obj[contenido] ? obj[contenido] + 1 : 1
    }), {});
    const repetidos = Object.keys(rta).filter((e) => rta[e] > 1);
    if (repetidos !== []) {
        // alert("UQUID que se repiten son: \n "+repetidos.toString());
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
                }if (resultado ===1) {
                    preguntasRepetidas.push(preguntas[index].uqid);
                } else {
                    
                }
            }
        }
    }

    //retorna uquid de las preguntas si en caso son similares o se repiten
    // console.log("Preguntas parecidas: \n"+preguntasSimilares);
    // console.log("preguntas repetidas: \n"+preguntasRepetidas);



    //verificando si hay KEYS (alternativas) repetidas
    const keys = preguntas.map((e) => { return e.keys });
    const rta3 = keys.reduce((obj, contenido) => ({
        ...obj,
        [contenido]: obj[contenido] ? obj[contenido] + 1 : 1
    }), {});
    const repetidos3 = Object.keys(rta3).filter((e) => rta3[e] > 1);
    if (repetidos3 !== []) {
        // alert("KEYS que se repiten son: \n "+repetidos3.toString());
    }


    //verificando si no hay URLs repetidas
    const url = preguntas.map((e) => { return e.UrlOfImage });
    const rta2 = url.reduce((obj, contenido) => ({
        ...obj,
        [contenido]: obj[contenido] ? obj[contenido] + 1 : 1
    }), {});
    const repetidos2 = Object.keys(rta2).filter((e) => rta2[e] > 1);
    if (repetidos2 !== [] && repetidos2.length !== 1 && repetidos2[0] !== null) {
        // alert("URL que se repiten son: \n "+repetidos2.toString());
    }


    //verificando la cantidad de preguntas por curso
    const cantidadPreguntasPorCurso = preguntas.map((e) => { return e.course });
    const cursosCantidad = cantidadPreguntasPorCurso.reduce((obj, contenido) => ({
        ...obj,
        [contenido]: obj[contenido] ? obj[contenido] + 1 : 1
    }), {});

    //verificando cantidad total de preguntas
    const cantidadPreguntas = Object.values(cursosCantidad).reduce((a, b) => a + b, 0);


}