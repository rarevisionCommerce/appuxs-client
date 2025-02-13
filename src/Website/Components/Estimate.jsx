import QuikeLinks from "./QuikeLinks.jsx";
import Footer from "./Footer.jsx"; 
import EstimatePortrait from "../../assets/EstP.jpg";

function Estimate(){

    return(<>
        <div id="Estimate" className="flex pt-[100px] bg-[url(./assets/Estimate-bg.jpg)] bg-cover ">
            <div className="hidden w-1/3 bg-gradient-to-b from-blue-200 via-blue-200 to-gray-300 ...  lg:flex  flex-col gap-y-5 py-16 px-2 ">
                <h1 className="text-2xl font-semibold">Estimate Your Project!</h1>
                <p>Got an Idea ? We can help you realize it.</p>
                <img src={EstimatePortrait} className="h-72" />
                <div className="flex justify-center items-center">
            </div>
                
            </div>
            <div className="h-full  lg:w-2/3 w-full flex flex-col justify-center items-center  ">
            <h1 className="text-slate-900 text-2xl font-semibold">Estimate Your Project</h1>
            
                    {/**Estimation form **/}
            
            <div className="bg-slate-50 border border-gray-300 rounded-lg flex flex-col md:px-4 px-4 py-6 h-full w-3/4">
                     
            <div className="flex flex-col mt-5  gap-y-1">
                <label> Name*</label>
                <input type="text"  className="p-2 border outline-none  border-gray-300 rounded-md"/>
            </div>

           

            <div className="flex flex-col mt-5 gap-y-1">
                <label>Email*</label>
                <input type="text"  className="p-2 border outline-none  border-gray-300 rounded-md"/>
            </div>

           

            <div className="flex flex-col mt-5 gap-y-1">
                <label>Phone Number*</label>
                <input type="text" placeholder="eg. Starts with +254 7..." className="p-2 border border-gray-300 outline-none rounded-md"/>
            </div>
                            {/**Project type selection **/}
                <div className="py-2">
                    <h1 className="tetx-lg font-semibold" >What type is Your Project type?</h1>
                    <div className="flex flex-col md:flex-row md:gap-3 gap-0" >
                        <div className="flex gap-1">
                            <input type="checkbox"/>
                            <label>Web Development</label>
                        </div>

                        <div className="flex gap-1" >
                            <input type="checkbox"/>
                            <label>Mobile App </label>
                        </div>

                        <div className="flex gap-1" >
                            <input type="checkbox"/>
                            <label>Business and E-commerce</label>
                        </div>

                        <div className="flex gap-1">
                            <input type="checkbox"/>
                            <label>Other</label>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5 gap-y-1">
                <label> Briefly Illustrate your Idea</label>
                <textarea   className="p-2 border outline-none  border-gray-300 rounded-md"/>
            </div>
                </div>
                                        {/**Amount selection */}
     
                <div className="py-2">
                    <h1 className="tetx-lg font-semibold" >Select amount in your budget</h1>
                    <div className="flex flex-col md:flex-row md:gap-3 gap-0" >
                        <div className="flex gap-1">
                            <input type="checkbox"/>
                            <label>Less than Ksh 100k</label>
                        </div>

                        <div className="gap-1 flex" >
                            <input type="checkbox"/>
                            <label>Ksh 100k-Ksh 250k </label>
                        </div>

                        <div className="flex gap-1" >
                            <input type="checkbox"/>
                            <label>Above Ksh 250k</label>
                        </div>

                        <div className="gap-1 flex" >
                            <input type="checkbox"/>
                            <label>Other price</label>
                        </div>
                    </div>
                   
                </div>
                            {/**Project timeline selection */}
                <div className="py-2">
                    <h1 className="tetx-lg font-semibold" >What is your expected project timeline?</h1>
                    <div className="flex flex-col md:flex-row md:gap-3 gap-0" >
                        <div className="flex gap-1">
                            <input type="checkbox"/>
                            <label>Less than 2 months</label>
                        </div>

                        <div className="flex gap-1">
                            <input type="checkbox"/>
                            <label>2-4 months </label>
                        </div>

                        <div className="flex gap-1 " >
                            <input type="checkbox"/>
                            <label>4-6 months</label>
                        </div>

                        <div className="flex gap-1" >
                            <input type="checkbox"/>
                            <label>Over 6 months</label>
                        </div>
                    </div>
                   
                </div>

                <div className="flex items-center justify-center"><button className="bg-yellow-400  p-2 text-slate-900
                 rounded-sm hover:bg-slate-900 hover:text-yellow-400 font-semibold ">Submit</button></div>

            
                
            </div>
            
            </div>


        </div>

      <QuikeLinks/>
        <Footer/>   
        </>);
   

}
export default Estimate;