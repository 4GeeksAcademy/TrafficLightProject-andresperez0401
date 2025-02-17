import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Semaforo } from "./Semaforo";

//create your first component
const Home = () => {
	return (
		<div className="mainDiv">
			<div className="semaforo">
				<div className="poste">
				</div>
				<Semaforo />
			</div>
            
		</div>
	);
};

export default Home;