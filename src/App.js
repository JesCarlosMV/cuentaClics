import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"
import Boton from "./componentes/boton"
import Contador from "./componentes/contador"
import { useState } from 'react';

function App() {

  /*el HOOK useState es un array de 2 ELEMENTOS:
    (1º elemento) - numClics es el ESTADO 
    (2º elemento) - setNumClics es la FUNCION QUE ACTUALIZA EL ES ESTADO

     !useState es el ESTADO INICIAL! */

  const [numClics, setNumClics] = useState(0)


  const manejarClic = () => {
    setNumClics(numClics + 1);

  }
  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto="clic" esBotonDeClic={true} manejarClic={manejarClic}
        />
        <Boton texto="reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
