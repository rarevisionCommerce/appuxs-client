import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import Hero from "../../assets/Dev2.jpg";
import { CheckCircle, Clock, Cpu, Verified } from "lucide-react";

// Typing animation texts
const texts = ["Web Development", "AU/AX Design", "Mobile App Development", "Business Automation", "Bulk SMS Integration"];

function HeroSection() {
  // Title animation functionality
  useEffect(() => {
    const company = document.getElementById('Company');
    const Developers = document.getElementById('Developers');
    const portrait = document.getElementById('portrait');
    const stats = document.getElementById('stats');
    
    if (company) company.classList.add('slide');
    if (Developers) Developers.classList.add('slide-in');
    if (portrait) portrait.classList.add('slide-pt');
    if (stats) stats.classList.add('slide-in');
  }, []);

  // Services typing animation
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const currentIndexText = texts[loopNum % texts.length];
      if (isDeleting) {
        setCurrentText(currentIndexText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentText(currentIndexText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }

      if (!isDeleting && currentIndex === currentIndexText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, currentIndex]);

  return (
    <section className="min-h-screen bg-primary bg-homeBg aspect-auto bg-cover bg-center bg-no-repeat py-2 relative">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/70"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between lg:mb-6 pt-12 lg:px-16 px-3 max-w-7xl mx-auto">
        
        {/* Left Content */}
        <div className="flex-1 lg:pr-12 mb-12">
          
          {/* Company Title */}
          <div id="Company" className="mb-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-secondary mb-2">
              Isosoft Softwares
            </h1>
            <p className=" text-light leading-relaxed">
              Isosoft is a company that is comprised of a qualified team of talented, 
              passionate and skilled developers and designers that have the zeal to deliver 
              the best and most cost-efficient tech services to our clients.
            </p>
          </div>

          {/* Services Animation - Mobile */}
          <div className=" border border-secondary p-2 flex items-center lg:mb-4 rounded-xl">
            <h2 className="text-lg font-bold  text-secondary ">
              Services: 
              <span className="text-light ml-2">{currentText}</span>
              <span className="blinking-cursor text-secondary">|</span>
            </h2>
          </div>

          {/* Description */}
          <div id="Developers" className="mb-5 lg:mb-7">
            <p className=" text-light leading-relaxed">
              Isosoft's team of software developers will create long-term value with our 
              excellent software development services. 
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <Link 
              to="projects" 
              smooth={true} 
              duration={1000} 
              className="bg-secondary hover:bg-secondary transition-colors duration-300 px-7 py-2 text-primary font-semibold rounded-lg text-center cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Projects
            </Link>
            <Link 
              to="estimate" 
              smooth={true} 
              duration={1000}
              className="bg-transparent border-2 border-secondary hover:bg-secondary hover:text-primary transition-all duration-300 px-7 py-2 text-secondary font-semibold rounded-lg text-center cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Estimate
            </Link>
          </div>
        </div>

        {/* Right Content - Desktop Only */}
        <div id="portrait" className="hidden lg:flex flex-col  items-center flex-shrink-0">            

          {/* Hero Image */}
          <div  className="relative p-3 bg-gradient-to-br from-green-100 via-blue-200 to to-violet-300  rounded-3xl">
            <div className="w-full h-full  rounded-3xl overflow-hidden shadow-2xl ">
              <img 
                src={Hero} 
                alt="Development Hero" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-600/20 rounded-full blur-xl"></div>
          </div>
        </div>
		
      </div>
<div id="stats" className="md:flex grid grid-cols-2 items-center  justify-center  md:gap-8 gap-3 md:px-10 px-2  "> 
	<div className="flex flex-col gap-1 rounded-xl text-light items-center justify-center bg-blue-600 py-2 px-4">
		<div className="p-1 bg- text-secondary bg-light rounded-full"><CheckCircle /> </div>
		<p className="font-bold text-lg">20+</p>
		<span className="font-semibold">Projects Delivered</span>
	</div>
	<div className="flex flex-col gap-1 rounded-xl text-light items-center justify-center bg-purple-700 py-2 px-6">
		<div className="p-1 bg- text-secondary bg-light rounded-full"><Clock className=""/> </div>
		<p className="font-bold text-lg">2000+</p>
		<span className="font-semibold">Working Hours</span>
	</div>
	<div className="flex flex-col gap-1 rounded-xl text-light items-center justify-center bg-pink-600 py-2 px-4">
		<div className="p-1 bg- text-secondary bg-light rounded-full"><Cpu className=""/> </div>
		<p className="font-bold text-lg">10+</p>
		<span className="font-semibold text-nowrap">Technologies Used</span>
	</div>
	<div className="flex flex-col gap-1 rounded-xl text-light items-center justify-center bg-red-600 py-2 px-4">
		<div className="p-1 bg- text-secondary bg-light rounded-full"><Verified className=""/> </div>
		<p className="font-bold text-lg">Guarnateed</p>
		<span className="font-semibold">Quality Assured</span>
	</div>
	
</div>

	  
    </section>
  );
}

export default HeroSection;