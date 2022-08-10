import { questions as preguntas } from '../exams/questions.js';

export const replaceSpace = (preguntas) => {
    let preguntasModificadasSpace = [];
    for (let index = 0; index < preguntas.length; index++) {
        let pregunta = preguntas[index].question;
        let keys = preguntas[index].keys;
        let preguntaModificada = pregunta.replace(/ /g, " \\space ");
        let keysModificadas = keys.map((key) => {
            return key.replace(/ /g, " \\space ");
        });
        preguntasModificadasSpace.push({
            ...preguntas[index],
            question: preguntaModificada,
            keys: keysModificadas,
        });
    }
    return preguntasModificadasSpace;
};

export const replaceNewLine = (preguntas) => {
    let preguntasModificadasNewLine = [];
    for (let index = 0; index < preguntas.length; index++) {
        let pregunta = preguntas[index].question;
        let preguntaModificada = pregunta.replace(/ \n /g, " \\newline ");
        preguntasModificadasNewLine.push({
            ...preguntas[index],
            question: preguntaModificada,
        });
    }
    return preguntasModificadasNewLine;
};

export const generarJSON = () => {
    const preguntasModificadasSpace = replaceSpace(preguntas);
    const preguntasModificadas = replaceNewLine(preguntasModificadasSpace);
    console.log(preguntasModificadas);
    const data = JSON.stringify(preguntasModificadas);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "preguntasModificadas.json";
    link.href = url;
    link.click();
};