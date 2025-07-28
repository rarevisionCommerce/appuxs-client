import React, { useEffect, useState } from "react";
import { FiArrowRight, FiAward, FiClock } from "react-icons/fi";
import Photo1 from "../../assets/Lemka.jpg";
import Photo2 from "../../assets/Spring.jpg";
import Photo3 from "../../assets/Bafrica.jpg";
import Photo4 from "../../assets/agape1.jpg";
import { NavLink } from "react-router-dom";



// Projects images array
const images = [Photo1, Photo2, Photo3, Photo4];

function ProjectsSection() {
  // Image slider functionality
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="bg-slate-100 py-10">
      <div className="container mx-auto md:px-6 px-2 ">
        
        {/* Section Header */}
        <div className="mb-7">
          <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-3 ">
            Our <span className="text-yellow-500">Projects</span>
          </h2>
          <div className="h-[5px] rounded-full w-28 mb-3 bg-gradient-to-r from-transparent to-dark"></div>
         
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Description */}
            <div>
             
              <p className=" text-slate-700 leading-relaxed">
                Due to our high quality and affordable services, we have earned a very good 
                reputation in the IT market and luckily we have constructed a solid line of loyal clients.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="items-center flex flex-col gap-1 p-4 bg-white rounded-xl shadow-md border border-slate-200">
                <div className="p-3 inline-flex items-center bg-yellow-500 rounded-full">
                  <FiAward className="text-2xl text-white" />
                </div>
                <div className="md:text-4xl text-2xl font-bold text-yellow-500 ">20+</div>
                <p className="text-slate-700 text-nowrap font-semibold">Projects Delivered</p>
              </div>
              
              <div className="flex flex-col items-center  gap-1 p-4 bg-white rounded-xl shadow-md border border-slate-200">
                <div className="p-3 inline-flex bg-yellow-500 rounded-full">
                  <FiClock className="text-2xl text-white" />
                </div>
                <div className="md:text-4xl text-2xl font-bold text-yellow-500 ">5+</div>
                <p className="text-slate-700 text-nowrap font-semibold">Years of Experience</p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <NavLink 
                to="/projects" 
                className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 transition-colors duration-300 px-8 py-4 text-slate-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View All Projects
                <FiArrowRight className="text-lg" />
              </NavLink>
            </div>

          </div>

          {/* Right Content - Image Slider */}
          <div className="relative">
            
            {/* Main Image Container */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Images */}
              <div className="relative w-full h-full">
                <img
                  src={images[0]}
                  alt="Project 1"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <img
                  src={images[1]}
                  alt="Project 2"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <img
                  src={images[2]}
                  alt="Project 3"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentImageIndex === 2 ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <img
                  src={images[3]}
                  alt="Project 4"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentImageIndex === 3 ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  <button
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === 0 ? 'bg-yellow-500 scale-125' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(0)}
                  ></button>
                  <button
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === 1 ? 'bg-yellow-500 scale-125' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(1)}
                  ></button>
                  <button
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === 2 ? 'bg-yellow-500 scale-125' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(2)}
                  ></button>
                  <button
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === 3 ? 'bg-yellow-500 scale-125' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(3)}
                  ></button>
                </div>
              </div>

            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-600/10 rounded-full blur-2xl"></div>

          </div>

        </div>
      </div>
      
    </section>
  );
}

export default ProjectsSection;