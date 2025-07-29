import Hero from "../Components/Hero.jsx";
import Services from "../Components/Services.jsx";
import Projects from "../Components/Projects.jsx";
import Technologies from "../Components/Technologies.jsx";
import "../../App.css";
import CTA from "../Components/CTA.jsx";

function Home() {
  return (
    < >
       <Hero />
      <Services />
      <Projects/>
      <CTA/>   
      <Technologies /> 
     
    </>
  );
}

export default Home;