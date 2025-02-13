import Footer from "../Components/Footer.jsx";
import QuikeLinks from "../Components/QuikeLinks.jsx";
import Portrait from "../../assets/BizMgtPortrait.jpg";
import React, { useEffect } from "react";
import "../../App.css"




function BizMgnt() {
    useEffect(() => {
        //Business Management article sliding div functionality 
        const company = document.getElementById('Article');
        company.classList.add('slide-faq');
        //Business management portrait sliding div functionality
        const devs = document.getElementById('Portrait');
        devs.classList.add('slide-pt');

    }, []);




    return (<main className=" ">
        {/**Top bg div  */}
        <div className="bg-bizManagementBg bg-center bg-cover  bg-no-repeat     h-[440px] " ></div>
        <div className=" flex  py-10 md:px-16 px-6 gap-5 " >
            {/** Business management  article div**/}
            <div id="Article" className=" flex flex-col md:w-1/2 w-full ">
                <h1 className="text-yellow-400 font-bold text-4xl mb-4 " >Business Management Solutions</h1>
                <p className="text-slate-900 border-l-4 p-4 border-l-yellow-300">
                    With Isosoft's business management solutions, you will be able to work smarter and bring about impeccable efficiency. Our services include CRM, tasks, document, project and time management, business process automation, team collaboration, corporate directory, HRMS, just to name a few.
                </p>
                <div className="text-slate-900 p-5 bg-yellow-400" >
                    {/**List of packages that come with our business management solutions */}
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} >
                        <h1 className="text-xl font-bold text-center">Our Business management solutions will you help in:</h1>
                        <li> <span className="font-semibold text-lg" > Workflow Automation:</span> Automates repetitive tasks and sequences of tasks within workflows, reducing the need for manual intervention</li>
                        <li> <span className="font-semibold text-lg" >Data Integration: </span>   Integrates data from various sources and systems, ensuring seamless data exchange and synchronization</li>
                        <li><span className="font-semibold text-lg" >Rule-Based Decision Making:</span> Uses predefined rules to make decisions, minimizing the need for human input in routine decisions</li>
                        <li><span className="font-semibold text-lg" >Document Management: </span> Digitizes, stores, and retrieves documents, reducing paperwork and manual handling</li>

                    </ul>

                </div>
            </div>
            {/** Business Management portrait**/}
            <div id="Portrait" className="w-1/2 hidden md:block" >
                <img src={Portrait} className=" h-[390px] transition-all" />


            </div>

        </div>

        <QuikeLinks />
        <Footer />
    </main>

    );

};
export default BizMgnt