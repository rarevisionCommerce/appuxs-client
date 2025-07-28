import { Link } from "react-scroll";
import BizMgnt from "../Components/BizMgnt";
import BulkSMS from "../Components/BulkSMS";
import MobileApp from "../Components/MobileApp";
import WebDesign from "../Components/WebDesign";
import WebDev from "../Components/WebDev";
import CTA from "../Components/CTA";
import PaymentGateways from "../Components/PaymentGateWays";
import POS from "../Components/POS";
import Ecommerse from "../Components/Ecommerse";
import SoftwareConsultation from "../Components/SoftwareConsultation";


const Services = () => {
  return (
    <>
      <header className="relative py-5 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-28 h-28 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-36 h-36 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Additional animated elements for more modern feel */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-bounce delay-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-bounce delay-1500"></div>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col justify-center gap-3 items-center pt-16">
            
            {/* Main Title Section */}
            <div className="flex items-center flex-col gap-3 max-w-4xl mx-auto text-center">
              <div className="">
                <span className="inline-flex gap-2 items-center px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 transition-colors duration-300">
                  <div className="bg-secondary h-2 w-2 rounded-full animate-pulse"></div> 
                  Professional Software Solutions
                </span>
              </div>
              
              <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                Our <span className="text-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Services</span>
              </h1>
              
              <div className="w-28 lg:ml-[-80px] h-1 bg-gradient-to-r from-transparent rounded-2xl to-yellow-400"></div>
              
              <p className="lg:text-lg text-light leading-relaxed max-w-3xl">
                Transforming businesses through cutting-edge technology solutions. 
                We specialize in <strong className="text-yellow-300">custom software development</strong>, delivering  
                <em className="text-blue-300"> scalable</em> and <em className="text-purple-300">innovative</em> digital experiences that drive growth 
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

            {/* Enhanced Glassmorphic Service Navigation */}
            <div className="relative w-full max-w-6xl mx-auto my-3">
              {/* Main Navigation Container */}
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl md:p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/15">
                
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  Explore Our Expertise
                </h3>
                
                {/* Service Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-2 gap-3">
                  
                  <Link
                    to="webdev"
                    smooth={true}
                    offset={-50}
                    duration={800}
                    className="group flex flex-col items-center p-3 text-sm md:text-[16px] rounded-lg cursor-pointer backdrop-blur-sm hover:scale-105 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-light duration-300 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Web Development
                  </Link>

                  <Link
                    to="webdesign"
                    smooth={true}
                    offset={-50}
                    duration={800}
                    className="group flex flex-col items-center p-3  rounded-lg text-sm md:text-[16px] cursor-pointer backdrop-blur-sm hover:scale-105 bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-light duration-300 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Web Design
                  </Link>

                  <Link
                    to="mobileapp"
                    smooth={true}
                    offset={-50}
                    duration={800}
                    className="group flex flex-col items-center p-3 rounded-lg cursor-pointer text-sm md:text-[16px] backdrop-blur-sm hover:scale-105 bg-gradient-to-br from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-light duration-300 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Mobile Apps
                  </Link>

                  <Link
                    to="bulksms"
                    offset={-50}
                    smooth={true}
                    duration={800}
                    className="group flex flex-col items-center p-3 rounded-lg text-sm md:text-[16px] cursor-pointer backdrop-blur-sm hover:scale-105 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-light duration-300 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Bulk SMS
                  </Link>
                  <Link
                    to="payment"
                    offset={-50}
                    smooth={true}
                    duration={800}
                    className="group flex flex-col items-center p-3 rounded-lg text-sm md:text-[16px] cursor-pointer backdrop-blur-sm hover:scale-105 bg-fuchsia-600 text-light duration-300 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                  Payment Gateways
                  </Link>
                  <Link
                    to="pos"
                    offset={-50}
                    smooth={true}
                    duration={800}
                    className="group flex flex-col items-center p-3 rounded-lg text-sm md:text-[16px] cursor-pointer backdrop-blur-sm hover:scale-105 bg-orange-500 hover:from-red-500 hover:to-red-600 text-light duration-300 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    POS Installation
                  </Link>
                  <Link
                    to="ecommerse"
                    offset={-50}
                    smooth={true}
                    duration={800}
                    className="group flex flex-col items-center p-3 rounded-lg text-sm md:text-[16px] cursor-pointer backdrop-blur-sm hover:scale-105 bg-secondary hover:from-red-500 hover:to-red-600 text-light duration-300 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    E-Commerce
                  </Link>

                  <Link
                    to="bizmgnt"
                    smooth={true}
                    offset={-50}
                    duration={800}
                    className="group flex flex-col text-nowrap items-center p-3 rounded-lg cursor-pointer text-sm md:text-[16px] backdrop-blur-sm hover:scale-105 bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-light duration-300 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Business Automation
                  </Link>
                  <Link
                    to="consultation"
                    smooth={true}
                    offset={-50}
                    duration={800}
                    className="group flex flex-col text-nowrap items-center p-3 rounded-lg cursor-pointer text-sm md:text-[16px] backdrop-blur-sm hover:scale-105 bg-lime-500 hover:from-green-500 hover:to-green-600 text-light duration-300 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    IT Consultation
                  </Link>

                </div>
              </div>

              {/* Enhanced Decorative Elements with animation */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-yellow-400/70 rounded-tl-lg animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-yellow-400/80 rounded-tr-lg animate-pulse delay-200"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-yellow-400/90 rounded-bl-lg animate-pulse delay-400"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-yellow-400/80 rounded-br-lg animate-pulse delay-600"></div>
              
             
            </div>
          </div>
        </div>
      </header>

      {/* Service Sections with modern spacing */}
      <main className="space-y-0">
        <section id="webdev" className="scroll-mt-16">
          <WebDev/>
        </section>
        <section id="webdesign" className="scroll-mt-16">
          <WebDesign/>
        </section>
        <section id="mobileapp" className="scroll-mt-16">
          <MobileApp/>
        </section>
        <section id="bizmgnt" className="scroll-mt-16">
          <BizMgnt/>
        </section>
        <section id="bulksms" className="scroll-mt-16">
          <BulkSMS/>
        </section>
        <section id="payment" className="scroll-mt-16">
          <PaymentGateways/>
        </section>
        <section id="pos" className="scroll-mt-16">
          <POS/>
        </section>
        <section id="ecommerse" className="scroll-mt-16">
          <Ecommerse/>
        </section>
        <section id="consultation" className="scroll-mt-16">
          <SoftwareConsultation/>
        </section>
        <section className="scroll-mt-16">
          <CTA/>
        </section>
      </main>
    </>
  );
};

export default Services;