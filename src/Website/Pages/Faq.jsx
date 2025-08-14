import React, { useState} from "react";
import '../../App.css';
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CTA from "../Components/CTA.jsx";
import ProjectsSection from "../Components/Projects.jsx";
import useTitle from "../Components/useTitle.jsx";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";

const FAQ = () => {
  //Open and close question functionality
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  //Faq questions and answers
  const faqs = [
    {
      question: "Whats the current technical stack in your company",
      answer: <> <p>React, React Native,Taiwind CSS, Javascript, Python Docker, MongoDb, SQL, Postgress, NodeJs, ExpressJs, RestJS </p>
      </>
    },
    {
      question: "What are your working methods",
      answer: "We apply Agile methodology to most of the projects. There'll be sprint meetings and reviews so that everything is transparent. Besides, we also code in pair to improve productivity and reduce errors.",
    },

    {
      question: "I have a new product,what documents should i send you?",
      answer: <>
        <p>You can answer our questionnaire as well as send us related documents about the product (requirements, timeline, mockups, designs, etc.)</p>
      </>
    },
    {
      question: "May i see some of your case studies ?",
      answer: <>
        <p>Please check out these links for some typical sample works:</p>
        <div className="grid lg:grid-cols-2 gap-2">
          <a href="https://agapesmartsolutions.com/" className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300 underline">Agape Smart Solutions</a>
          <a href="https://pearlapartments.co.ke/" className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300 underline">Pearl Apartments</a>
          <a href="https://febwin.co.ke/" className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300 underline">Febwin Properties</a>
          
          <a href="https://isosalespos.isosoftwares.com/" className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300 underline">Isosales Pos</a>
        </div>
        
        
      </>
    },
    {
      question: "What is the level of experience of your software developers in your company?",
      answer: "We have senior (5-8 years exp), intermediate & junior developers and we apply a flat rate for our developers in our projects."
    },
    {
      question: "How can we sign contracts without face to face meetings ?",
      answer: <>
        <p>We have a very flexible way to sign contracts as most oversea clients do it via the Internet:</p>
        <p>- Firstly, please print the contract and sign, then scan the paper and email it to us.</p>
        <p>- Our COO will sign the scanned contract and stampt it.</p>
        <p>- We will send you the scanned contract with both parties' signitures.</p>
        <p>In case you want to have physical form, please address your requirement to us.</p>
      </>
    },
    {
      question: "What are the payments options? ",
      answer: <>
        <p>There are 3 type of Contracts:</p>
        <p>+ Hourly (invoice bi-weekly)</p>
        <p>+ Monthly (invoice monthly)</p>
        <p>+ Fixed Price (invoice base on progressing of project)</p>
      </>
    },
    {
      question: "How long does it take to build a team after contract signing and paying the deposit fund?",
      answer: "It takes one to two weeks. The default team to start a project includes 2 developers, 1 QC and 1 designer.",
    },
    {
      question: "After the project is finished, How will the maintainance look?",
      answer: <>
        <p>There are 3 types of maintenance :</p>
        <p>1. If there's a bug or any issue within the project scope in the contract, then we'll support to fix free within 3 months from the date of delivery</p>
        <p>2. If you change a request or extra feature outside the project scope, we'll estimate and make a new contract, charging an additional amount.</p>
        <p>3. Timeline and project scope won't matter if you want to start a new hourly contract to maintain the product.</p>
      </>
    },
  ];

  //Open answer when question is clicked functionality
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Header/>
     <Helmet>
          <title>Frequently Asked Questions | Isosoft Softwares</title>
          <meta name="description" content=" Comprehensive FAQ section for Isosoft software development company. Find answers about web development, mobile app development, pricing, project timelines, technical stack, contracts, and maintenance services..." />              
          <meta  name="keywords" content="software development FAQ, web development questions, mobile app development cost, project timeline, technical stack, contract signing, maintenance support, Kenya software company FAQ" />  
                        
     </Helmet>
      <main className="">
        {/**Header Section*/}
        <header className="relative py-5 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
         
          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col justify-center gap-3 items-center pt-16">
              
              {/* Main Title Section */}
              <div className="flex items-center flex-col gap-3 max-w-5xl text-center">
                <div className="">
                  <span className="inline-flex gap-2 items-center px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400/50 transition-colors duration-300">
                    <div className="bg-secondary h-2 w-2 rounded-full animate-pulse"></div> Expert Answers & Solutions
                  </span>
                </div>
                
                <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
                  Frequently Asked <span className="text-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Questions</span>
                </h1>
                
                <div className="w-28 lg:ml-[-80px] h-1 bg-gradient-to-r from-transparent rounded-2xl to-yellow-400"></div>
                
                <p className="lg:text-lg text-light leading-relaxed max-w-3xl mx-auto">
                  Get instant answers to common questions about our <strong className="text-yellow-300">software development services</strong>, 
                  project timelines, <em className="">pricing models</em>, and <em className="">technical expertise</em>. Everything you need 
                  to know about partnering with Isosoft for your next digital transformation project.
                </p>
                
                </div>
            </div>
          </div> 
        </header>

        {/* FAQ Section */}
        <section className="bg-gradient-to-b from-gray-100 to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} onClick={() => handleToggle(index)} className="mb-4 flex flex-col border border-secondary/50 py-2 rounded-xl hover:border-secondary/70 transition-colors duration-300  backdrop-blur-sm ">
                  {/**Question */}
                  <div className="flex justify-between items-center w-full text-sm md:text-lg font-semibold px-3 py-2 rounded-xl focus:outline-none cursor-pointer">
                    <div className="flex-1 pr-4 text-left break-words">{faq.question}</div>
                    {/**Answer */}
                    <ChevronDown className={`text-primary w-6 h-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
                  </div>
                  {openIndex === index && (
                    <div className="mt-2 w-full text-gray-700 border-t border-dark/20 p-4 animate-fadeIn">
                      <div className="prose prose-sm max-w-none">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
              
      <CTA/>
      <Footer/>
    </>
  );
};

export default FAQ;