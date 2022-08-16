import { questions } from '../exams/questions.js';
let counterUquid = 0;
export const compararUqid = () => {
    for (let index = 0; index < questions.length; index++) {
        let uqidQuestion = questions[index].uqid
        for (let index = 0; index < questions.length; index++) {
            let uqidQuestion2 = questions[index].uqid
            if (uqidQuestion === uqidQuestion2) {
                counterUquid++;
                console.log("son iguales");
            }
        }
    }
    if (counterUquid > questions.length) {
        alert("Hay Uquid repetidas");
    }else{
        alert("No hay Uquid repetidas");
    }
    console.log(counterUquid);
    counterUquid = 0;
}

// import { questions } from '../exams/questions.js';
// let counterUquid = 0;



// export const compararUqid = () => {
    
//     const rta = questions.map((e) => { e.uqid }).reduce((obj, contenido) => ({
//         if(obj[contenido]) {
//             obj[contenido] = obj[contenido] + 1
//         }else {
//             obj[contenido] = 1;
//         }
//         return obj;
//     }), {});
// }