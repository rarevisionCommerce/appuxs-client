import Realizing from "../../assets/Realizing2.jpg";
import Culture from "../../assets/Culture2.jpg";
import Clients from "../../assets/Clients.jpg";
import Partners from "../../assets/Partners.jpg"
import React, { useEffect } from 'react';
import '../../App.css';
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
    // About Article slide in functionality
    useEffect(() => {
        const div = document.getElementById('AboutArticle');
        if (div) {
            div.classList.add('slide-about');
        }
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-400/5"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] flex items-center">
                        <div id="AboutArticle" className="w-full max-w-5xl py-16 sm:py-20 lg:py-24">
                            <div className="space-y-6 sm:space-y-8">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight">
                                    About Us
                                </h1>
                                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl max-w-4xl">
                                    <p className="text-slate-900 text-base sm:text-lg lg:text-xl leading-relaxed">
                                        Isosoft is the leading <span className="font-bold text-gray-700">software development</span> company. Founded in early 2019 with a team of professional and enthusiastic Web developers, Mobile developers and UI/UX designers. Following a systematic approach, we intend to deliver the best and most cost-effective software services to our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="py-16 sm:py-20 lg:py-24 space-y-20 sm:space-y-24 lg:space-y-32">
                        
                        {/* Realizing Ideas Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
                            <div className="order-2 lg:order-1">
                                <div className="h-full">
                                    <img 
                                        src={Realizing} 
                                        alt="Realizing Ideas"
                                        className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" 
                                    />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 flex">
                                <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border-l-4 border-yellow-400 flex flex-col justify-center h-full hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                        <div className="bg-yellow-100 p-3 sm:p-4 rounded-full">
                                            <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-500">Realizing Ideas</h2>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                                        Our mission is to help startups and businesses transform their ideas into real and impactful products. We, well-trained coders in Java, Python, NodeJS, ReactJS, React Native as well as iOS and Android application development, always work to offer you the best software solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Culture Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
                            <div className="flex">
                                <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border-l-4 border-yellow-400 flex flex-col justify-center h-full hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                        <div className="bg-yellow-100 p-3 sm:p-4 rounded-full">
                                            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-500">Our Culture</h2>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                                        At Isosoft, we believe that a successful product must help clients resolve their business problem, and furthermore, improve their business growth. Impactful products, satisfied customers, developmental businesses are our service roadmap.
                                    </p>
                                </div>
                            </div>
                            <div className="h-full">
                                <img 
                                    src={Culture} 
                                    alt="Our Culture"
                                    className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" 
                                />
                            </div>
                        </div>

                        {/* Our Clients Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
                            <div className="order-2 lg:order-1 h-full">
                                <img 
                                    src={Clients} 
                                    alt="Our Clients"
                                    className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" 
                                />
                            </div>
                            <div className="order-1 lg:order-2 flex">
                                <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border-l-4 border-yellow-400 flex flex-col justify-center h-full hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                        <div className="bg-yellow-100 p-3 sm:p-4 rounded-full">
                                            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-500">Our Clients</h2>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                                        We deliver outsourcing solutions to start-ups and businesses in all sectors such as solar energy, finance, logistic, healthcare, media, education, transportation, etc. Clients come to us with their ideas and we helps our clients implement initial ideas step by step to design and build applications (web, mobile, ...).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Partners Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
                            <div className="flex">
                                <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border-l-4 border-yellow-400 flex flex-col justify-center h-full hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                        <div className="bg-yellow-100 p-3 sm:p-4 rounded-full">
                                            <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-500">Our Partners</h2>
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                                        We are building a long-term and trusted relationship with valuable partners. Here are Isosoft partners:
                                    </p>
                                </div>
                            </div>
                            <div className="h-full">
                                <img 
                                    src={Partners} 
                                    alt="Our Partners"
                                    className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Isosoft Section */}
            <section className="bg-gradient-to-br from-gray-100 via-gray-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="py-16 sm:py-20 lg:py-24">
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 items-start">
                            <div className="xl:col-span-2">
                                <div className="bg-white p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center gap-4 mb-8 sm:mb-10">
                                        <div className="bg-yellow-100 p-3 sm:p-4 rounded-full">
                                            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                                            Why Choose Isosoft?
                                        </h2>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 gap-6 sm:gap-8">
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 bg-yellow-100 p-2 sm:p-3 rounded-full">
                                                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                                                </div>
                                                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                                    Our project managers have extensive expertise with large, complicated projects involving dispersed teams and various vendors.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 bg-yellow-100 p-2 sm:p-3 rounded-full">
                                                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                                                </div>
                                                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                                    We have an abundance of senior talent and a specialized human resources team to assist you at every stage of development.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 bg-yellow-100 p-2 sm:p-3 rounded-full">
                                                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                                                </div>
                                                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                                    Transparent working process builds trust among employees and partners by making information available for accuracy checks.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 bg-yellow-100 p-2 sm:p-3 rounded-full">
                                                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                                                </div>
                                                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                                    Isosoft prioritizes keeping up with trends as part of our software development services to help firms maintain their relevance in their respective, competitive industry.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="xl:col-span-1">
                                <div className="sticky top-8">
                                    <div className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                                        <img 
                                            src={Quality} 
                                            alt="Quality Assurance"
                                            className="w-full h-64 sm:h-80 lg:h-96 xl:h-[400px]  transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                                            <p className="text-sm">Delivering excellence in every project</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;