import React from 'react';

const Pregunta = () => {
    return (
        <div className={`pregunta`}>
            <h1>¿Cuántos litros de sangre tiene una persona adulta?</h1>
            <div className="respuesta__box">
                <button className="respuesta">Tiene entre 2 y 4 litros</button>
                <button className="respuesta">Tiene entre 4 y 6 litros</button>
                <button className="respuesta">Tiene 10 litros</button>
                <button className="respuesta">Tiene 7 litros</button>
                <button className="respuesta">Tiene 0,5 litros</button>
            </div>
            <div className="pregunta__info">
                <p>
                    La cantidad de sangre varía de persona a persona. El volumen de sangre representa del 7 al 8% del
                    peso corporal. De esta forma, en una persona adulta que pesa entre 50 y 80 kilogramos, puede haber
                    entre 4 y 6 litros de sangre.
                </p>
            </div>
        </div>
    );
};

export default Pregunta;
