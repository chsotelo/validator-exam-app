import { questions as preguntas } from '../exams/questions.js';

//verificando la cantidad de preguntas por curso
export const funcionCantidadCursos = () => {
    const cantidadPreguntasPorCurso = preguntas.map((e) => { return e.course });
    const cursosCantidad = cantidadPreguntasPorCurso.reduce((obj, contenido) => ({
        ...obj,
        [contenido]: obj[contenido] ? obj[contenido] + 1 : 1
    }), {});
    // const cantidadPreguntas = Object.values(cursosCantidad).reduce((a, b) => a + b, 0);
    return cursosCantidad;
}
 






//verificando cantidad total de preguntas

