import { Users,CheckCircle, Clock2Icon, MessageCircleCode} from "lucide-react";
import { Rating } from "@mantine/core";
import Portrait from "../../assets/BulkBG.jpg";

function BulkSMS() {
    return (<>
        {/**Top bg div  */}
        <div className="container mx-auto flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16 px-2  gap-6 lg:gap-20 2xl:gap-24 ">
                                
                                <div  className="w-full order-first relative lg:w-1/2 p-4 bg-light border border-dark/10 flex items-center justify-center   rounded-2xl">
                                 <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-green-500/20 to-primary/20 rounded-2xl blur-xl transform scale-110"></div>
                                    <div className=" w-full relative h-full  group">
                                       
                                        <img 
                                            src={Portrait} 
                                            alt="Web Development Professional"
                                            className="h-56 lg:h-full object-center rounded-2xl shadow-sm" 
                                        />
                                        
                                    </div>
                                </div>
                
                                {/** Web Development article div **/}
                                <div className="flex flex-col w-full lg:w-1/2 space-y-6">
                                    <div className="space-y-4">
                                        <h1 className="text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl  leading-tight">
                                           <span className="text-dark">Bulk SMS</span>  Intergration
                                        </h1>
                                        <div className="h-[5px] rounded-full w-32 bg-gradient-to-r from-transparent to-dark"></div>
                                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-secondary">
                                            <div>
                                                <Rating value={4}/>
                                            </div>
                                            <p className="text-dark text-sm sm:text-base  leading-relaxed">
                                                 Do you want to improve the communication capabilities of your mobile device or web app or even update your customers? Look no further than our Bulk SMS services! With our trusted service, you can easily add text messaging functionality to your app or business and seamlessly communicate with your users or customers in real-time.
                                            </p>
                                        </div>
                                    </div>
                
                                    {/* Features Section */}
                                    <div className="p-2  flex flex-col ">
                                                              
                                        <div className="flex flex-col text-sm lg:text-lg gap-2">
                                            {/* User-Friendly Design */}
                                            <div className="flex items-center  gap-3  ">
                                                <div className="bg-secondary p-2 rounded-full">
                                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold  text-dark">
                                                        Send messages to multiple phone numbers at once
                                                    </span>
                                                    
                                                </div>
                                            </div>
                
                                            {/* Fast Loading Times */}
                                            <div className="flex gap-3 items-center ">
                                                <div className="p-2 bg-secondary  rounded-full">
                                                    <Clock2Icon className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold  text-dark">
                                                      Messages instantly reaching all your users
                                                    </span>
                                                    
                                                </div>
                                            </div>
                
                                            {/* Responsive Design */}
                                            <div className="flex items-center gap-3 ">
                                                <div className=" bg-secondary p-2 rounded-full">
                                                    <MessageCircleCode className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold  text-dark">
                                                       You can Send notifications or alerts
                                                    </span>
                                                    
                                                </div>
                                            </div>
                
                                            {/* Clear Call-to-Actions */}
                                            <div className="flex items-center gap-3 ">
                                                <div className="bg-secondary p-2 rounded-full">
                                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                                </div>
                                                <div>
                                                    <span className="font-semibold  text-dark">
                                                      Best Bulk SMS services
                                                    </span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                                      
                                
                            </div>
        {/**<div className="bg-white flex py-10 md:px-24 p-6 gap-12 " >
            
            <div id="Article" className=" flex flex-col md:w-1/2 w-full ">
                <h1 className="text-yellow-400 font-bold text-4xl mb-4 " >Bulk SMS  Intergration</h1>
                <p className="text-slate-900 border-l-4 p-4 border-l-yellow-300">
                    Do you want to improve the communication capabilities of your mobile device or web app or even update your customers? Look no further than our Bulk SMS services! With our trusted service, you can easily add text messaging functionality to your app or business and seamlessly communicate with your users or customers in real-time.
                </p>
                <p className="text-slate-900 p-5 bg-yellow-300" >
                    Our platorm allows you to send messages to multiple phone numbers at once, instantly reaching all your users. Whether you need to send notifications or alerts, our Bulk SMS services are the perfect solution for your needs.
                </p>
            </div>
           
            <div id="Portrait" className="w-1/2 hidden md:block " >
                <img src={Portrait} className="hover:scale-105 h-[340px] transition-all" />


            </div>

        </div> */}
        
        
    </>

    );

};
export default BulkSMS