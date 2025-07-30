import { Settings, Settings2,BrainIcon, Paperclip } from "lucide-react";
import { Rating } from "@mantine/core";
import Portrait from "../../assets/HeroBg.jpg";

function BizMgnt() {
    return (<>
        <div className="container mx-auto flex flex-col lg:flex-row py-8 sm:py-12 lg:py-16 px-2 gap-6 lg:gap-20 2xl:gap-24">
                               
                               <div  className="w-full lg:order-last relative lg:w-1/2 p-4 bg-light border border-dark/10 flex items-center justify-center   rounded-2xl">
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
                                          <span className="text-dark">Bussiness</span> Automation
                                       </h1>
                                       <div className="h-[5px] rounded-full w-32 bg-gradient-to-r from-transparent to-dark"></div>
                                       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 border-secondary">
                                           <div>
                                               <Rating value={5}/>
                                           </div>
                                           <p className="text-dark text-sm sm:text-base  leading-relaxed">
                                                Work smarter in Your bussiness  and bring about impeccable efficiency. Our services include CRM, tasks, document, project and time management, business process automation, team collaboration, corporate directory, HRMS, just to name a few.
                                           </p>
                                       </div>
                                   </div>
               
                                   {/* Features Section */}
                                   <div className="p-2  flex flex-col ">
                                       <h1 className="font-semibold mb-2 ">Priority Features : </h1>                        
                                       <div className="flex flex-col text-sm lg:text-[15px] gap-2">
                                           {/* User-Friendly Design */}
                                           <div className="flex items-center  gap-3  ">
                                               <div className="bg-secondary p-2 rounded-full">
                                                   <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                               </div>
                                               <div>
                                                   <span className="font-semibold  text-dark">
                                                       Workflow Automation,Automate tasks to reduce manual intervension.
                                                   </span>
                                                   
                                               </div>
                                           </div>
               
                                           {/* Fast Loading Times */}
                                           <div className="flex gap-3 items-center ">
                                               <div className="p-2 bg-secondary  rounded-full">
                                                   <Settings2 className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                               </div>
                                               <div>
                                                   <span className="font-semibold  text-dark">
                                                     Data Integration,ensuring seamless data exchange and synchronization.
                                                   </span>
                                                   
                                               </div>
                                           </div>
               
                                           {/* Responsive Design */}
                                           <div className="flex items-center gap-3 ">
                                               <div className=" bg-secondary p-2 rounded-full">
                                                   <BrainIcon className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                               </div>
                                               <div>
                                                   <span className="font-semibold  text-dark">
                                                      Rule-Based Decision Making minimizing the need for human input.
                                                   </span>
                                                   
                                               </div>
                                           </div>
               
                                           {/* Clear Call-to-Actions */}
                                           <div className="flex items-center gap-3 ">
                                               <div className="bg-secondary p-2 rounded-full">
                                                   <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-dark" />
                                               </div>
                                               <div>
                                                   <span className="font-semibold  text-dark">
                                                     Digital Document Management reducing paperwork and manual handling
                                                   </span>
                                                   
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                              </div>
                                     
                               
                           </div>
                           {/** <div className=" flex  py-10 md:px-16 px-6 gap-5 " >
            
            <div id="Article" className=" flex flex-col md:w-1/2 w-full ">
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
            
            <div id="Portrait" className="w-1/2 hidden md:block" >
                <img src={Portrait} className=" h-[390px] transition-all" />


            </div>

        </div>**/}
        
        

       
    </>

    );

};
export default BizMgnt