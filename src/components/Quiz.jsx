import React from 'react';
import Pregunta from "./Pregunta.jsx";

const Quiz = () => {
    return (
        <section className={`quiz__box`}>
            <div className="info-panel">
                <div className="vida">
                    X X X
                </div>
                <div className="puntos">
                    <h3 className={`info-panel__text`}>Puntuacion: 78</h3>
                    <h3 className={`info-panel__text`}>Mejor puntaje: 178</h3>
                </div>
                <div className="stats">
                    <h3 className={`info-panel__text`}>Correctas: 6</h3>
                    <h3 className={`info-panel__text`}>Incorrectas: 3</h3>
                </div>


            </div>
            <div className="quiz__main">
                <h1>Selecciona la opcion que creas es correcta:</h1>
                <Pregunta/>

            </div>
        </section>
    );
};

export default Quiz;
