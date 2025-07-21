import Footer from "../Components/Footer";
import QuikeLinks from "../Components/QuikeLinks";
import Spring from "../../assets/Spring.jpg"
import Lemka from "../../assets/Lemka.jpg"
import Bafrica from "../../assets/Bafrica.jpg"
import Agape from "../../assets/agape1.jpg"
import { Link, animateScroll as scroll } from 'react-scroll'
import React, { useState, useEffect, useRef } from 'react';
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
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex items-center justify-center mb-3">
          <div className="bg-yellow-400/20 p-3 rounded-full group-hover:bg-yellow-400/30 transition-colors duration-300">
            <Icon className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400 mb-1">
            {prefix}{count}{suffix}
          </div>
          <div className="text-gray-300 text-sm font-medium">
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
      <div 
        className="bg-white lg:ml-20  rounded-3xl max-w-5xl overflow-hidden shadow-md transition-all duration-500 group border border-gray-100" >
        <div className="flex flex-col lg:flex-row h-full justify-center items-center">
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="object-cover h-64 w-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-black/30 transition-all duration-500" />
          </div>
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {description}
              </p>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
              >
                <span>Visit Project</span>
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden shadow-sm  transition-all duration-500 group border border-gray-100">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent   " />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
            <ExternalLink className="w-4 h-4 text-yellow-600" />
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold  transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn w-full justify-center"
        >
          <span>Visit Project</span>
          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

function Projects() {
  const projects = [
    {
      image: Lemka,
      title: "Lemka Real Estate Management",
      description: "Comprehensive solution designed to automate and streamline real estate operations. Features property listing management, lead management, contract management and more with a user-friendly interface.",
      link: "#"
    },
    {
      image: Bafrica, 
      title: "Builders Africa Platform",
      description: "O2O industrial Internet platform for global real estate, engineering, building materials, equipment and design industry chain connecting businesses worldwide.",
      link: "#"
    },
    {
      image: Spring,
      title: "Springs Hotel Management",
      description: "Comprehensive solution designed to streamline hotel operations. Features front-desk management, room management, booking management, and complete hospitality solutions.",
      link: "#"
    },
    {
      image: Agape,
      title: "Agape Writing Services",
      description: "Ultimate destination for online classes and assignment help. Offering essay writing, expert assignment editing, dissertation writing, and online class assistance.",
      link: "https://agapewritingservice.com/",
      layout: "featured"
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent rotate-12" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Section */}
            <div className="space-y-8 py-2  pt-28">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-semibold tracking-wider uppercase">Our Portfolio</span>
                </div>
                
                <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Projects</span>
                </h1>
                
                <p className="md:text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Since Isosoft's founding, we've maintained our moral commitment to deliver highest-quality IT services. Our talented teams of software development experts prioritize customer satisfaction above all else.
                </p>
              </div>

              <button 
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold md:text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Stats Section */}
            <div className="lg:pl-12 pb-3">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                  <TrendingUp className="w-8 h-8 text-yellow-400" />
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
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
              <Building2 className="w-6 h-6" />
              <span className="text-sm font-semibold tracking-wider uppercase">Portfolio Showcase</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Accomplishments</span>
            </h2>
            <p className="md:text-lg text-gray-600 max-w-3xl mx-auto">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;