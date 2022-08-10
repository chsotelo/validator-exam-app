import { questions } from '../exams/questions.js';
let counterQuestions = 0;

export const compararPregunta = () => {
    for (let index = 0; index < questions.length; index++) {
        let question1 = questions[index].question
        for (let index = 0; index < questions.length; index++) {
            let question2 = questions[index].question
            if (question1 === question2) {
                counterQuestions++;
            }
        }
    }
    if (counterQuestions > questions.length) {
        alert("Hay preguntas repetidas");
    }else{
        alert("No hay preguntas repetidas");
    }
    console.log(counterQuestions);
    counterQuestions = 0;
}
