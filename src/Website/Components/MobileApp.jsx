import Portrait from "../../assets/MobileAppBg.jpg";
import { Users, Zap,Shield,TimerIcon } from "lucide-react";
import { Rating } from "@mantine/core";

function MobileApp() {   

    return (<main className="">
        {/**Top bg div  */}
       <div className="bg-gradient-to-br from-gray-50 via-slate-100 to-white flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-5 lg:px-8 gap-6 lg:gap-12">
                        
                        <div  className="w-full order-first  relative lg:w-1/2 p-4 bg-light border border-dark/10 flex items-center justify-center   rounded-2xl">
                         <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-green-500/20 to-primary/20 rounded-2xl blur-xl transform scale-110"></div>
                            <div className=" w-full relative h-full  group">
                               
                                <img 
                                    src={Portrait} 
                                    alt="Web Development Professional"
                                    className="lg:h-full h-56  object-center rounded-2xl shadow-sm" 
                                />
                                
                            </div>
                        </div>
        
                        {/** Web Development article div **/}
                        <div className="flex flex-col w-full lg:w-1/2 space-y-6">
                            <div className="space-y-4">
                                <h1 className="text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl  leading-tight">
                                   <span className="text-dark">Mobile App</span>  Development
                                </h1>
                                <div className="h-[5px] rounded-full w-36 bg-gradient-to-r from-transparent to-dark"></div>
                                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-secondary">
                                    <div>
                                        <Rating value={5}/>
                                    </div>
                                    <p className="text-dark text-sm sm:text-base  leading-relaxed">
                                        Isosoft designs highly practical, technologically transformational, feature-rich native mobile apps for consumers and enterprises. We'll oversee mobile app development from inception to delivery and maintenance.
                                    </p>
                                </div>
                            </div>
        
                            {/* Features Section */}
                            <div className="p-2  flex flex-col ">
                                <h1 className="font-semibold mb-2 ">Priority Features :</h1>                        
                                <div className="flex flex-col text-sm lg:text-lg gap-2">
                                    {/* User-Friendly Design */}
                                    <div className="flex items-center  gap-3  ">
                                        <div className="bg-secondary p-2 rounded-full">
                                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                        </div>
                                        <div>
                                            <span className="font-semibold  text-dark">
                                                User-Friendly and with simple Design
                                            </span>
                                            
                                        </div>
                                    </div>
        
                                    {/* Fast Loading Times */}
                                    <div className="flex gap-3 items-center ">
                                        <div className="p-2 bg-secondary  rounded-full">
                                            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                        </div>
                                        <div>
                                            <span className="font-semibold  text-dark">
                                               Fast Performance,Quick Loadtimes
                                            </span>
                                            
                                        </div>
                                    </div>
        
                                    {/* Responsive Design */}
                                    <div className="flex items-center gap-3 ">
                                        <div className=" bg-secondary p-2 rounded-full">
                                            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                        </div>
                                        <div>
                                            <span className="font-semibold  text-dark">
                                                Secure Authentications and data encription
                                            </span>
                                            
                                        </div>
                                    </div>
        
                                    {/* Clear Call-to-Actions */}
                                    <div className="flex items-center gap-3 ">
                                        <div className="bg-secondary p-2 rounded-full">
                                            <TimerIcon className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                        </div>
                                        <div>
                                            <span className="font-semibold  text-dark">
                                               Regular Updates to keep up with latest Technology
                                            </span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                              
                        
                    </div>
                    {/**
                     * <div className="bg-white flex  py-10 md:px-28 px-6 gap-20 " >
          
            <div id="Article" className=" flex flex-col md:w-2/3 w-full ">
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
           
            <div id="Portrait" className="w-1/2 hidden md:block" >
                <img src={Portrait} className="hover:scale-105 h-full  transition-all" />


            </div>

        </div>
                     */}
        
       
    </main>

    );

};
export default MobileApp;