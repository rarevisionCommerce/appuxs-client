import Footer from "./Footer";
import QuikeLinks from "./QuikeLinks";
import Portrait from "./assets/BulkPortrait.jpg";
import React, {useEffect} from "react" ;
import "./App.css";



function BulkSMS(){

useEffect(() => {
          const company = document.getElementById('Article');
        company.classList.add('slide-faq');

        const devs = document.getElementById('Portrait');
        devs.classList.add('slide-pt');
               
        }, []);



    return(<main className=" ">
        <div className="bg-[url(./assets/BulkBG.jpg)]   h-[440px] bg-cover bg-center bg-no-repeat " ></div>
        <div className="bg-gray-100 flex py-10 md:px-24 p-6 gap-12 " >
                          {/** Bulk sms article div**/}
            <div id="Article" className=" flex flex-col md:w-1/2 w-full ">
            <h1 className="text-yellow-400 font-bold text-4xl mb-4 " >Bulk SMS  Intergration</h1>
            <p className="text-slate-900 border-l-4 p-4 border-l-yellow-300">
                Do you want to improve the communication capabilities of your mobile device or web app or even update your customers? Look no further than our Bulk SMS services! With our trusted service, you can easily add text messaging functionality to your app or business and seamlessly communicate with your users or customers in real-time.
            </p>
            <p className="text-slate-900 p-5 bg-yellow-300" >
                Our platorm allows you to send messages to multiple phone numbers at once, instantly reaching all your users. Whether you need to send notifications or alerts, our Bulk SMS services are the perfect solution for your needs.
            </p>
            </div>
                            {/** Bulk sms portrait**/}
            <div id="Portrait" className="w-1/2 hidden md:block " >
                <img  src={Portrait} className="hover:scale-105 h-[340px] transition-all" />
                    
                
            </div>

        </div>
<QuikeLinks/>
<Footer/>
    </main>

    );

};
export default BulkSMS