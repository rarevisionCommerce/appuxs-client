import Realizing from "../../assets/Realizing2.jpg";
import Culture from "../../assets/Culture2.jpg";
import Clients from "../../assets/Clients.jpg";
import Partners from "../../assets/Partners.jpg"
import React, { useEffect } from 'react';
import '../../App.css';
import Footer from "../Components/Footer.jsx"
import QuikeLinks from "../Components/QuikeLinks.jsx";
import Quality from "../../assets/Quality.jpg"



function About(){

                //About Article slide in functionality
    useEffect(() => {
        const div = document.getElementById('AboutArticle');
        div.classList.add('slide-about');
      }, []);



return(
<div className=" " >
    <div className="flex bg-[url(./assets/AboutBackground.jpg)] bg-center bg-cover px-3 pt-24   h-[500px] ">
                    {/**About article sliding div **/}
        <div id="AboutArticle" className="flex flex-col p-2 gap-3 absolute lg:top-[140px] lg:left-[50px] ">
            <h1 className="text-6xl text-white" >About us</h1>
            <p className="bg-yellow-300 p-4 text-xl rounded-tr-3xl sm:w-2/5  w-full">Isosoft is the leading <span className="text-gray-600 font-bold" >software development</span> company. Founded in early 2019 with a team of professional and enthusiastic Web developers, Mobile developers and UI/UX designers. Following a systematic approach, we intend to deliver the best and most cost-effective software services to our clients.
            </p>
        </div>


    </div>

    <div className="grid gap-8 sm:gap-20 px-4 md:px-28 py-2 md:py-10 ">
        <div className="flex gap-4 " >
                        {/**Realizing ideas article */}
            <div className="w-1/2 hidden sm:block "><img src={Realizing} className="  " /></div>
            <div className="border-b-yellow-400 sm:w-1/2 w-full p-4 border-b-2" >
                <h1 className="text-yellow-400 font-semibold text-2xl text-center">Realizing ideas</h1>
                <p className="text-lg " >Our mission is to help startups and businesses transform their ideas into real and impactful products. We, well-trained coders in Java, Python, NodeJS, ReactJS, React Native as well as iOS and Android application development, always work to offer you the best software solutions.</p>
            </div>
        </div>
                            {/**Our Culture article */}
        <div className="flex gap-4 " >
            <div className="border-b-yellow-400 p-4 border-b-2 sm:w-1/2 w-full" >
                <h1 className="text-yellow-400 font-semibold text-2xl text-center">Our culture</h1>
                <p className="text-lg " >At Isosoft, we believe that a successful product must help clients resolve their business problem, and furthermore, improve their business growth. Impactful products, satisfied customers, developmental businesses are our service roadmap.</p>
            </div>
            <div className="w-1/2 hidden sm:block "><img src={Culture} className="  " /></div>
        </div>
                        {/**Our Clients Article */}
        <div className="flex gap-4 " >
        <div className="w-1/2 hidden sm:block "><img src={Clients} /></div>
            <div className="border-b-yellow-400 p-4 border-b-2 w-full sm:w-1/2 " >
                <h1 className="text-yellow-400 font-semibold text-2xl text-center">Our Clients</h1>
                <p className="text-lg " >We deliver outsourcing solutions to start-ups and businesses in all sectors such as solar energy, finance, logistic, healthcare, media, education, transportation, etc. Clients come to us with their ideas and we helps our clients implement initial ideas step by step to design and build applications (web, mobile, ...).</p>
           </div>        
       </div>
                            {/**Our Partners Article */}
        <div className="flex gap-4 " >
            <div className="border-b-yellow-400 p-4 border-b-2" >
                <h1 className="text-yellow-400 font-semibold text-2xl text-center">Our Partners</h1>
                <p className="text-lg " >We are building a long-term and trusted relationship with valuable partners. Here are Isosoft partners:</p>
            </div>
            <img src={Partners} className="hidden md:block  " />
        </div>

    </div>
    <div>
                            {/**Reasons why you should choose Isosoft */}
    <div className="text-slate-900 px-10 py-10 flex text-lg "  >
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className="lg:w-2/3 w-full p-10 bg-slate-100 rounded-lg " >
                  <h1 className="text-xl font-bold text-center">
                  Why choose Isosoft?</h1>      
            <li> Our project managers have extensive expertise with large, complicated projects involving dispersed teams and various vendors.</li>
            <li>We have an abundance of senior talent and a specialized human resources team to assist you at every stage of development..</li>
            <li>Transparent working process builds trust among employees and partners by making information available for accuracy checks</li>
            <li>Isosoft prioritizes keeping up with trends as part of our software development services to help firms maintain their relevance in their respective, competitive industry.</li>
           
        </ul>
        <div className="hidden lg:block" >
            <img src={Quality} />
        </div>

            </div>

    </div>
    <QuikeLinks/>
    <Footer/>

</div>
);

};
export default About;