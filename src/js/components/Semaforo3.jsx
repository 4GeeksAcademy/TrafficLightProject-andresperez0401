import React from "react";
import { useEffect, useState } from "react";

export function Semaforo3() {
  //Estado que almacena el color del semaforo, inicia sin color
  const [color, setColor] = useState("");
  const [colorMorado, setColorMorado] = useState(false);

  //esta funcion alterna entre los colores del semaforo
  function alternarColores() {
    setColor((prevColor) => {
      let colors = ["red", "yellow", "green"];

      if (colorMorado) {
        colors.push("purple");
      }

      let index = (colors.indexOf(prevColor) + 1) % colors.length;
      return colors[index];
    });
  }

  const handleClickMorado = () => {
    setColorMorado((prevMorado) => !prevMorado);
  };

  return (
    <div className="cajaSemaforo">
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

      <div
        className={color == "green" ? "greenLightSelected" : "greenLight"}
        id="green"
        onClick={() => setColor("green")}
      ></div>

      {colorMorado && (
        <div
          className={color == "purple" ? "purpleLightSelected" : "purpleLight"}
          id="purple"
          onClick={() => setColor("purple")}
        ></div>
      )}

      {/* en este caso agregamos los botones directamente en el componente */}
      <div className="buttonAlternate">
        <button
          className="btn btn-primary"
          id="botonAlternar"
          onClick={alternarColores}
        >
          Alternar
        </button>
      </div>
      <button
        className="btn btn-primary"
        id="botonMorado"
        onClick={handleClickMorado}
      >
        {colorMorado ? "Desactivar Morado" : "Activar Morado"}
      </button>
    </div>
  );
}
