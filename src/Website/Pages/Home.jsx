import Hero from "../Components/Hero.jsx";
import Services from "../Components/Services.jsx";
import Projects from "../Components/Projects.jsx";
import Technologies from "../Components/Technologies.jsx";
import "../../App.css";
import CTA from "../Components/CTA.jsx";

function Home() {
  return (
    <main className="overflow-hidden">
       <Hero />
      <Services />
      <Projects />
      <CTA/>
      
      <div id="estimate">
        <Technologies />
       
      </div>
    </main>
  );
}

export default Home;