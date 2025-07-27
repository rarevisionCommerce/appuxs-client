import Portrait from "../../assets/ecommerse.jpg";
import { ShoppingCart, CreditCard, Shield, Truck } from "lucide-react";
import { Rating } from "@mantine/core";
function Ecommerse() {
        return (<>
                       
           
            {/* Main Content Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-16 lg:px-8 gap-6 lg:gap-12">
               
                <div className="w-full order-first lg:order-last relative lg:w-1/2 p-4 bg-light border border-dark/5 flex items-center justify-center   rounded-2xl">
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
                           <span className="text-dark">E-Commerse</span> Systems
                        </h1>
                        <div className="h-[5px] rounded-full w-28 bg-gradient-to-r from-transparent to-dark"></div>
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-secondary">
                            <div>
                                <Rating value={4.2}/>
                            </div>
                            <p className="text-dark text-sm sm:text-base lg:text-lg leading-relaxed">
                                We build robust e-commerce platforms that drive sales and enhance customer shopping experiences with secure payment processing and intuitive product management.
                            </p>
                        </div>
                    </div>
                    {/* Features Section */}
                    <div className="p-2  flex flex-col ">  
                        <h1 className="font-semibold mb-2 ">Priority Features :</h1>                    
                        <div className="flex flex-col gap-2">
                            {/* Shopping Cart Management */}
                            <div className="flex items-center  gap-3  ">
                                <div className="bg-secondary p-2 rounded-full">
                                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        Advanced Shopping Cart Management
                                    </span>
                                   
                                </div>
                            </div>
                            {/* Payment Gateway Integration */}
                            <div className="flex gap-3 items-center ">
                                <div className="p-2 bg-secondary  rounded-full">
                                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        Multiple Payment Gateway Integration
                                    </span>
                                   
                                </div>
                            </div>
                            {/* Security & SSL */}
                            <div className="flex items-center gap-3 ">
                                <div className=" bg-secondary p-2 rounded-full">
                                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        SSL Security & Data Protection
                                    </span>
                                   
                                </div>
                            </div>
                            {/* Order Management */}
                            <div className="flex items-center gap-3 ">
                                <div className="bg-secondary p-2 rounded-full">
                                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                </div>
                                <div>
                                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dark">
                                        Order Tracking & Inventory Management
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
export default Ecommerse;