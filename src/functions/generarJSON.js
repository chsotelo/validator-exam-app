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


export const replaceFracciones = (preguntas) => {
    let preguntasModificadasSpace = [];
    for (let index = 0; index < preguntas.length; index++) {
        let pregunta = preguntas[index].question;
        let keys = preguntas[index].keys;
        let preguntaModificada = pregunta.replace(/\\frac{/g, "\\cfrac{");
        let keysModificadas = keys.map((key) => {
            return key.replace(/\\frac{/g, "\\cfrac{");
        });
        preguntasModificadasSpace.push({
            ...preguntas[index],
            question: preguntaModificada,
            keys: keysModificadas,
        });
    }
    return preguntasModificadasSpace;
};

// export const replaceAcentuacion = (preguntas) => {
//     let preguntasModificadasSpace = [];
//     for (let index = 0; index < preguntas.length; index++) {
//         let pregunta = preguntas[index].question;
//         let keys = preguntas[index].keys;
//         let preguntaModificada2 = pregunta.replace(/á/g, "\\'{a}");

//         let keysModificadas = keys.map((key) => {
//             let keyModificada2 = keys.replace(/á/g, "\\'{a}");
//             return keyModificada2;
//         });
//         preguntasModificadasSpace.push({
//             ...preguntas[index],
//             question: preguntaModificada2,
//             keys: keysModificadas,
//         });
//     }
//     return preguntasModificadasSpace;
// };


export const remplazarGuion = (preguntas) => {
    let preguntasModificadasSpace = [];
    for (let index = 0; index < preguntas.length; index++) {
        let pregunta = preguntas[index].question;
        let keys = preguntas[index].keys;
        let preguntaModificada = pregunta.replace(/-/g && /_/g, "\\_");
        let keysModificadas = keys.map((key) => {
            return key.replace(/-/g && /_/g, "\\_");
        });
        preguntasModificadasSpace.push({
            ...preguntas[index],
            question: preguntaModificada,
            keys: keysModificadas,
        });
    }
    return preguntasModificadasSpace;
};


export const remplazarSimboloDolar = (preguntas) => {
    let preguntasModificadasSpace = [];
    for (let index = 0; index < preguntas.length; index++) {
        let pregunta = preguntas[index].question;
        let keys = preguntas[index].keys;
        let preguntaModificada = pregunta.replace(/\$/g, "");
        let keysModificadas = keys.map((key) => {
            return key.replace(/\$/g, "");
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
        let preguntaModificada = pregunta.replace(/\n/g, " \\newline ");
        preguntasModificadasNewLine.push({
            ...preguntas[index],
            question: preguntaModificada,
        });
    }
    return preguntasModificadasNewLine;
};


export const eliminarEspaciosIniciales = (preguntas) => {
//elimiar el espacio inicial de las preguntas y las respuestas 

    let preguntasModificadasNewLine = [];
    for (let index = 0; index < preguntas.length; index++) {
        let pregunta = preguntas[index].question;
        let keys = preguntas[index].keys;
        let preguntaModificada = pregunta.trimStart();
        let keysModificadas = keys.map((key) => {
            return key.trimStart();
        });
        preguntasModificadasNewLine.push({
            ...preguntas[index],
            question: preguntaModificada,
            keys: keysModificadas,
        });
    }
    return preguntasModificadasNewLine;
    
};


export const generarJSON = () => {
    let preguntasSinEspaciosIniciales = eliminarEspaciosIniciales(preguntas);
    let preguntasModificadasSpace = replaceSpace(preguntasSinEspaciosIniciales);
    let preguntasModificadasNewLine = replaceNewLine(preguntasModificadasSpace);
    let preguntasModificadasGuion = remplazarGuion(preguntasModificadasNewLine);
    let preguntasModificadasDolar = remplazarSimboloDolar(preguntasModificadasGuion);
    let preguntasModificadasFracciones = replaceFracciones(preguntasModificadasDolar);
    let preguntasModificadas = preguntasModificadasFracciones;
    console.log(preguntasModificadas);
    let preguntasJSON = JSON.stringify(preguntasModificadas);
    let blob = new Blob([preguntasJSON], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.download = "preguntas.json";
    a.href = url;
    a.click();
};