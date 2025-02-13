import Footer from "../Components/Footer";
import QuikeLinks from "../Components/QuikeLinks";
import Portrait from "../../assets/WebDesignPortrait.jpg";
import React, { useEffect } from "react";
import "../../App.css";



function WebDesign() {

    useEffect(() => {
        //Web design article slide in animation functionality
        const company = document.getElementById('Article');
        company.classList.add('slide-faq');
        //Web design Portrait slide in animation functionality
        const devs = document.getElementById('Portrait');
        devs.classList.add('slide-pt');

    }, []);


    return (<main className=" ">
        <div className="bg-webDeisgnBg  bg-center   h-[440px]   " ></div>
        <div className="bg-gray-50 flex  py-10 md:px-28 px-6 gap-20 " >
            {/** Web design article div**/}
            <div id="Article" className=" flex flex-col md:w-2/3 w-full ">
                <h1 className="text-yellow-400 font-bold text-4xl mb-4 " >UI/UX Design</h1>
                <p className="text-slate-900 border-l-4 p-4 border-l-yellow-300">
                    With our exceptional UI/UX design services, we help you show off your brand's finest and exceed user expectations. Let’s collaborate to establish long-term customer retention strategies and real, human-centered brand identities that have a direct impact on today's digital landscape.
                </p>
                <div className="text-slate-900 p-5 bg-yellow-400" >
                    {/**List of features that our designs come with */}
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} >
                        <h1 className="text-xl font-bold text-center">We help you build UI/UX Designs  with:</h1>
                        <li> <span className="font-semibold text-lg" > User-Centered and Accessible:</span> Prioritize user needs and ensure the design is usable for everyone, including individuals with different abilities.</li>
                        <li> <span className="font-semibold text-lg" >Simplicity and Consistency:</span>  Create a clean, straightforward interface with consistent use of design elements across all screens.</li>
                        <li><span className="font-semibold text-lg" >Responsiveness and Feedback:</span>  Provide immediate feedback for user actions and ensure the interface is responsive across different devices and screen sizes.</li>
                        <li><span className="font-semibold text-lg" >Intuitive Navigation and Visual Hierarchy:</span> Guide users’ attention with a logical arrangement and emphasis on important elements, making navigation easy and intuitive.</li>
                        <li><span className="font-semibold text-lg" >Performance and Aesthetic Appeal:</span> Optimize for quick load times and smooth interactions while maintaining an attractive and visually pleasing design.</li>
                    </ul>
                </div>
            </div>
            {/** Web design portrait**/}
            <div id="Portrait" className="w-1/3 hidden md:flex md:items-center md:justify-center" >
                <img src={Portrait} className=" h-[440px] w-[430px] transition-all" />


            </div>

        </div>
        <QuikeLinks />
        <Footer />
    </main>

    );

};
export default WebDesign