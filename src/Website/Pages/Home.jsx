import React from "react";
import Hero from "../Components/Hero.jsx";
import Services from "../Components/Services.jsx";
import Projects from "../Components/Projects.jsx";
import Technologies from "../Components/Technologies.jsx";
import Estimate from "../Components/Estimate.jsx";
import "../../App.css";
import CTA from "../Components/CTA.jsx";
import Header from "../Components/Header.jsx";

function Home() {
  return (
    <main className="overflow-hidden">
       <Hero />
      <Services />
      <Projects />
      <CTA/>
      
      <div id="estimate">
        <Estimate />
      </div>
    </main>
  );
}

export default Home;