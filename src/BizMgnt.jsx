import Footer from "./Footer";
import QuikeLinks from "./QuikeLinks";
import Portrait from "./assets/BizMgtPortrait.jpg";
import React, {useEffect} from "react";
import "./App.css"
import Estimate from "./Estimate";



function BizMgnt(){
useEffect(() => {
          const company = document.getElementById('Article');
        company.classList.add('slide-faq');

        const devs = document.getElementById('Portrait');
        devs.classList.add('slide-pt');
               
        }, []);




    return(<main className=" ">
        <div className="bg-[url(./assets/BizMgtBg.jpg)] bg-center bg-cover  bg-no-repeat     h-[440px] " ></div>
        <div className="bg-gray-100 flex  py-10 md:px-16 px-6 gap-14 " >
                          {/** Web design article div**/}
            <div id="Article" className=" flex flex-col md:w-2/3 w-full ">
            <h1 className="text-yellow-400 font-bold text-4xl mb-4 " >Business Management Solutions</h1>
            <p className="text-slate-900 border-l-4 p-4 border-l-yellow-300">
            With Isosoft's business management solutions, you will be able to work smarter and bring about impeccable efficiency. Our services include CRM, tasks, document, project and time management, business process automation, team collaboration, corporate directory, HRMS, just to name a few.
            </p>
            <div className="text-slate-900 p-5 bg-yellow-400" >
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} >
                  <h1 className="text-xl font-bold text-center">Our Business management solutions will you help in:</h1>      
            <li> <span className="font-semibold text-lg" > Workflow Automation:</span> Automates repetitive tasks and sequences of tasks within workflows, reducing the need for manual intervention</li>
            <li> <span className="font-semibold text-lg" >Data Integration: </span>   Integrates data from various sources and systems, ensuring seamless data exchange and synchronization</li>
            <li><span className="font-semibold text-lg" >Rule-Based Decision Making:</span> Uses predefined rules to make decisions, minimizing the need for human input in routine decisions</li>
            <li><span className="font-semibold text-lg" >Document Management: </span> Digitizes, stores, and retrieves documents, reducing paperwork and manual handling</li>
           
        </ul>

            </div>
            </div>
                            {/** Web design portrait**/}
            <div id="Portrait" className="w-1/3 hidden md:block" >
                <img  src={Portrait} className=" h-[420px] transition-all" />
                    
                
            </div>

        </div>
       
<QuikeLinks/>
<Footer/>
    </main>

    );

};
export default BizMgnt