import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export function Cards() {
	return (
		<div className="col-3 card-deck">
			<div className="card">
				<img
					className="card-img-top"
					src={rigoImage}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div className="card-footer text-center">
					<button type="button" className="btn btn-primary">
						Find Out More!
					</button>
				</div>
			</div>
		</div>
	);
}
