import Footer from "../Components/Footer";
import QuikeLinks from "../Components/QuikeLinks";
import Portrait from "../../assets/WebDevPortrait.jpg";
import React, { useEffect } from "react";
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

    return (<main className=" ">
        <div className="bg-webDevBg bg-center bg-cover h-[440px] " ></div>
        <div className="bg-white flex  py-10 md:px-24 px-6 gap-6 " >
            {/** Web Developmemt article div**/}
            <div id="Article" className=" flex flex-col md:w-1/2 w-full ">
                <h1 className="text-yellow-400 font-bold text-4xl mb-4 " >Web Developmemt</h1>
                <p className="text-slate-900 border-l-4 p-4 border-l-yellow-300">
                    Our web application development services make it easier to create, update, and maintain software applications that run on the web. By working with Developers, you can speed up the growth of your user base, get access to new digital channels, improve your conversion rate, and reach other business goals faster
                </p>
                <div className="text-slate-900 p-5 bg-yellow-400" >
                    {/**List of features that our websites come with  */}
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} >
                        <li> <span className="font-semibold text-lg" > User-Friendly Design:</span> Ensures that visitors can easily navigate and find what they need.</li>
                        <li> <span className="font-semibold text-lg" >Fast Loading Times:</span>  Keeps visitors engaged and reduces bounce rates.</li>
                        <li><span className="font-semibold text-lg" >Responsive Design:</span>  Adapts to different devices and screen sizes for a seamless user experience.</li>
                        <li><span className="font-semibold text-lg" >Clear Call-to-Actions:</span> Encourage users to take the next step, such as signing up or making a purchase.</li>
                    </ul>
                </div>
            </div>
            {/** Web development portrait**/}
            <div id="Portrait" className="w-1/2 hidden md:block" >
                <img src={Portrait} className="hover:scale-105 h-full rounded-xl transition-all" />


            </div>

        </div>
        <QuikeLinks />
        <Footer />
    </main>

    );

};
export default WebDev