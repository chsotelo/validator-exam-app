import React from 'react';
import { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css'
import { Latex } from "./latex/Latex";

// import { preguntas } from '../src/ArchivoJSON/preguntas.json';
import { compararUqid } from "./functions/compararUqid"
import { compararURL } from "./functions/compararURL"
import { compararPregunta } from "./functions/compararPregunta";
import { compararKeys } from "./functions/compararKeys";
import { funcionRepetidos } from "./functions/funcionRepetidos.js";
import { generarJSON } from "./functions/generarJSON";
// import { questions as preguntas, questions } from './exams/questions.js';
import './App.css';
import VisorLatex from "./components/VisorLatex";



const jsonData= require('./ArchivoJSON/preguntas7.json');

const preguntas = JSON.parse(JSON.stringify(jsonData));
function App() {

  return (
    <div >
      <div className="App-header">
        <h1>Validador examen</h1>
        {/* <button onClick={compararUqid}> Comparar Uquid </button>
        <br />
        <button onClick={compararURL}> Comparar URL </button>
        <br />
        <button onClick={compararPregunta}> Comparar Pregunta </button>
        <br />
        <button onClick={compararKeys}> Comparar Keys </button> */}
        <br />
        <button onClick={funcionRepetidos}> Comparar Keys </button>
        {/* <br />
        <button onClick={generarJSON}> Generar JSON </button>
        <br /> */}
        <br />
      </div>
      <div className='container-questions'>

        <h1>Resultado</h1>
        {
          /* Iterating over the array `preguntas` and returning a new array of `<div>` elements. */
          // preguntas.map((e, i) => (
          //   <div key={i}>
          //     <h2>Pregunta de {e.course}</h2>
          //     <h2>{i+1}</h2>
          //     <VisorLatex pregunta={e.question} keys={e.keys} />
          //   </div>
          // ))
        }
        <br />
      </div>
    </div >
  );
}

export default App;

//usamos map cuando tenemos un array y queremos obtener un nuevo arrar de otra cosa (trasforma un array en base a una funcion)