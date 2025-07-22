import { ArrowRight } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { 
  FiArrowRight, 
  FiPhone, 
  FiMail, 
  FiMessageCircle,
  FiStar,
  FiUsers,
  FiTrendingUp
} from "react-icons/fi";

const CTA = () => {
  return (
    <section className="relative bg-primary overflow-hidden py-10">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(250, 204, 21, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 mb-8">
            <FiStar className="" />
            Ready to Transform Your Business?
          </div>

          {/* Main Headlines */}
          <h2 className="text-lg lg:text-2xl font-bold text-white mb-8 leading-tight">
            Let's Build Something
            <span className="block text-yellow-400">Amazing Together</span>
          </h2>

          <p className="text-sm max-w-3xl  text-slate-300 leading-relaxed mx-auto mb-6">
            Join <strong>hundreds of satisfied clients</strong> who have transformed their businesses 
            with our cutting-edge software solutions. Your success story starts with a single conversation.
          </p>

          {/* Stats Bar */}
          <div className="grid  grid-cols-3 gap-8 max-w-3xl mx-auto mb-2">
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400/20 rounded-full mx-auto mb-4">
                <FiUsers className="text-2xl text-yellow-400" />
              </div>
              <div className="text-xl font-bold text-light mb-2">500+</div>
              <p className="text-light">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-secondary/20 rounded-full mx-auto mb-4">
                <FiTrendingUp className="text-2xl text-yellow-400" />
              </div>
              <div className="text-xl font-bold text-white mb-2">98%</div>
              <p className="text-light">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-400/20 rounded-full mx-auto mb-4">
                <FiStar className="text-2xl text-yellow-400" />
              </div>
              <div className="text-xl font-bold text-light mb-2">24/7</div>
              <p className="text-light">Support</p>
            </div>
          </div>

        </div>

        {/* CTA Cards Grid */}
        <div className="flex justify-center items-center gap-20">
			<button className="p-3 bg-secondary hover:scale-105 text-lg rounded-lg font-semibold inline-flex gap-2 ">Get Started <ArrowRight/> </button>
			<button className="bg-light/20 text-lg opacity-50 p-3 border-2 hover:border-green-500 hover:text-green-500 border-light text-light rounded-lg inline-flex hover:scale-105 hover:shadow-sm hover:shadow-green-500 items-center gap-3"> <FaWhatsapp/> WhatsApp</button>
		</div>
        {/* Trust Indicators */}
        

      </div>

      {/* Decorative corner elements
	  <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-yellow-400/30 rounded-tl-2xl"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-yellow-400/30 rounded-tr-2xl"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-yellow-400/30 rounded-bl-2xl"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-yellow-400/30 rounded-br-2xl"></div> */}
      

    </section>
  );
};

export default CTA;