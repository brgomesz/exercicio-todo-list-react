import React, { useState } from "react";
import Background from "./components/Background/BackGround";
import Card from "./components/Card/Card";

function App() {
    const [background, setBackground] = useState("imagem-1");

    const toggleBackground = () => {
        setBackground((prevBackground) =>
            prevBackground === "imagem-1" ? "imagem-2" : "imagem-1"
        );
    };

    return ( 
        <div>
            <Background backgroundClass={background}>
                <Card toggleBackground={toggleBackground} />
            </Background>
        </div>
     );
}


export default App;
