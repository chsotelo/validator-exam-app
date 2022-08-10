import { questions } from '../exams/questions.js';
let counterKeys = 0;

export const compararKeys = () => {
    for (let index = 0; index < questions.length; index++) {
        let keysQuestion1 = questions[index].keys.toString();
        for (let index = 0; index < questions.length; index++) {
            let keysQuestion2 = questions[index].keys.toString();
            if (keysQuestion1 === keysQuestion2) {
                counterKeys++;
            }
        }
    }
    if (counterKeys > questions.length) {
        alert("Hay keys repetidas");
    }else{
        alert("No hay keys repetidas");
    }
    console.log(counterKeys);
    counterKeys = 0;
}

