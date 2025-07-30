import Hero from "../Components/Hero.jsx";
import Services from "../Components/Services.jsx";
import Projects from "../Components/Projects.jsx";
import Technologies from "../Components/Technologies.jsx";
import "../../App.css";
import CTA from "../Components/CTA.jsx";

function Home() {
  return (
    < >
{/* SEO Meta Elements */}
  <div className="hidden">
      <span itemProp="description">
          Learn about Isosoft, a leading software development company founded in 2020. Discover our mission, culture, 
          team of expert developers, and commitment to delivering innovative digital solutions for businesses worldwide.
      </span>
      <span itemProp="keywords">
          about Isosoft, software development company, web development team, mobile app developers, UI/UX designers, 
          Kenya software company, custom software solutions, business applications, digital transformation
      </span>
      <span itemProp="name">About Isosoft - Software Development Company</span>
      <span itemProp="headline">About Isosoft - Transforming Ideas into Digital Solutions</span>
      <span itemProp="about">
          Professional software development company specializing in web applications, mobile apps, and custom business solutions. 
          Founded by passionate developers with expertise in modern technologies and systematic development approaches.
      </span>
      <span itemProp="audience">
          Businesses, startups, entrepreneurs, and organizations seeking reliable software development partners and digital solutions
      </span>
      <meta name="description" content="Discover Isosoft - a dedicated software development company founded in 2020. Learn about our expert team, innovative solutions, and commitment to transforming business ideas into impactful digital products." />
      <meta name="keywords" content="about Isosoft, software development company, web development, mobile apps, UI/UX design, custom software solutions, Kenya developers, business applications" />
      <meta property="og:title" content="About Isosoft - Leading Software Development Company" />
      <meta property="og:description" content="Founded in 2020 by passionate developers, Isosoft specializes in transforming business ideas into innovative software solutions. Discover our story, values, and expertise." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Isosoft | Software Development Experts" />
      <meta name="twitter:description" content="Learn about our journey, team, and commitment to delivering exceptional software solutions for businesses worldwide." />
  </div>
       <Hero />
      <Services />
      <Projects/>
      <CTA/>   
      <Technologies />      
    </>
  );
}

export default Home;