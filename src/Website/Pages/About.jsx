import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Realizing from "../../assets/img_realizing.jpg";
import Culture from "../../assets/img_culture.png";
import Clients from "../../assets/Clients.jpg";
import Partners from "../../assets/Partners.jpg"
import Quality from "../../assets/Quality.jpg"
import { 
    Lightbulb, 
    Users, 
    Building2, 
    Handshake, 
    CheckCircle,
    Target,
    Award,
    Shield,
    
} from 'lucide-react';
import CTA from '../Components/CTA';
import useTitle from '../Components/useTitle';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function About() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
  
    return (<>
    <Header/>
    <Helmet>
        <title>About Us | Appuxs LLC</title>
        <meta name="description" content="Learn about Appuxs, a leading software development company founded in 2015. Discover our mission, culture, team of expert developers, and commitment to delivering innovative digital solutions for businesses worldwide.." />              
        <meta  name="keywords" content="about Appuxs, software development company, web development team, mobile app developers, UI/UX designers, Kenya software company, custom software solutions, business applications, digital transformation" />    
                        
    </Helmet>
<div className="min-h-screen">
            
           
            <header className="relative py-5 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
            
                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="flex flex-col justify-center gap-3 items-center pt-16">
                        {/* Main Title Section */}
                        <div className="flex items-center flex-col gap-3 max-w-5xl text-center">
                            <div className="">
                                <span className="inline-flex gap-2 items-center px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 transition-colors duration-300">
                                    <div className="bg-secondary h-2 w-2 rounded-full animate-pulse"></div> Who Are We?
                                </span>
                            </div>
                            
                            <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                                About  <span className="text-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">  Appuxs LLC</span>
                            </h1>
                            
                            <div className="w-28 lg:ml-[-80px] h-1 bg-gradient-to-r from-transparent rounded-2xl to-yellow-400"></div>
                            
                            <p className="lg:text-lg text-light leading-relaxed max-w-3xl mx-auto">
                                Appuxs LLC is a dedicated software developmment company.Founded in 2015 by a Team of passionate and profesional Software developers,mobile developers and UI/UX designers.Following a systemic approach,we are highly esteemed in delivering the best and most cost effective softaware solutions to our clients.
                            </p>
                            <div className="gap-1 md:gap-4 flex">
                                <span className="inline-flex gap-1 items-center px-3 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 transition-colors duration-300">
                                    <div className="bg-secondary h-2 w-2 rounded-full animate-pulse"></div> Integrity 
                                </span>
                                <span className="inline-flex gap-1 items-center px-3 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 transition-colors duration-300">
                                    <div className="bg-secondary h-2 w-2 rounded-full animate-pulse"></div>TeamWork
                                </span>
                                <span className="inline-flex gap-1 items-center px-3 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 transition-colors duration-300">
                                    <div className="bg-secondary h-2 w-2 rounded-full animate-pulse"></div> Transparency
                                </span>
                            </div>
                            
                            
                        </div>
                    </div>
                </div> 
            </header>

            {/* Main Content Sections */}
            <section className="bg-gradient-to-b from-light via-white to-light">
                <div className="container mx-auto px-2 sm:px-4 lg:px-8 xl:px-2">
                    <div 
                        className="py-16 sm:py-10 lg:py-14 space-y-10 sm:space-y-12 lg:space-y-12"
                        
                    >
                        
                        {/* Realizing Ideas Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 xl:gap-10 items-stretch"                         
                        >
                            <div className="order-2 lg:order-1">
                                <div className="relative h-full group overflow-hidden rounded-3xl">
                                    <img 
                                        src={Realizing} 
                                        alt="Realizing Ideas - Software Development Process"
                                        className="w-full h-64 sm:h-80 lg:h-full min-h-[350px] object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105" 
                                    />
                                    <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <Lightbulb className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 flex">
                                <div className="bg-white p-8 lg:p-10 rounded-3xl  border border-secondary/50 flex flex-col justify-center h-full  transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="bg-secondary p-4 rounded-2xl shadow-lg">
                                            <Lightbulb className="w-7 h-7 text-white" />
                                        </div>
                                        <h2 className="text-lg lg:text-2xl font-bold ">
                                            Realizing Ideas
                                        </h2>
                                    </div>
                                    <p className="text-primary/80  lg:text-lg leading-relaxed font-medium">
                                        Our mission is to help startups and businesses transform their ideas into real and impactful products. We, well-trained coders in Java, Python, NodeJS, ReactJS, React Native as well as iOS and Android application development, always work to offer you the best software solutions.
                                    </p>
                                    <div className="mt-6 flex items-center gap-2">
                                        <div className="w-12 h-1 bg-gradient-to-r from-secondary to-tertiary rounded-full"></div>
                                        <div className="w-6 h-1 bg-secondary/50 rounded-full"></div>
                                        <div className="w-3 h-1 bg-secondary/30 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Our Culture Section */}
                        <div 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 xl:gap-10 items-stretch"
                          
                        >
                            <div className="flex">
                                <div className="bg-white p-8 lg:p-12 rounded-3xl border border-secondary/50 flex flex-col justify-center h-full transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="bg-secondary p-4 rounded-xl ">
                                            <Users className="w-7 h-7 text-white" />
                                        </div>
                                        <h2 className="text-lg lg:text-2xl font-bold ">
                                            Our Culture
                                        </h2>
                                    </div>
                                    <p className="text-primary lg:text-lg leading-relaxed font-medium">
                                        At Appuxs LLC, we believe that a successful product must help clients resolve their business problem, and furthermore, improve their business growth. Impactful products, satisfied customers, developmental businesses are our service roadmap.
                                    </p>
                                    <div className="mt-6 flex items-center gap-2">
                                        <div className="w-12 h-1 bg-gradient-to-r from-secondary to-tertiary rounded-full"></div>
                                        <div className="w-6 h-1 bg-secondary/50 rounded-full"></div>
                                        <div className="w-3 h-1 bg-secondary/30 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full group overflow-hidden rounded-3xl">
                                <img 
                                    src={Culture} 
                                    alt="Our Culture - Team Collaboration"
                                    className="w-full h-64 sm:h-80 lg:h-full min-h-[350px] object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105" 
                                />
                                
                                <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <Users className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                        </div>

                        {/* Our Clients Section */}
                        <div 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 xl:gap-10 items-stretch"
                            variants={fadeInUp}
                        >
                            <div className="order-2 lg:order-1 relative h-full group overflow-hidden rounded-3xl">
                                <img 
                                    src={Clients} 
                                    alt="Our Clients - Business Solutions"
                                    className="w-full h-64 sm:h-80 lg:h-full min-h-[350px] object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105" 
                                />
                               
                                <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <Building2 className="w-5 h-5 text-light" />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 flex">
                                <div className="bg-white p-8 lg:p-10 rounded-3xl  border border-secondary/50 flex flex-col justify-center h-full  transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="bg-secondary p-4 rounded-2xl shadow-lg">
                                            <Building2 className="w-7 h-7 text-white" />
                                        </div>
                                        <h2 className="text-lg lg:text-2xl font-bold ">
                                            Our Clients
                                        </h2>
                                    </div>
                                    <p className="text-primary  lg:text-lg leading-relaxed font-medium">
                                        We deliver outsourcing solutions to start-ups and businesses in all sectors such as solar energy, finance, logistic, healthcare, media, education, transportation, etc. Clients come to us with their ideas and we helps our clients implement initial ideas step by step to design and build applications (web, mobile, ...).
                                    </p>
                                    <div className="mt-6 flex items-center gap-2">
                                        <div className="w-12 h-1 bg-gradient-to-r from-secondary to-tertiary rounded-full"></div>
                                        <div className="w-6 h-1 bg-secondary/50 rounded-full"></div>
                                        <div className="w-3 h-1 bg-secondary/30 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Our Partners Section */}
                        <div 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 xl:gap-10 items-stretch"
                            variants={fadeInUp}
                        >
                            <div className="flex">
                                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-secondary/50 flex flex-col justify-center h-full  transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="bg-secondary  p-4 rounded-2xl shadow-lg">
                                            <Handshake className="w-7 h-7 text-white" />
                                        </div>
                                        <h2 className="text-lg lg:text-2xl font-bold ">
                                            Our Partners
                                        </h2>
                                    </div>
                                    <p className="text-primary  lg:text-lg leading-relaxed font-medium">
                                        We are building a long-term and trusted relationship with valuable partners. Here are Appuxs LLC partners:
                                    </p>
                                    <div className="mt-6 flex items-center gap-2">
                                        <div className="w-12 h-1 bg-gradient-to-r from-secondary to-tertiary rounded-full"></div>
                                        <div className="w-6 h-1 bg-secondary/50 rounded-full"></div>
                                        <div className="w-3 h-1 bg-secondary/30 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full group overflow-hidden rounded-3xl">
                                <img 
                                    src={Partners} 
                                    alt="Our Partners - Strategic Partnerships"
                                    className="w-full h-64 sm:h-80 lg:h-full min-h-[350px] object-cover  shadow-sm transition-all duration-500 group-hover:scale-105" 
                                />
                                
                                <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <Handshake className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Stats Section */}
            <motion.section 
                className="bg-gradient-to-b from-light  to-light py-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <motion.div 
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.div className="text-center" variants={fadeInUp}>
                            <div className="bg-primary backdrop-blur-sm p-3 rounded-xl">
                                <div className="text-xl lg:text-2xl font-bold text-secondary mb-2">20+</div>
                                <div className="text-light/80 font-medium">Projects Done</div>
                            </div>
                        </motion.div>
                        <motion.div className="text-center" variants={fadeInUp}>
                            <div className="bg-primary backdrop-blur-sm p-3 rounded-xl ">
                                <div className="text-xl lg:text-2xl font-bold text-secondary mb-2">150+</div>
                                <div className="text-light/80 font-medium">Happy Clients</div>
                            </div>
                        </motion.div>
                        <motion.div className="text-center" variants={fadeInUp}>
                            <div className="bg-primary backdrop-blur-sm p-3 rounded-xl ">
                                <div className="text-xl lg:text-2xl font-bold text-secondary mb-2">5+</div>
                                <div className="text-light/80 font-medium">Years Experience</div>
                            </div>
                        </motion.div>
                        <motion.div className="text-center" variants={fadeInUp}>
                            <div className="bg-primary backdrop-blur-sm p-3 rounded-xl ">
                                <div className="text-xl lg:text-2xl  font-bold text-secondary mb-2">10+</div>
                                <div className="text-light/80 font-medium">Team Members</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Why Choose Isosoft Section */}
            <section 
                className="bg-gradient-to-br from-light via-white to-light"        
            >
                <div className="container mx-auto p-3  lg:px-4">
                    
                        
                            <div className="xl:col-span-2" >
                                <div className="bg-white p-4  xl:p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-500 border ">
                                    <div className="flex items-center justify-center gap-6 mb-12">
                                        <div className="bg-secondary p-2 rounded-xl ">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-lg lg:text-2xl text-dark font-bold bt">
                                            Why Choose Appuxs LLC?
                                        </h2>
                                    </div>
                                    
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div 
                                            className=" p-5 rounded-2xl  transition-all duration-300  border border-secondary/60"
                                            
                                        >
                                            <div className="flex items-start gap-6">
                                                
                                                <div>
                                                    <h3 className="md:text-lg inline-flex gap-2 items-center font-bold text-primary mb-3"><div className="p-2 rounded-full bg-secondary">
                                                    <Target className="w-6 h-6 text-white" />
                                                </div>Expert Project Management</h3>
                                                    <p className="text-primary/80 leading-relaxed">
                                                        Our project managers have extensive expertise with large, complicated projects involving dispersed teams and various vendors.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className=" p-5 rounded-2xl  transition-all duration-300  border border-secondary/60"
                                        >
                                            <div className="flex items-start gap-6">
                                                
                                                <div>
                                                    <h3 className="md:text-lg inline-flex gap-2 items-center font-bold text-primary mb-3"> <div className="p-2 rounded-full bg-secondary">
                                                    <Users className="w-6 h-6 text-white" />
                                                </div> Senior Talent Pool</h3>
                                                    <p className="text-primary/80  leading-relaxed">
                                                        We have an abundance of senior talent and a specialized human resources team to assist you at every stage of development.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className=" p-5 rounded-2xl  transition-all duration-300  border border-secondary/60"
                                        >
                                            <div className="flex items-start gap-6">
                                                
                                                <div>
                                                    <h3 className="md:text-lg inline-flex gap-2 items-center font-bold text-primary mb-3"> <div className="p-2 rounded-full bg-secondary">
                                                    <Shield className="w-6 h-6 text-white" />
                                                </div> Transparent Process</h3>
                                                    <p className="text-primary/80  leading-relaxed">
                                                        Transparent working process builds trust among employees and partners by making information available for accuracy checks.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className=" p-5 rounded-2xl  transition-all duration-300  border border-secondary/60"
                                        >
                                            <div className="flex items-start gap-6">
                                                
                                                <div>
                                                    <h3 className="md:text-lg inline-flex gap-2 items-center font-bold text-primary mb-3"> <div className="p-2 rounded-full bg-secondary">
                                                    <CheckCircle className="w-6 h-6 text-white" />
                                                </div> Cutting-Edge Technology</h3>
                                                    <p className="text-primary/80  leading-relaxed">
                                                        Appuxs prioritizes keeping up with trends as part of our software development services to help firms maintain their relevance in their respective, competitive industry.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex items-center gap-3">
                                        <div className="w-16 h-1 bg-gradient-to-r from-secondary to-tertiary rounded-full"></div>
                                        <div className="w-8 h-1 bg-secondary/60 rounded-full"></div>
                                        <div className="w-4 h-1 bg-secondary/40 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    
                <CTA/>
            </section>

            
        </div>
        <Footer/>
     </>
        
    );
}

export default About;