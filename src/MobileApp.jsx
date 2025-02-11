import Footer from "./Footer";
import QuikeLinks from "./QuikeLinks";
import Portrait from "./assets/MobileAppPortrait.jpg";
import React, {useEffect} from "react";
import "./App.css";



function MobileApp(){



useEffect(() => {
          const company = document.getElementById('Article');
        company.classList.add('slide-faq');

        const devs = document.getElementById('Portrait');
        devs.classList.add('slide-pt');
               
        }, []);


    return(<main className="">
        <div className="bg-[url(./assets/MobileAppBg.jpg)] bg-center  h-[440px]  " ></div>
        <div className="bg-gray-100 flex  py-10 md:px-28 px-6 gap-20 " >
                          {/** Mobile development article div**/}
            <div id="Article" className=" flex flex-col md:w-1/2 w-full ">
            <h1 className="text-yellow-400 font-bold text-4xl mb-4 " >Mobile App Development</h1>
            <p className="text-slate-900 border-l-4 p-4 border-l-yellow-300">
            Isosoft designs highly practical, technologically transformational, feature-rich native mobile apps for consumers and enterprises. We'll oversee mobile app development from inception to delivery and maintenance.
            </p>
            <div className="text-slate-900 p-5 bg-yellow-400" >
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} >
            <li> <span className="font-semibold text-lg" > User-Friendly Design:</span> Simple and intuitive design for easy navigation..</li>
            <li> <span className="font-semibold text-lg" >Fast Performance: </span>   Quick load times and smooth transitions..</li>
            <li><span className="font-semibold text-lg" >Security:</span>  Protects user data with encryption and secure authentication.</li>
            <li><span className="font-semibold text-lg" >Offline Functionality:</span> Allows access to certain features without an internet connection.</li>
            <li><span className="font-semibold text-lg" >Regular Updates:</span> Keeps the app up-to-date with new features and improvements.</li>
        </ul>

            </div>
            </div>
                            {/** Web design portrait**/}
            <div id="Portrait" className="w-1/2 hidden md:block" >
                <img  src={Portrait} className="hover:scale-105 h-full  transition-all" />
                    
                
            </div>

        </div>
<QuikeLinks/>
<Footer/>
    </main>

    );

};
export default MobileApp;