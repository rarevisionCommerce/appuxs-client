import React from "react";
import { Link } from "react-scroll";
import BizMgnt from "./BizMgnt";
import BulkSMS from "./BulkSMS";
import MobileApp from "./MobileApp";
import WebDesign from "./WebDesign";
import WebDev from "./WebDev";
import CTA from "../Components/CTA";
import QuikeLinks from "../Components/QuikeLinks";
import Footer from "../Components/Footer";

const Services = () => {
  return (
    <>
      <header className="relative py-5  bg-slate-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center gap-3 items-center px-4 pt-16">
          
          {/* Main Title Section */}
          <div className="flex items-center flex-col gap-3  max-w-5xl">
            <div className="">
				
              <span className="inline-flex gap-2 items-center px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 ">
               <div className="bg-secondary h-2 w-2 rounded-full"></div> Professional Software Solutions
              </span>
            </div>
            
            <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            
            <div className="w-40 ml-[-50px] h-1 bg-gradient-to-r from-transparent rounded-2xl to-yellow-400  "></div>
            
            <p className="lg:text-lg text-light leading-relaxed max-w-3xl mx-auto">
              Transforming businesses through cutting-edge technology solutions. 
              We specialize in <strong>custom software development</strong>, delivering  
               <em> scalable</em> and <em>innovative</em> digital experiences that drive growth 
              and competitive advantage in today's digital landscape.
            </p>
            
            {/* SEO Meta Elements */}
            <div className="hidden">
              <span itemProp="description">
                Professional software development company offering web development, mobile apps, 
                UI/UX design, business management solutions, and bulk SMS integration services
              </span>
              <span itemProp="keywords">
                software development, web development, mobile app development, UI UX design, 
                business solutions, bulk SMS, Kenya software company
              </span>
            </div>
          </div>

          {/* Glassmorphic Service Navigation */}
          <div className="relative my-3">
            {/* Main Navigation Container */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-4 shadow-2xl">
              
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Explore Our Expertise
              </h3>
              
              {/* Service Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                
                <Link
                  to="webdev"
                  smooth={true}
				  offset={-30}
                  duration={800}
                 className="group flex flex-col items-center p-3 rounded-lg  cursor-pointer backdrop-blur-sm hover:scale-105 bg-blue-600 text-light duration-300 font-semibold"
                >
                  
                  Web Development
                </Link>

                <Link
                  to="webdesign"
                  smooth={true}
				   offset={-30}
                  duration={800}
                  className="group flex flex-col items-center p-3 rounded-lg  cursor-pointer backdrop-blur-sm hover:scale-105 bg-purple-600 text-light duration-300 font-semibold"
                >
                  
                  Web Design
				</Link>

                <Link
                  to="mobileapp"
                  smooth={true}
				   offset={-30}
                  duration={800}
                 className="group flex flex-col items-center p-3 rounded-lg  cursor-pointer backdrop-blur-sm hover:scale-105 bg-pink-600 text-light duration-300 font-semibold"
                >
                  
                  Mobile Apps
                </Link>

                <Link
                  to="bizmgnt"
                  smooth={true}
				   offset={-30}
                  duration={800}
                 className="group flex flex-col items-center p-3 rounded-lg  cursor-pointer backdrop-blur-sm hover:scale-105 bg-green-600 text-light duration-300 font-semibold"
                >
                  
                 Business Solutions
                </Link>

                <Link
                  to="bulksms"
				   offset={-30}
                  smooth={true}
                  duration={800}
                  className="group flex flex-col items-center p-3 rounded-lg  cursor-pointer backdrop-blur-sm hover:scale-105 bg-red-600 text-light duration-300 font-semibold"
                >
                 
                 Bulk SMS
                </Link>

              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-400/70 rounded-tl-lg"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/80 rounded-tr-lg"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-400/90 rounded-bl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-400/80 rounded-br-lg"></div>
          </div>

         
          

        </div>

       
        

      </header>

      <div id="webdev"><WebDev/></div>
      <div id="webdesign"><WebDesign/></div>
      <div id="mobileapp"><MobileApp/></div>
      <div id="bizmgnt"><BizMgnt/></div>
      <div id="bulksms"><BulkSMS/></div>
	  <CTA/>
	  <QuikeLinks/>
	  <Footer/>
    </>
  );
};

export default Services;