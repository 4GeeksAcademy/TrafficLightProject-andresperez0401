import React from "react";
import { useEffect, useState } from "react";


 export function Semaforo() {

    //Estado que almacena el color del semaforo, inicia sin color
    const [color, setColor] = useState("");


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
            </div>
 }