import Spring from "../../assets/Spring.jpg"
import Dash1 from "../../assets/Dash1.jpg"
import Dash2 from "../../assets/Dash2.jpg"
import Dash3 from "../../assets/Dash3.jpg"
import Bafrica from "../../assets/Bafrica.jpg"
import Agape from "../../assets/Agape.PNG"
import Pearl from "../../assets/Pearl.PNG"
import Febwin from "../../assets/Febwin.PNG"
import Isosales from "../../assets/Isosales.PNG"
import { useState, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async"
import { 
  ArrowRight, 
  ExternalLink, 
  Building2, 
  Clock, 
  Users, 
  Cpu,
  CheckCircle,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import CTA from "../Components/CTA";
import { FaWhatsapp } from "react-icons/fa"
import useTitle from "../Components/useTitle"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

// Counter hook for animated numbers
const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start]);

  return [count, ref];
};

// Counter component
const AnimatedCounter = ({ end, duration, suffix = "", prefix = "", icon: Icon }) => {
  const [count, ref] = useCounter(end, duration);
  
  return (
    <div ref={ref} className="group">
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400/30">
        <div className="flex items-center justify-center ">
          <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 p-3 rounded-full group-hover:from-yellow-400/30 group-hover:to-yellow-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Icon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl md:text-2xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
            {prefix}{count}{suffix}
          </div>
          <div className="text-gray-300 text-sm text-nowrap font-medium group-hover:text-gray-200 transition-colors duration-300">
            {end === 20 && "Projects Delivered"}
            {end === 150 && "Working Hours"}
            {end === 500 && "Client Meetings"}
            {end === 15 && "Technologies Applied"}
          </div>
        </div>
      </div>
    </div>
  );
};

// Project card component
const ProjectCard = ({ image, title, description, link, layout = "standard" }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (layout === "featured") {
    return (
      <div className="bg-gradient-to-br from-white to-gray-50/50  rounded-xl container overflow-hidden   transition-all duration-500 group border border-dark/10 hover:border-yellow-200" >
        <div className="flex flex-col lg:flex-row h-full justify-center items-center">
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="object-cover h-64 w-full transition-transform duration-700 "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-black/30 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-transparent to-purple-500/0 group-hover:from-yellow-400/10 group-hover:to-purple-500/10 transition-all duration-700" />
          </div>
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-secondary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                {description}
              </p>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-dark/10 hover:bg-gradient-to-r from-yellow-400 to-yellow-500  text-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300 group/btn"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:rotate-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (layout === "dashboard") {
    return (
    <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-lg overflow-hidden transition-all duration-500  border border-dark/10 hover:border-yellow-200 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-transparent to-purple-500/0 group-hover:from-yellow-400/10 group-hover:to-purple-500/10 transition-all duration-700" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-300">
            <ExternalLink className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className=" group inline-flex items-center border border-dark/10 gap-2 hover:bg-gradient-to-r from-green-400 to-green-500  text-dark hover:text-light px-6 py-3 rounded-lg font-semibold transition-all duration-300  hover:shadow-sm group/btn w-full justify-center"
        >  <FaWhatsapp className="text-green-500 group-hover:text-white h-6 w-6"/>
          <span>WhatsApp for Demos</span>
          
        </a>
      </div>
    </div>
  );
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-lg overflow-hidden transition-all duration-500 group border border-dark/10 hover:border-yellow-200 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-transparent to-purple-500/0 group-hover:from-yellow-400/10 group-hover:to-purple-500/10 transition-all duration-700" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-300">
            <ExternalLink className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center border border-dark/10 gap-2 hover:bg-gradient-to-r from-yellow-400 to-yellow-500  text-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300  hover:shadow-sm group/btn w-full justify-center"
        >
          <span>Visit Website</span>
          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:rotate-12" />
        </a>
      </div>
    </div>
  );
};

function Projects() {
  const projects = [
    
    
    
    {
      image: Dash1,
      title: "Property Management System",
      description: "Comprehensive Dashboard that allows the bussiness owner to control the inventory of their properties.",
      link: "https://wa.me/+1 (256) 305-3000?text=I want to see the property management  system demos",
      layout: "dashboard"
    },
    
    
    {
      image: Dash2,
      title: "Retail & Shop Management ERP System",
      description: "Comprehensive System that allows allows shop owner to manage their shop inventory like sales,stock, revenue deficiets and much more.",
     link: "https://wa.me/+1 (256) 305-3000?text=I want to see the retail and shop management ERP system demos",
      layout: "dashboard"
    },
    
    
    
    {
      image: Dash3, 
      title: "Custom management systems",
      description: "A management system that is tailor-made to the owners bussiness needs to automate and ease the workflow.",
      link: "https://wa.me/+1 (256) 305-3000?text=I want to see the custom management system demos",
      layout: "dashboard"
      
    },
    {
      image: Pearl,
      title: "Pearl Apartments",
      description: "An Accomodation platform that offers Executive rooms feature premium amenities such as spacious layouts, high-end furnishings, and exclusive access to executive lounges.",
      link: "https://pearlapartments.co.ke/",
      layout: "featured"
    },
    
    
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="flex flex-col">
      <Header/>
      <Helmet>
        <title>Projects Showcase | Appuxs LLC</title>
        <meta name="description" content=" Isosoft Softwares has gain a positive reputation of delivering the best software solutions and have managed to accomplish 20+ projects.Here are some of the projects accomplished" />              
        <meta  name="keywords" content="software projects, Portfolio Showcase, Accomplished Projects , UI UX design, 
          Agape Smart Solutions, Pearl Apartments, Febwin Property Management, TapNserve"/>                        
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-28 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            
            {/* Content Section */}
            <div className="lg:space-y-8 space-y-5 lg:py-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  <span className="text-sm font-semibold tracking-wider uppercase">Our Portfolio</span>
                </div>
                
                <h1 className="text-xl lg:text-4xl font-bold text-white leading-tight">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 ">Projects</span>
                </h1>
                
                <p className="md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Since Appuxs founding, we've maintained our moral commitment to deliver highest-quality IT services. Our talented teams of software development experts prioritize customer satisfaction above all else.
                </p>
              </div>

              <button 
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold md:text-lg transition-all duration-300 hover:scale-105 "
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Stats Section */}
            <div className="lg:pl-10 pb-3">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                  <TrendingUp className="w-8 h-8 text-yellow-400 animate-pulse" />
                  Our Impact
                </h2>
                <p className="text-gray-400">Delivering excellence through innovation</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <AnimatedCounter end={20} duration={2500} suffix="+" icon={CheckCircle} />
                <AnimatedCounter end={150} duration={3000} suffix="+" icon={Clock} />
                <AnimatedCounter end={500} duration={2800} suffix="+" icon={Users} />
                <AnimatedCounter end={15} duration={2200} prefix="" suffix="" icon={Cpu} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50">
        <div className="container mx-auto px-2 sm:px-3 lg:px-5 xl:px-7">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
              <Building2 className="w-6 h-6 animate-pulse" />
              <span className="text-sm font-semibold tracking-wider uppercase">Portfolio Showcase</span>
            </div>
            <div className="flex flex-col gap-3 mb-3 items-center justify-start">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 ">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Accomplishments</span>
            </h2>
            
            </div>
            
            <p className="md:text-lg text-gray-600 container mx-auto">
              Discover our latest projects that showcase our expertise in delivering cutting-edge solutions across various industries.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {/* Featured Project */}
            <div className="mb-12">
              <ProjectCard {...projects[3]} />
            </div>
            
            {/* Regular Projects Grid */}
            <div className="grid md:grid-cols-2 2xl:grid-cols-3  gap-8 2xl:gap-14">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
             
            </div>
          </div>
        </div>
      </section>
      
      <CTA/>
      <Footer/>
    </main>
  );
}

export default Projects;