import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Semaforo } from "./Semaforo";
import { Semaforo2 } from "./Semaforo2";
import { Semaforo3 } from "./Semaforo3";

//create your first component
const Home = () => {
	return (
		<div className="mainDiv">
			<div className="semaforo">
				<div>
					<div className="poste">
					</div>
					{/* <div className="buttonAlternate">
						<button className="btn btn-primary" id="botonAlternar">Alternar</button>
					</div>
					<button className="btn btn-primary" id="botonMorado">Activar Morado</button> */}
				</div>
				<Semaforo3 />
			</div>
            
		</div>
	);
};

export default Home;