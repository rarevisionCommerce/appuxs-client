import Portrait from "../../assets/consultation.jpg";
import { Users, Brain, TrendingUp, CheckCircle } from "lucide-react";
import { Rating } from "@mantine/core";
function SoftwareConsultation() {
        return (<>
                       
           
            {/* Main Content Section */}
            <div className="container mx-auto flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-8 gap-6 lg:gap-20 2xl:gap-24">
               
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
                           <span className="text-dark">IT/Software</span> Consultation
                        </h1>
                        <div className="h-[5px] rounded-full w-28 bg-gradient-to-r from-transparent to-dark"></div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-secondary">
                            <div>
                                <Rating value={4.2}/>
                            </div>
                            <p className="text-dark text-sm sm:text-base lg:text-lg leading-relaxed">
                                Our expert IT consultation services help businesses optimize their technology infrastructure and make informed decisions about software solutions that drive growth and efficiency.
                            </p>
                        </div>
                    </div>
                    {/* Features Section */}
                    <div className="p-2  flex flex-col ">  
                        <h1 className="font-semibold mb-2 ">Priority Features :</h1>                    
                        <div className="flex flex-col gap-2">
                            {/* Expert Team Consultation */}
                            <div className="flex items-center  gap-3  ">
                                <div className="bg-secondary p-2 rounded-full">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        Expert Team Consultation
                                    </span>
                                   
                                </div>
                            </div>
                            {/* Strategic Planning */}
                            <div className="flex gap-3 items-center ">
                                <div className="p-2 bg-secondary  rounded-full">
                                    <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        Strategic Technology Planning
                                    </span>
                                   
                                </div>
                            </div>
                            {/* Performance Optimization */}
                            <div className="flex items-center gap-3 ">
                                <div className=" bg-secondary p-2 rounded-full">
                                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        System Performance Optimization
                                    </span>
                                   
                                </div>
                            </div>
                            {/* Implementation Support */}
                            <div className="flex items-center gap-3 ">
                                <div className="bg-secondary p-2 rounded-full">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        Full Implementation Support
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
export default SoftwareConsultation;