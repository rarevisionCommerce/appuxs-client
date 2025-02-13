import Instagram from "../../assets/Instagram.jpg";
import Mail from "../../assets/Mail.jpg";
import Footer from "../Components/Footer.jsx";
import Phone from "../../assets/Phone.jpg";
import React, {useState } from "react";
import QuikeLinks from "../Components/QuikeLinks.jsx";


function Contacts(){
                //Send Message  functionality
    const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);
    setInputValue("");
}
   
   return(<>
       

        <div  className='gap-6 py-20 flex flex-col bg-[url(./assets/conts.jpg)] bg-cover    '>
                <div className='flex  justify-center items-center'>
                        <p className="  font-semibold text-3xl underline underline-offset-8 "> Contacts</p>
                </div>
            
                <div className='grid md:grid-cols-2   gap-4 sm:px-20 px-5 mt-4'>
                            {/**Message box */} 
                <div id="ContactsDiv" className='   rounded-2xl backdrop-blur-[3px] border-2 border-solid border-slate-900 flex flex-col sm:p-5 p-2  gap-y-2'>
                            <p className='text-center text-2xl font-semibold underline-offset-8 underline'>Talk to us</p>
                            <p className="text-xl text-slate-600 text-center">Please enter your name and email address then share your idea with us.  </p>

                            <div className='flex flex-col   px-2 mb-4'>
                                <label className=' mb-2'>Name</label>
                                <input placeholder='enter your name' className='border-[1px] border-gray-400 rounded-md py-2 px-2 outline-none'/>
                            </div>


                            <div className='flex flex-col  mb-4 px-2 '>
                                <label className=' mb-2'>Enter your email address</label>
                                <input value={inputValue} onChange={setInputValue} className='border-[1px] border-gray-400 rounded-md py-2 px-2 outline-none ' placeholder='eg. example@gmail.com'/>
                            </div>                          

                                    <div className='justify-center flex '>
                                    <button onClick={handleButtonClick} className='bg-yellow-400  text-slate-700 font-semibold    rounded-md hover:bg-yellow-300 px-6 py-2'>Send Message</button>
                                    </div>
                              
                </div>
                            {/**Contact Info div */}
                    <div className='h-full md:pl-20 pl-1 '>
                        <p className='text-center text-2xl'>Contact info</p>

                        <div className='   '>
                        <div className='flex items-center gap-3 px-4 py-3'>
                            <img src={Phone} className='h-10 rounded-full'/>                           
                           <p>+254706181387</p>
                        </div>

                        <div className='flex items-center gap-3 px-4 py-3'>
                            <img src={Phone} className='h-10 rounded-full'/>
                           <p>+245742310701 </p>
                        </div>
                      
                        <div className='flex items-center gap-3 px-4 py-3'>
                            <img src={Mail} className='h-10 rounded-full'/>
                           <a>sales@isosoft.com</a>                      
                        </div>

                        <div className='flex items-center gap-3  px-4 py-3'>
                            <img src={Instagram} className='h-10 rounded-full'/>
                           <a>@Isosoft Softwares</a>
                        </div>

                        <div className=" ">
                            <h2 className="text-xl underline text-center">Location</h2>
                            <p className="">We are located in Juja</p>
                        </div>
                                                
                        </div>                                    
                    </div>                    
                </div>                
            </div>
       
        <QuikeLinks/>
    <Footer/>
    
        </>);
}

export default Contacts