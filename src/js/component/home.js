import React from "react";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";
import { NavBar } from "./navbar.js";
import { Footer } from "./footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />
			<div className="row justify-content-around">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}
