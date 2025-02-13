import Footer from "../Components/Footer";
import QuikeLinks from "../Components/QuikeLinks";
import Spring from "../../assets/Spring.jpg"
import Lemka from "../../assets/Lemka.jpg"
import Bafrica from "../../assets/Bafrica.jpg"
import Agape from "../../assets/agape1.jpg"
import { Link, animateScroll as scroll } from 'react-scroll'


function Projects(){

    return(
        <>
        <main className="   flex    flex-col  " >
            
                <div className="flex inset-0 py-14    bg-[url(./assets/ProjectBg.jpg)] bg-no-repeat bg-cover bg-center    gap-10 " > 
               
                  
                <div className=" flex md:flex-row flex-col pb-3 gap-6 px-4 md:px-28 py-28  " >

                <div className="flex flex-col   gap-3 w-full md:w-1/2">
           
           <h2 className="text-4xl text-yellow-400 font-bold" >Projects</h2>
           <p className="text-white text-lg" >Since the day Isosoft was founded, as a moral commitment to our clients, we always do our best to deliver highest-quality IT services to help them grow their business at a world-class level. With talented teams full of software developing experts, we put customers' satisfaction with the 1st priority. Thanks to our fine and affordable services, we have gained a big reputation in the IT market and created a solid network of loyal customers.

       </p>
       <Link to="projects" smooth={true} duration={1000} className="flex " ><button className="bg-yellow-400 text-white p-2 w-full md:w-1/2 hover:bg-yellow-300  text-xl " >Our recent accomplishments</button></Link>
       </div>
      
               {/**Millage div **/}
       <div className="z-20" >
           <h1 className="text-center text-white text-2xl font-semibold" >Our Milage</h1>
       <div className="grid grid-cols-2 gap-10 p-8">
           <p className="text-gray-300 text-xl font-semibold flex flex-col items-center "> <span className="text-3xl text-yellow-400 font-semibold">20+</span> Projects delivered</p>
           <p className="text-gray-300 text-xl font-semibold flex flex-col items-center "> <span className="text-3xl text-yellow-400 font-semibold">150+</span> Working Hours</p>
           <p className="text-gray-300 font-semibold text-xl flex flex-col items-center "> <span className="text-3xl text-yellow-400 font-semibold">500+</span> Meetings</p>
           <p className="text-gray-300 font-semibold text-xl flex flex-col items-center "> <span className="text-3xl text-yellow-400 font-semibold">3-15</span> Technologies Applied</p>
               

           </div>
       </div>
                </div>
            
                </div>
          
          
                        {/**Examples of the projects **/}
            <div id="projects" className=" grid md:grid-cols-2 grid-cols-1  gap-7 px-4 md:px-32 py-16 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-50 ... " >

               
                            {/**Lemka div */}
                <div  className="bg-gray-100" >
                    <div  ><img  src={Lemka} /></div>
                    <div className="p-4 flex flex-col gap-3 " >
                    <p>
                    Lemka Real Estate Management Software is a comprehensive solution designed to automate and streamline the operations of real estate businesses. It offers features such as property listing management, lead management, contract management and more. With a user-friendly interface and customizable settings, it's tailored to meet the unique needs of different real estate companies and their agents. It also integrates with other business tools to provide a complete end-to-end solution.
                    </p>
                   <a> <button className="bg-yellow-400 px-4 rounded-lg py-2 font-bold" >Visit</button></a>
                    </div>
                   
                </div>
                        {/**Builders Africa div */}
                <div  className="bg-gray-100" >
                    <div><img src={Bafrica} /></div> 
                    <div className="p-5 flex flex-col gap-3 justify-between " ><p>
                    Builders is an O2O industrial Internet platform for global real estate, engineering, building materials, equipment and design industry chain.
                    </p>
                    <a><button className="bg-yellow-400 px-4 rounded-lg py-2 font-bold" >Visit</button></a>
                    </div>
                </div>

                    {/**Springs Hotel div */}
<div className="bg-gray-100" >
    <div > <img src={Spring} /></div>
    <div className="p-5 flex flex-col gap-3" >
    <p>
    Spring Hotel Management Software is a comprehensive solution designed to streamline the operations of hotels and other lodging establishments. It offers features such as front-desk management, room management, booking management, and more.
    </p>
    <a><button className="bg-yellow-400 px-4 rounded-lg py-2 font-bold" >Visit</button></a>

    </div>
</div>
                    {/**Agape writing solution div */}
                <div className="bg-gray-100 flex" >
                    <div className="p-3  w-1/2" ><img  src={Agape}  className="h-[400px] " /></div>
                    <div className=" flex w-1/2 flex-col gap-3 " >
                    <p>
                    Agape Writting Services is an Ultimate Destination for Online Classes and Assignment Help.They Offer services such as Essay Writing,Expert Assignment editing,Dissertation writing,Online Class Help among others
                    </p>
                   <a target="blank" href="https://agapewritingservice.com/" > <button className="bg-yellow-400 px-4 rounded-lg py-2 font-bold" >Visit</button></a>
                    </div>
                   
                </div>


                


            </div>


        </main>
        <QuikeLinks/>
        <Footer/>

        </>
    );

}
export default Projects