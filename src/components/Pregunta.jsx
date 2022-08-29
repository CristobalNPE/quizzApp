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
        </div>
    );
};

export default Pregunta;
