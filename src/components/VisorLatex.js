import React from "react";
import 'katex/dist/katex.min.css'
import { Latex } from "../latex/Latex";
import "./css/VisorLatex.css"

export default function VisorLatex({ pregunta, keys }) {
    return (
        <div className="container-general-visorlatex">

            <div className="container-question-latex">
                <Latex className="">{pregunta}</Latex>
            </div>
            <br />
            <Latex>{"a)  " + keys[0]}</Latex>
            <br />
            <Latex>{"b)  " + keys[1]}</Latex>
            <br />
            <Latex>{"c)  " + keys[2]}</Latex>
            <br />
            <Latex>{"d)  " + keys[3]}</Latex>
            <br />
            <Latex>{"e)  " + keys[4]}</Latex>
        </div>
    );
}