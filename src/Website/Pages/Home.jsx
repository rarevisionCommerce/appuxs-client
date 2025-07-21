import React from "react";
import Hero from "../Components/Hero.jsx";
import Services from "../Components/Services.jsx";
import Projects from "../Components/Projects.jsx";
import Technologies from "../Components/Technologies.jsx";
import Estimate from "../Components/Estimate.jsx";
import "../../App.css";

function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Projects />
      <Technologies />
      <div id="estimate">
        <Estimate />
      </div>
    </main>
  );
}

export default Home;