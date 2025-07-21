import React from "react";
import { 
  FiMonitor, 
  FiSmartphone, 
  FiMessageSquare,
  FiSettings,
  FiLayers
} from "react-icons/fi";

function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-slate-100 via-slate-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-slate-800 mb-6">
            Services <span className="text-yellow-500">Package</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-600 leading-relaxed">
              At Isosoft, customer satisfaction is always our priority. We provide best services 
              with cutting edge technology. Our tech stack is constantly evolving. We embrace new 
              technologies as they emerge. 
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          
          {/* Web Development */}
          <div className="group bg-white rounded-xl p-6 shadow-md rounded-b-full transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiMonitor className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Web Development
              </h3>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Web Design */}
          <div className="group bg-white rounded-xl rounded-t-full p-6 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiLayers className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Web Design
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Mobile Application */}
          <div className="group bg-white rounded-x rounded-b-full l p-6 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiSmartphone className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Mobile Application
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Business Management */}
          <div className="group bg-white rounded-xl rounded-t-full p-6 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiSettings className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Business Automation
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Bulk SMS */}
          <div className="group bg-white rounded-xl rounded-b-full p-6 shadow-md  transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-yellow-500/50 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FiMessageSquare className="text-3xl text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300">
                Bulk SMS Integration
              </h3>
              <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

        </div>

        {/* Bottom decorative line */}
        <div className="flex justify-center mt-16">
          <div className="w-56 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;