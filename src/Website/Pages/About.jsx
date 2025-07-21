import Realizing from "../../assets/Realizing2.jpg";
import Culture from "../../assets/Culture2.jpg";
import Clients from "../../assets/Clients.jpg";
import Partners from "../../assets/Partners.jpg"
import React, { useEffect } from 'react';
import '../../App.css';
import Footer from "../Components/Footer.jsx"
import QuikeLinks from "../Components/QuikeLinks.jsx";
import Quality from "../../assets/Quality.jpg"
import { 
    Lightbulb, 
    Users, 
    Building2, 
    Handshake, 
    CheckCircle,
    Target,
    Award,
    Shield
} from 'lucide-react';

function About() {
    //About Article slide in functionality
    useEffect(() => {
        const div = document.getElementById('AboutArticle');
        div.classList.add('slide-about');
    }, []);

    return (
        <div className="">
            {/* Hero Section */}
            <div className="relative flex bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-400/5"></div>
                
                {/**About article sliding div **/}
                <div id="AboutArticle" className="  flex flex-col gap-4 sm:gap-6  top-[190px] sm:top-[120px] lg:top-[160px] left-4 sm:left-8 lg:left-[80px] max-w-4xl">
                    <h1 className="text-xl sm:text-xl lg:text-3xl text-white font-bold leading-tight">
                        About Us
                    </h1>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 sm:p-6 lg:p-8 text-base sm:text-lg lg:text-md rounded-2xl shadow-xl w-full sm:w-4/5 lg:w-3/5">
                        <p className="text-slate-900 leading-relaxed">
                            Isosoft is the leading <span className="font-bold text-gray-700">software development</span> company. Founded in early 2019 with a team of professional and enthusiastic Web developers, Mobile developers and UI/UX designers. Following a systematic approach, we intend to deliver the best and most cost-effective software services to our clients.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                        
                        {/* Realizing Ideas Section */}
                        <div className="flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">
                            <div className="w-full lg:w-1/2 order-2 lg:order-1 flex">
                                <img 
                                    src={Realizing} 
                                    alt="Realizing Ideas"
                                    className="w-full h-64 sm:h-80 lg:h-80  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                                />
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex">
                                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-yellow-400 flex flex-col justify-center h-full">
                                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                                        <div className="bg-yellow-100 p-3 rounded-full">
                                            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">Realizing Ideas</h2>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        Our mission is to help startups and businesses transform their ideas into real and impactful products. We, well-trained coders in Java, Python, NodeJS, ReactJS, React Native as well as iOS and Android application development, always work to offer you the best software solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Culture Section */}
                        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
                            <div className="w-full lg:w-1/2 flex">
                                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-yellow-400 flex flex-col justify-center h-full">
                                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                                        <div className="bg-yellow-100 p-3 rounded-full">
                                            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">Our Culture</h2>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        At Isosoft, we believe that a successful product must help clients resolve their business problem, and furthermore, improve their business growth. Impactful products, satisfied customers, developmental businesses are our service roadmap.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex">
                                <img 
                                    src={Culture} 
                                    alt="Our Culture"
                                    className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                                />
                            </div>
                        </div>

                        {/* Our Clients Section */}
                        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
                            <div className="w-full lg:w-1/2 order-2 lg:order-1 flex">
                                <img 
                                    src={Clients} 
                                    alt="Our Clients"
                                    className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                                />
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex">
                                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-yellow-400 flex flex-col justify-center h-full">
                                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                                        <div className="bg-yellow-100 p-3 rounded-full">
                                            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">Our Clients</h2>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        We deliver outsourcing solutions to start-ups and businesses in all sectors such as solar energy, finance, logistic, healthcare, media, education, transportation, etc. Clients come to us with their ideas and we helps our clients implement initial ideas step by step to design and build applications (web, mobile, ...).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Partners Section */}
                        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
                            <div className="w-full lg:w-1/2 flex">
                                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-yellow-400 flex flex-col justify-center h-full">
                                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                                        <div className="bg-yellow-100 p-3 rounded-full">
                                            <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">Our Partners</h2>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        We are building a long-term and trusted relationship with valuable partners. Here are Isosoft partners:
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex">
                                <img 
                                    src={Partners} 
                                    alt="Our Partners"
                                    className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Isosoft Section */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                        <div className="w-full lg:w-2/3">
                            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                    <div className="bg-yellow-100 p-3 rounded-full">
                                        <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                        Why Choose Isosoft?
                                    </h2>
                                </div>
                                
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full">
                                            <Target className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Our project managers have extensive expertise with large, complicated projects involving dispersed teams and various vendors.
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full">
                                            <Users className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            We have an abundance of senior talent and a specialized human resources team to assist you at every stage of development.
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full">
                                            <Shield className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Transparent working process builds trust among employees and partners by making information available for accuracy checks.
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-full">
                                            <CheckCircle className="w-5 h-5 text-yellow-600" />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                            Isosoft prioritizes keeping up with trends as part of our software development services to help firms maintain their relevance in their respective, competitive industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/3">
                            <div className="relative group">
                                <img 
                                    src={Quality} 
                                    alt="Quality Assurance"
                                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <QuikeLinks />
            <Footer />
        </div>
    );
};

export default About;