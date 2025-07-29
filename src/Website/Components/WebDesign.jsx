import Portrait from "../../assets/AuAxBg.jpg";
import { Users,Sparkles, TrendingUp, CheckCircle } from "lucide-react";
import { Rating } from "@mantine/core";

function WebDesign() { 
    return (<>
        <div className="container mx-auto  flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-5 lg:px-8 gap-6 lg:gap-20 2xl:gap-24">
                        
                        <div  className="w-full lg:order-last relative lg:w-1/2 p-4 bg-light border border-dark/10 flex items-center justify-center   rounded-2xl">
                         <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-green-500/20 to-primary/20 rounded-2xl blur-xl transform scale-110"></div>
                            <div className="w-full relative lg:h-full  group">
                               
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
                                   <span className="text-dark">UI/UX</span>  Design
                                </h1>
                                <div className="h-[5px] rounded-full w-20 bg-gradient-to-r from-transparent to-dark"></div>
                                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-secondary">
                                    <div>
                                        <Rating value={5}/>
                                    </div>
                                    <p className="text-dark text-sm sm:text-base  leading-relaxed">
                                         With our exceptional UI/UX design services, we help you show off your brand's finest and exceed user expectations. Let’s collaborate to establish long-term customer retention strategic designs 
                                    </p>
                                </div>
                            </div>
        
                            {/* Features Section */}
                            <div className="p-2  flex flex-col ">
                                <h1 className="font-semibold mb-2 ">Priority Features :</h1>                        
                                <div className="flex flex-col text-sm md:text-lg gap-2">
                                    {/* User-Friendly Design */}
                                    <div className="flex items-center  gap-3  ">
                                        <div className="bg-secondary p-2 rounded-full">
                                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                        </div>
                                        <div>
                                            <span className="font-semibold  text-dark">
                                                User-Centered and Accessible
                                            </span>
                                            
                                        </div>
                                    </div>
        
                                    {/* Fast Loading Times */}
                                    <div className="flex gap-3 items-center ">
                                        <div className="p-2 bg-secondary  rounded-full">
                                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                        </div>
                                        <div>
                                            <span className="font-semibold  text-dark">
                                               Simple, Clean and Consistent
                                            </span>
                                            
                                        </div>
                                    </div>
        
                                    {/* Responsive Design */}
                                    <div className="flex items-center gap-3 ">
                                        <div className=" bg-secondary p-2 rounded-full">
                                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                        </div>
                                        <div>
                                            <span className="font-semibold  text-dark">
                                                Performance and Aesthetic Appeal
                                            </span>
                                            
                                        </div>
                                    </div>
        
                                    {/* Clear Call-to-Actions */}
                                    <div className="flex items-center gap-3 ">
                                        <div className="bg-secondary p-2 rounded-full">
                                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                        </div>
                                        <div>
                                            <span className="font-semibold  text-dark">
                                               Intuitive Navigation and Visual Hierarchy
                                            </span>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                              
                        
                    </div>
       
       
    </>

    );

};
export default WebDesign