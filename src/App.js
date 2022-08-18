import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css'

// import { Latex } from "./latex/Latex";
// import { preguntas } from '../src/ArchivoJSON/preguntas.json';
// import { compararUqid } from "./functions/compararUqid"
// import { compararURL } from "./functions/compararURL"
// import { compararPregunta } from "./functions/compararPregunta";
// import { compararKeys } from "./functions/compararKeys";
// import { funcionCantidadCursos } from './functions/funcionCantidadCursos';
// import { questions as preguntas, questions } from './exams/questions.js';
import { funcionVerificacionGeneral } from "./functions/funcionVerificacionGeneral.js";
import { generarJSON } from "./functions/generarJSON";
import { questions } from './exams/questions';
import './App.css';
import VisorLatex from "./components/VisorLatex";

function App() {
  const [pregunta, setPregunta] = useState([]);

  useEffect(() => {
    const updateAnswers = async (questions) => {
      await funcionVerificacionGeneral()
      setPregunta(generarJSON(questions))
    }
    updateAnswers(questions)
  }, [questions])

  console.log(pregunta)
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
        {/* <button onClick={funcionVerificacionGeneral}> Validar Examen </button> */}
        <br />
        {/* <button onClick={}> Generar JSON </button> */}

        <div id='uquid-repetidas'></div>
        <br />
        <div id='similares-preguntas'></div>
        <br />
        <div id='preguntas-repetidas'></div>
        <br />
        <div id='keys-repetidas'></div>
        <br />
        <div id='url-repetidas'></div>
        <br />
        <br />
        <div>
        </div>
      </div>
      <div id='cantidad-total-preguntas'></div>
      <br />
      <div id='cantidad-preguntas'></div>
      <div className='container-questions'>
        <h1>Resultado</h1>
        {
          /* Iterating over the array `preguntas` and returning a new array of `<div>` elements. */
          pregunta.map((e, i) => (
            <div key={i}>
              <h2>Pregunta de {e.course}</h2>
              <h3>{e.uqid}</h3>
              <h2>{i + 1}</h2>
              <VisorLatex pregunta={e.question} keys={e.keys} imagen={e.UrlOfImage} />
            </div>
          ))
        }
        <br />
      </div>
    </div >
  );
}

export default App;

