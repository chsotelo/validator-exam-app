import { questions } from '../exams/questions.js';
let counterURL = 0;

export const compararURL = () => {
    for (let index = 0; index < questions.length; index++) {
        let urlQuestion = questions[index].UrlOfImage
        for (let index = 0; index < questions.length; index++) {
            let urlQuestion2 = questions[index].UrlOfImage
            if (urlQuestion !== null) {
                if (urlQuestion === urlQuestion2) {
                    counterURL++;
                }
            }
        }
    }
    if (counterURL > questions.length) {
        alert("Hay URL repetidas");
    } else {
        alert("No hay URL repetidas");
    }
    console.log(counterURL);
    counterURL = 0;
}