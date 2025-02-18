import React from "react";
import { useEffect, useState } from "react";


 export function Semaforo2() {

    //Estado que almacena el color del semaforo, inicia sin color
    const [color, setColor] = useState("");
    const [colorMorado, setColorMorado] = useState(false);


     // Al montar el componente, se llama a alternarColores para fijar el primer color
    useEffect(() => {
        alternarColores();
    }, []);

    // Cada vez que cambie el estado (color o colorMorado), se renderiza el semáforo
    useEffect(() => {
        renderizarSemaforo();

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

    }, [color, colorMorado]);


    function renderizarSemaforo() {	

        let divPadre = document.getElementById("cajaSemaforo");

        //por si no lo consigue, no arroje error
        if(!divPadre) return;

        while (divPadre.firstChild) {
            divPadre.removeChild(divPadre.firstChild);
        }

        //se crean las luces basicas del semaforo
        let divRojo = document.createElement("div");
        let divAmarillo = document.createElement("div");
        let divVerde = document.createElement("div");

        //se asignan los id a los divs
        divRojo.id = "red";
        divAmarillo.id = "yellow";
        divVerde.id = "green";

        //se asignan las clases a los divs
        divRojo.className = color == "red" ? "redLightSelected" : "redLight";
        divAmarillo.className = color == "yellow" ? "yellowLightSelected" : "yellowLight";
        divVerde.className = color == "green" ? "greenLightSelected" : "greenLight";

        //se asignan los eventos a los divs, para cuando se toquen los botones 
        divRojo.addEventListener("click", () => setColor("red"));
        divAmarillo.addEventListener("click", () => setColor("yellow"));
        divVerde.addEventListener("click", () => setColor("green"));

        // Agregar las luces al contenedor
        divPadre.appendChild(divRojo);
        divPadre.appendChild(divAmarillo);
        divPadre.appendChild(divVerde);

        // Si el color morado está activado, agregar la luz púrpura
        if (colorMorado) {
            const divMorado = document.createElement("div");
            divMorado.id = "purple";
            divMorado.className = color === "purple" ? "purpleLightSelected" : "purpleLight";
            divMorado.addEventListener("click", () => {
                setColor("purple")});
            divPadre.appendChild(divMorado);
        }
    }

    //esta funcion alterna entre los colores del semaforo
    function alternarColores () {
        setColor(prevColor => {
            let colors = ["red", "yellow", "green"];

            if (colorMorado) {colors.push("purple");}

            let index = (colors.indexOf(prevColor) + 1) % colors.length;
            return colors[index];
        })
    }

    

    return  <div className="cajaSemaforo" id="cajaSemaforo">  
            </div>
 }