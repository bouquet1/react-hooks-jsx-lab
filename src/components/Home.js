import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id="home" style={{ color: "firebrick" }}>
      <h1>
        {name} is a Web Developer {city}
      </h1>
    </div>
  );
}

export default Home;
