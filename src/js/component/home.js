import React from "react";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./cards.js";
import { NavBar } from "./navbar.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
    return (
        <div className="text-center mt-5">
            <Jumbotron />
            <Cards />
            <NavBar />

        </div>
    );
}
