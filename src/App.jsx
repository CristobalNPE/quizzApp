import React from 'react';
import {CSSTransition} from "react-transition-group";
import Welcome from "./components/Welcome.jsx";

const App = () => {
    const [isWelcome, setIsWelcome] = React.useState(true)

    function handleStartButton() {
        setIsWelcome(false)
    }


    return (
        <main>
            <CSSTransition in={isWelcome} timeout={300} classNames="fadeout" unmountOnExit>
                <Welcome isWelcome={isWelcome} handleStartButton={handleStartButton}/>
            </CSSTransition>

            <Quiz/>

        </main>
    );
};

export default App;
