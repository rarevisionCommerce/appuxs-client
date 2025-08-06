import Hero from "../Components/Hero.jsx";
import Services from "../Components/Services.jsx";
import Projects from "../Components/Projects.jsx";
import Technologies from "../Components/Technologies.jsx";
import "../../App.css";
import { Helmet } from "react-helmet-async";
import CTA from "../Components/CTA.jsx";
import useTitle from "../Components/useTitle.jsx";

function Home() {
  useTitle("Isosoft Softwares")
  return (
    < >
    <Helmet>
      <title>Isosoft Softwares | Best Software Solutions In Kenya</title>
      <meta name="description" content=" Isosoft, a leading software development company founded in 2020. Committed  to delivering innovative digital solutions for businesses and organisations worldwide." />              
      <meta  name="keywords" content="Best Software development company, web development Firm, mobile app developers, UI/UX designers,POS Systems, Kenya software company, custom software solutions, business applications, digital ,software developers transformation" />                        
    </Helmet>

       <Hero />
      <Services />
      <Projects/>
      <CTA/>   
      <Technologies />      
    </>
  );
}

export default Home;