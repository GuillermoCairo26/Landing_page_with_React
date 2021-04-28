import React from "react";

//create your first component
export function Jumbotron() {
	return (
		<div className="contenedor">
			<div class="jumbotron">
				<h1 class="display-4">A Warm Welcome!</h1>
				<p class="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua ut enim ad minim veniam, quis nostrud exercitation
					ullamco.
				</p>
				<a class="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</div>
		</div>
	);
}
