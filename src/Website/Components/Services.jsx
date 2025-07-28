import { ArrowRight, FileQuestion } from "lucide-react";
import { FaCcVisa, FaReceipt, FaSimCard } from "react-icons/fa";
import { 
  FiMonitor, 
  FiSmartphone, 
  FiMessageSquare,
  FiSettings,
  FiLayers,
  FiBriefcase
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white py-10">
      <div className="lg:px-6 px-2">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-3">
            Services <span className="text-yellow-500">Package</span>
          </h2>
          <div className="h-[5px] rounded-full w-28 mb-3 bg-gradient-to-r from-transparent to-dark"></div>
          <div className="max-w-4xl ">
            <p className="text-slate-600 leading-relaxed md:max-w-2xl">
              At Isosoft, customer satisfaction is always our priority. We provide best services 
              with cutting edge technology. Our tech stack is constantly evolving. We embrace new 
              technologies as they emerge. 
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-8">
          
          {/* Web Development */}
          <div className="group bg-white  p-3 shadow-md transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiMonitor className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Web Development
              </h3>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Web Design */}
          <div className="group bg-white  p-3 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary  rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiLayers className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Web Design
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Mobile Application */}
          <div className="group bg-white  p-3 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiSmartphone className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Mobile Application
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Business Management */}
          <div className="group bg-white  p-3 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiSettings className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Business Automation
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Bulk SMS */}
          <div className="group bg-white  p-3 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiMessageSquare className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Bulk SMS Integration
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          {/* Bulk SMS */}
          <div className="group bg-white  p-3 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaSimCard className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Mpesa intergration
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          {/**Payment gateways */}
          <div className="group bg-white  p-3 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaCcVisa className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Card  Payments 
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          {/* Bulk SMS */}
          <div className="group bg-white  p-3 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaReceipt className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                POS Installation
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="group bg-white  p-3 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiBriefcase className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                E-Commerce  systems
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <div className="group bg-white  p-3 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileQuestion className="text-3xl text-white" />
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                IT Consultation
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          {/* Bulk SMS */}
          

        </div>

       
        <div className="flex  mt-16">
          <NavLink to="/Services" className="bg-primary inline-flex items-center hover:-translate-y-1 gap-2 p-3 rounded-lg text-light font-semibold">More Details <ArrowRight/> </NavLink>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;