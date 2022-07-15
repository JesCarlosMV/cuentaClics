import React from "react";
import "./boton.css"


/* esBotonDeClic - es un Booleano para darle una clase u otra segun true o false
   manejarClic   - es un Funcion para el evento onClick de cada boton, 
   onClick       - como App.js IMPORTA este archivo, desde estos botones se puede llamar a la funcion
                   que recibe este componente (manejarClic)   */


function Boton({ texto, esBotonDeClic, manejarClic }) {
    return (
        <button
            className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton