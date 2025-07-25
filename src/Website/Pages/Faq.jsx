import React, { useState} from "react";
import '../../App.css';
import { ChevronDown } from "lucide-react";
import CTA from "../Components/CTA.jsx";

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
        <a href="www.lemka.info">https://www.lemka.info/</a>
        <p>You can find more about our works at:</p>
        <a target="blank" href="https://isosoftwares.com/projects" > https://isosoftwares.com/projects</a>
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

  //Smooth Faq div article slide-in animation
  

  return (<>

    <div className=" " >
      {/**top bg div*/}
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
         <div className="bg-secondary h-2 w-2 rounded-full"></div> Expert Answers & Solutions
        </span>
      </div>
     
      <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
        Frequently Asked <span className="text-yellow-400">Questions</span>
      </h1>
     
      <div className="w-28 lg:ml-[-80px] h-1 bg-gradient-to-r from-transparent rounded-2xl to-yellow-400  "></div>
     
      <p className="lg:text-lg text-light leading-relaxed max-w-3xl mx-auto">
        Get instant answers to common questions about our <strong>software development services</strong>, 
        project timelines, <em>pricing models</em>, and <em>technical expertise</em>. Everything you need 
        to know about partnering with Isosoft for your next digital transformation project.
      </p>
     
      {/* SEO Meta Elements */}
      <div className="hidden">
        <span itemProp="description">
          Comprehensive FAQ section for Isosoft software development company. Find answers about web development, 
          mobile app development, pricing, project timelines, technical stack, contracts, and maintenance services.
        </span>
        <span itemProp="keywords">
          software development FAQ, web development questions, mobile app development cost, project timeline, 
          technical stack, contract signing, maintenance support, Kenya software company FAQ
        </span>
        <span itemProp="name">Isosoft Software Development FAQ</span>
        <span itemProp="headline">Frequently Asked Questions - Software Development Services</span>
        <span itemProp="about">
          Common questions and expert answers about custom software development, web applications, 
          mobile apps, business solutions, and technical support services
        </span>
        <span itemProp="audience">
          Business owners, entrepreneurs, startups, and companies seeking custom software development solutions
        </span>
        <meta name="description" content="Get answers to frequently asked questions about Isosoft's software development services, pricing, timelines, technical stack, and project processes. Expert solutions for your business needs." />
        <meta name="keywords" content="software development FAQ, web development questions, mobile app costs, project timeline, technical expertise, contract process, maintenance support" />
        <meta property="og:title" content="FAQ - Software Development Services | Isosoft" />
        <meta property="og:description" content="Find answers to common questions about our software development services, project processes, pricing models, and technical expertise." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Software Development FAQ | Isosoft Solutions" />
        <meta name="twitter:description" content="Comprehensive answers to questions about custom software development, web apps, mobile development, and business solutions." />
      </div>
    </div>
   
  </div> 

</header>
      <div className="bg-gray-100 md:px-20 px-2 py-8 rounded-lg   ">

        {faqs.map((faq, index) => (
          <div key={index} onClick={() => handleToggle(index)} className="mb-4 flex flex-col  border border-secondary/50  py-2  rounded-xl  sm:ml-6 ">
            {/**Question */}
            <div
              
              className=" flex justify-between items-center w-full  md:text-lg font-semibold px-3 py-2  rounded-xl focus:outline-none  "
            >
              <div className="w-[350px] sm:w-full " >{faq.question} </div>
              {/**Answer */}
            
              
              <ChevronDown className={`text-primary w-6 h-6 mt-2 transition-transform duration-300 ${openIndex === index ? "rotate-180":""}`}  />
            </div>
            {openIndex === index && (
              <p className="mt-2 w-full  text-gray-700 border-t border-dark/20 p-4 ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}

      </div>

    </div>

        <CTA/>
    
    
  </>);
};

export default FAQ;
