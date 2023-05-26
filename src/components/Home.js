import React from "react";
import { name, city } from "../data/data.js";
import NavBar from "./NavBar.js";

function Home() {
  // update the JSX being returned!
  return (
    <div id="home">
      {/* <NavBar /> */}
      <h1>
        {name} is a Web Developer {city}
      </h1>
    </div>
  );
}

export default Home;
