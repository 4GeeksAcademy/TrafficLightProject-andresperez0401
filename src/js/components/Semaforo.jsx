import React from "react";
import { useEffect, useState } from "react";


 export function Semaforo() {

    //Estado que almacena el color del semaforo, inicia sin color
    const [color, setColor] = useState("");
    const [colorMorado, setColorMorado] = useState(false);

    //El use Effect solo se ejcuta cuando se renderiza el componente por primera vez
    //Que pasa, como esta escuchando el ebento de un boto, ese evento esta ligado directamente al DOM
    //Por ende cada vez que se haga el click en el boton, se va a ejecutar el evento con la funcion de alternar colores
    //Entonces independientemente de que el useEffect, no escuche directamente cambios
    //El DOM escucha el cambio en el evento del boton y ejecuta la funcion que esta dentro del useEffect.
    //Es importante remover el evento despues para que no se creen multiples instancias cuando se 
    //renderiza el componente nuevamente
    useEffect(() => {

        //Obtenemos el bton alternar y le agregamo el event listener
        let botton = document.getElementById("botonAlternar");
        botton.addEventListener("click",alternarColores);

        //Obtenemos el boton morado
        let botonMorado = document.getElementById("botonMorado");
        if (botonMorado) {
            botonMorado.innerText = colorMorado ? "Desactivar Morado" : "Activar Morado";
        }
       
        //Le agregamos la funcion para manejar lo que se colocara y hara una vez se presione el boton
        const handleClickMorado = () => {
            setColorMorado(prevMorado => !prevMorado);
        };

        //Le agregamos el evento al boton morado
        botonMorado.addEventListener("click", handleClickMorado);

        return () => {
            botton.removeEventListener("click", alternarColores);
            botonMorado.removeEventListener("click", handleClickMorado);
        }

    }, [colorMorado]);

    //esta funcion alterna entre los colores del semaforo
    function alternarColores () {
        setColor(prevColor => {
            let colors = ["red", "yellow", "green"];

            if (colorMorado) {colors.push("purple");}

            let index = (colors.indexOf(prevColor) + 1) % colors.length;
            return colors[index];
        })
    }

    return  <div className="cajaSemaforo">
                <div
                 className={color == "red" ? "redLightSelected" : "redLight"}
                 id="red" 
                 onClick={() => setColor("red")}
                 ></div>

                <div 
                className={color == "yellow" ? "yellowLightSelected" : "yellowLight"}
                id="yellow"
                onClick={() => setColor("yellow")}
                ></div>

                <div className={color == "green" ? "greenLightSelected" : "greenLight"}
                id="green" 
                onClick={() => setColor("green")}
                ></div>

                {colorMorado && (<div className={color == "purple" ? "purpleLightSelected" : "purpleLight"}
                id="purple" 
                onClick={() => setColor("purple")}
                ></div> )}
                
            </div>
 }