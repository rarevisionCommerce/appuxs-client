import Footer from "../Components/Footer";
import QuikeLinks from "../Components/QuikeLinks";
import Portrait from "../../assets/WebDevPortrait.jpg";
import React, { useEffect } from "react";
import { Users, Zap, Smartphone, MousePointer } from "lucide-react";
import "../../App.css";

function WebDev() {
    useEffect(() => {
        //Web development article slide in animation functionality
        const company = document.getElementById('Article');
        company.classList.add('slide-faq');
        //Web development portrait slide in animation functionality
        const devs = document.getElementById('Portrait');
        devs.classList.add('slide-pt');
    }, []);

    return (
        <main className="">
            {/* Hero Section */}
            <div className="bg-webDevBg bg-center bg-cover h-[300px] sm:h-[400px] lg:h-[440px] shadow-lg"></div>
            
            {/* Main Content Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-24 gap-6 lg:gap-12">
                {/** Web Development article div **/}
                <div id="Article" className="flex flex-col w-full lg:w-1/2 space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-yellow-500 font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
                            Web Development
                        </h1>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
                            <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Our web application development services make it easier to create, update, and maintain software applications that run on the web. By working with Developers, you can speed up the growth of your user base, get access to new digital channels, improve your conversion rate, and reach other business goals faster
                            </p>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
                        <h3 className="text-slate-900 font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                            What Our Websites Include:
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                            {/* User-Friendly Design */}
                            <div className="flex items-start gap-3 sm:gap-4 bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-sm">
                                <div className="flex-shrink-0 bg-white/30 p-2 rounded-full">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-slate-900">
                                        User-Friendly Design:
                                    </span>
                                    <span className="text-slate-800 text-sm sm:text-base ml-1">
                                        Ensures that visitors can easily navigate and find what they need.
                                    </span>
                                </div>
                            </div>

                            {/* Fast Loading Times */}
                            <div className="flex items-start gap-3 sm:gap-4 bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-sm">
                                <div className="flex-shrink-0 bg-white/30 p-2 rounded-full">
                                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-slate-900">
                                        Fast Loading Times:
                                    </span>
                                    <span className="text-slate-800 text-sm sm:text-base ml-1">
                                        Keeps visitors engaged and reduces bounce rates.
                                    </span>
                                </div>
                            </div>

                            {/* Responsive Design */}
                            <div className="flex items-start gap-3 sm:gap-4 bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-sm">
                                <div className="flex-shrink-0 bg-white/30 p-2 rounded-full">
                                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-slate-900">
                                        Responsive Design:
                                    </span>
                                    <span className="text-slate-800 text-sm sm:text-base ml-1">
                                        Adapts to different devices and screen sizes for a seamless user experience.
                                    </span>
                                </div>
                            </div>

                            {/* Clear Call-to-Actions */}
                            <div className="flex items-start gap-3 sm:gap-4 bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-sm">
                                <div className="flex-shrink-0 bg-white/30 p-2 rounded-full">
                                    <MousePointer className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-slate-900">
                                        Clear Call-to-Actions:
                                    </span>
                                    <span className="text-slate-800 text-sm sm:text-base ml-1">
                                        Encourage users to take the next step, such as signing up or making a purchase.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/** Web development portrait **/}
                <div id="Portrait" className="w-full lg:w-1/2 hidden md:block">
                    <div className="relative group">
                        <img 
                            src={Portrait} 
                            alt="Web Development Professional"
                            className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>

            <QuikeLinks />
            <Footer />
        </main>
    );
}

export default WebDev;