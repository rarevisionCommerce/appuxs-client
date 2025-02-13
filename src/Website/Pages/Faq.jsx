import React, { useState,useEffect } from "react";
import '../../App.css';
import Footer from "../Components/Footer.jsx";
import QuikeLinks from "../Components/QuikeLinks.jsx";

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
      answer:<> <p>React, React Native,Taiwind CSS, Javascript, Python Docker, MongoDb, SQL, Postgress, NodeJs, ExpressJs, RestJS </p>
       </>
    },
    {
        question:"What are your working methods",
        answer:"We apply Agile methodology to most of the projects. There'll be sprint meetings and reviews so that everything is transparent. Besides, we also code in pair to improve productivity and reduce errors.",
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
        question:"What are the payments options? ",
        answer:<>
            <p>There are 3 type of Contracts:</p>
            <p>+ Hourly (invoice bi-weekly)</p>
            <p>+ Monthly (invoice monthly)</p>
            <p>+ Fixed Price (invoice base on progressing of project)</p>
        </>
    },
    {
        question:"How long does it take to build a team after contract signing and paying the deposit fund?",
        answer:"It takes one to two weeks. The default team to start a project includes 2 developers, 1 QC and 1 designer.",
    },
    {
        question:"After the project is finished, How will the maintainance look?",
        answer:<>
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
   useEffect(() => {
          const div = document.getElementById('FaqArticle');
          div.classList.add('slide-faq');
        }, []);

  return (<>

  <div className=" " >    
             {/**top bg div*/}
    <div  className=" bg-[url(./assets/FaqBg.jpg)] bg-center px-4 md:px-16 py-28 text-lg ">
              {/**Faq article sliding div */}
    <div id="FaqArticle" >
    <h1 className="text-4xl font-semibold mb-6 text-white">Frequently Asked Questions</h1>
    <p className="bg-yellow-400 text-slate-900 p-5 rounded-tr-3xl text-xl w-full md:w-1/3" > 
      Do you have any inquiries about our working and operations.Read the answers to frequently asked questions to help you make a decision and gain a better understanding. Understanding a problem is half-way solving it!🙂 
      </p>
    </div>      
    </div>
    <div className="bg-gray-100 md:px-20 px-2 py-8 rounded-lg   "> 
   
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 flex flex-col items-center justify-center  sm:ml-6 ">
                  {/**Question */}
          <div
            onClick={() => handleToggle(index)}
            className=" flex justify-between items-center w-full md:w-2/3  md:text-lg font-semibold px-3 py-3 bg-white hover:bg-yellow-200 rounded-lg focus:outline-none"
          >
            <div className="w-[350px] sm:w-full " >{faq.question} </div> 
           <div className=" rounded-full text-2xl w-10 flex  place-content-center bg-yellow-400 border-2 border-slate-900 h-10 "><span>{openIndex === index ? '-' : '+'}</span>  </div>  
          </div>
                {/**Answer */}
          {openIndex === index && ( 
                   <p className="mt-2 w-full md:w-2/3 text-gray-700 bg-white p-4 rounded-lg shadow-md">
              {faq.answer} 
            </p>
          )}
        </div>
      ))}
   
    </div>

    </div>
     
    
    <QuikeLinks/>
    <Footer/>
    </>);
};

export default FAQ;
