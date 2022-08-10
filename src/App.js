
import { compararUqid } from "./functions/compararUqid"
import { compararURL } from "./functions/compararURL"
import { compararPregunta } from "./functions/compararPregunta";
import { compararKeys } from "./functions/compararKeys";
import { generarJSON } from "./functions/generarJSON";
import './App.css';

function App() {
  return (
    <div className="App-header">
      <h1>Validador examen</h1>
      <button onClick={compararUqid}> Comparar Uquid </button>
      <br />
      <button onClick={compararURL}> Comparar URL </button>
      <br />
      <button onClick={compararPregunta}> Comparar Pregunta </button>
      <br />
      <button onClick={compararKeys}> Comparar Keys </button>
      <br />
      <button onClick={generarJSON}> Generar JSON </button>
    </div>
  );
}

export default App;

//usamos map cuando tenemos un array y queremos obtener un nuevo arrar de otra cosa (trasforma un array en base a una funcion)