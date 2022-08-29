import React from 'react';

const Welcome = (props) => {
    return (

        <section className={`welcome__panel`}>
            <h1 className={`welcome__title`}>¿ Lo sabes ?</h1>
            <h2 className={`welcome__sub`}>Pon a prueba tu conocimiento general</h2>
            <button className={`btn btn__ok`} onClick={props.handleStartButton}>Empezar</button>
        </section>
    );
};

export default Welcome;
