import Portrait from "../../assets/WebDevPortrait.jpg";
import { Users, Zap, Smartphone, MousePointer } from "lucide-react";
import { Rating } from "@mantine/core";

function WebDev() {
        return (<>
                       
            
            {/* Main Content Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-8 gap-6 lg:gap-12">
                
                <div className="w-full order-first  relative lg:w-1/2 p-4 bg-light border border-dark/5 flex items-center justify-center   rounded-2xl">
                 <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-green-500/20 to-primary/20 rounded-2xl blur-xl transform scale-110"></div>
                    <div className=" w-full relative h-full  group">
                       
                        <img 
                            src={Portrait} 
                            alt="Web Development Professional"
                            className=" h-full object-cover rounded-2xl shadow-sm" 
                        />
                        
                    </div>
                </div>

                {/** Web Development article div **/}
                <div className="flex flex-col w-full lg:w-1/2 space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-secondary font-bold text-2xl sm:text-3xl lg:text-4xl  leading-tight">
                           <span className="text-dark">Web</span>  Development
                        </h1>
                        <div className="h-[5px] rounded-full w-28 bg-gradient-to-r from-transparent to-dark"></div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-secondary">
                            <div>
                                <Rating value={4.2}/>
                            </div>
                            <p className="text-dark text-sm sm:text-base lg:text-lg leading-relaxed">
                                Our web application development services make it easier to create, update, and maintain software applications that run on the web.
                            </p>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="p-2  flex flex-col ">   
                        <h1 className="font-semibold mb-2 ">Priority Features :</h1>                     
                        <div className="flex flex-col gap-2">
                            {/* User-Friendly Design */}
                            <div className="flex items-center  gap-3  ">
                                <div className="bg-secondary p-2 rounded-full">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        User-Friendly Design
                                    </span>
                                    
                                </div>
                            </div>

                            {/* Fast Loading Times */}
                            <div className="flex gap-3 items-center ">
                                <div className="p-2 bg-secondary  rounded-full">
                                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        Fast Loading Times
                                    </span>
                                    
                                </div>
                            </div>

                            {/* Responsive Design */}
                            <div className="flex items-center gap-3 ">
                                <div className=" bg-secondary p-2 rounded-full">
                                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        All Screens Responsive Design
                                    </span>
                                    
                                </div>
                            </div>

                            {/* Clear Call-to-Actions */}
                            <div className="flex items-center gap-3 ">
                                <div className="bg-secondary p-2 rounded-full">
                                    <MousePointer className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        Clear Call-to-Actions Sections
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                
            </div>

            
       </>
    );
}

export default WebDev;