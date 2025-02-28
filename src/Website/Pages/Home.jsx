import WebIcon from "../../assets/web.png";
import Hero from "../../assets/Dev2.jpg";
import { Link, animateScroll as scroll } from 'react-scroll'
import Voip from "../../assets/voip.png"
import Ui from "../../assets/UiDesign.png"
import MobileApp from "../../assets/MobileApp.png"
import BulkIcon from "../../assets/BulkIcon.jpg"
import React, { useEffect, useState } from "react";
import "../../App.css";
import Photo1 from "../../assets/Lemka.jpg";
import Photo2 from "../../assets/Spring.jpg";
import Photo3 from "../../assets/Bafrica.jpg";
import Photo4 from "../../assets/agape1.jpg";
import Estimate from "../Components/Estimate.jsx";
import Technologies from "../Components/Technologies.jsx";

//Typing and deliting animation of services text 
const texts = ["Web Development", "AU/AX Design", "Mobile App Development", "Business Management Solutions", "Bulk SMS Intergration"];

//Projects photos
const images = [Photo1, Photo2, Photo3, Photo4];

function Home() {

  //Title Divs Sliding from up and down respectively, Animation functionality 
  useEffect(() => {
    const company = document.getElementById('Company');
    company.classList.add('slide');

    const devs = document.getElementById('Developers');
    devs.classList.add('slide-in');

  }, []);

  //Projects Images slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);


  //Tittle Text Animation

  /**const [displayedText, setDisplayedText] = useState('');
const [index, setIndex] = useState(0);
const [deleting, setDeleting] = useState(false);
const text = 'Isosoft Softwares';

useEffect(() => {
const typingSpeed = 50;
const deletingSpeed = 50;

const handleTyping = () => {
if (!deleting) {
  if (index < text.length) {
    setDisplayedText((prev) => prev + text.charAt(index));
    setIndex((prev) => prev + 1);
  } else {
    setTimeout(() => setDeleting(true), 1000); // Pause before deleting
  }
} else {
  if (index > 0) {
    setDisplayedText((prev) => prev.slice(0, -1));
    setIndex((prev) => prev - 1);
  } else {
    setDeleting(false); // Restart the animation
    setIndex(0);
  }
}
};

const interval = setInterval(handleTyping, deleting ? deletingSpeed : typingSpeed);

return () => clearInterval(interval);
}, [index, deleting]);    **/


  //Services typing and deleting animations
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const currentIndexText = texts[loopNum % texts.length];
      if (isDeleting) {
        setCurrentText(currentIndexText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentText(currentIndexText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }

      if (!isDeleting && currentIndex === currentIndexText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, currentIndex]);

  return (
    <main className=" ">
      {/**Top home bg div*/}
      <article className="flex flex-row py-10 md:py-20 lg:px-16 px-4  bg-homeBg  bg-cover  " >
        <div className="flex w-full lg:gap-10 gap-1  ">

        <div className="w-[600px]  p-2  flex flex-col gap-5  " >
          {/**Title div */}
          <div id="Company" className=" "><h1 className="text-4xl  font-bold text-yellow-400 " >Isosoft Softwares  </h1>
            <p className="text-lg text-white leading-7 mb-10 " >Isosoft is a company that is comprised of a qualified team of talented ,passionate and skilled developers and designers that have the zeal to deliver the best and most cost-efficient tech services to our clients.</p></div>
          {/**Description and services animation div */}
          <div id="Developers" className="flex flex-col gap-4 md:gap-0" >

          <h1 className="text-2xl h-[40px] md:hidden font-bold text-yellow-400 " >Services: <span className="text-white">{currentText}</span>  <span className="blinking-cursor">|</span> </h1>

            <p className="text-lg text-white leading-7  " >Isosoft's team of  software developers will create long-term value with our excellent software development services. By using deep technical knowledge and industry-spanning experience, we facilitate strong, full-cycle support from the first market research and business analysis to the idea, production, and release..</p></div>

          <div className=" flex gap-3">
            {/**Links to project and estimation divs below the page */}
            <Link to="targetDiv" smooth={true} duration={1000} className="bg-yellow-400 hover:bg-yellow-300 p-2 text-slate-800 font-semibold rounded-md" >Projects</Link>
            <Link to="Estimate" smooth={true} duration={1000} ><button className="bg-yellow-400 hover:bg-yellow-300 p-2 text-slate-800 font-semibold rounded-md" >Estimate Project</button></Link>
          </div>
        </div> 
         {/**Hero section portrait and services */}
      <div  className=" hidden md:flex flex-col   w-[550px] p-7 gap-4  " >
        <div className="p-4" >
        <h1 className="text-2xl h-[40px] font-bold text-yellow-400 " >Services: <span className="text-white">{currentText}</span>  <span className="blinking-cursor">|</span> </h1>
        </div>

        <div className="p-2">
          <img src={Hero} className=" rounded-r-[160px] rounded-bl-[170px] " />
        </div>
      </div>

        </div>
        

        <div className="w-1/2 h-[400px] " >


        </div>

      </article>
      {/**Services Div **/}
      <div className="bg-gradient-to-b from-gray-200 from-20% via-gray-100 via-40% to-gray-50 to-90% ...  flex flex-col  items-center gap-10  py-6 md:px-20 px-3">
        <h1 className="text-yellow-400 text-3xl font-bold text-center " >Services Package</h1>
        {/**Services article div **/}
        <div className="md:w-2/3 w-full flex items-center justify-center ">
          <p className="text-center text-slate-800 ">At Isosoft, customer satisfaction is always our priority. We provide best services with cutting edge technology. Our tech stack is constantly evolving - We embrace new technology and we’re always learning. If you’re interested in a particular technology - just ask, we’ve probably used it!</p>
        </div>
        {/**Services themselves😂 **/}
        <div className=" md:flex grid grid-cols-1   md:gap-x-4 gap-4" >
          <div className="items-center flex flex-col bg-slate-200 border border-gray-300 md:w-1/5 w-full  p-6">
            <img src={WebIcon} className="h-36" />
            <h1 className="text-xl text-center text-slate-900 font-semibold" >Web Development</h1>
          </div>

          <div className="items-center flex flex-col bg-slate-200 border border-gray-300 md:w-1/5 w-full p-6">
            <img src={Ui} className="h-36" />
            <h1 className="text-xl text-center text-slate-900 font-semibold" >Web Design</h1>
          </div>

          <div className="items-center flex flex-col bg-slate-200 border border-gray-300 w-full md:w-1/5  p-4">
            <img src={MobileApp} className="h-36" />
            <h1 className="text-xl text-center text-slate-900 font-semibold" >Mobile Application</h1>
          </div>

          <div className="items-center flex flex-col bg-slate-200 border border-gray-300 w-full md:w-1/5  p-4">
            <img src={Voip} className="h-36" />
            <h1 className="text-xl text-center text-slate-900 font-semibold" >Business Management Solutions</h1>
          </div>

          <div className="items-center  flex flex-col bg-slate-200 border border-gray-300 w-full md:w-1/5  p-4">
            <img src={BulkIcon} className="h-36" />
            <h1 className="text-xl text-center font-semibold text-slate-900 " >Bulk SMS Intergration</h1>
          </div>

        </div>
        {/**Projects div **/}
        <div id="targetDiv"></div>
        <div className=" px-6   py-8">
          <h1 className="text-yellow-400 text-4xl font-bold " >Projects</h1>
          <div className=" h-full  w-full flex  flex-col lg:flex-row  gap-10" >

            <div className="flex flex-col gap-4 lg:w-1/2 w-full " >
              <p className="text-slate-900 text-lg" >Since the day of our birth, we are committed to delivering high-quality services to our clients, helping them grow their business at the world class level. Our services find no match around because we have a complete team of experts who know well how to finish their job with grace. Due to our high quality and affordable services, we have earned a very good reputation in the IT market and luckily we have constructed a solid line of loyal clients.</p>
              <div className="flex gap-7">
                <p className="text-slate-800 font-semibold flex flex-col items-center "> <span className="text-3xl text-yellow-400 font-semibold">20+</span> Projects delivered</p>
                <p className="text-gray-800 font-semibold flex flex-col items-center " > <span className="text-3xl text-yellow-400 font-semibold" >5+</span> Years of experience</p>
              </div>
              <a href="Projects" className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 p-3 flex  justify-center text-center  text-lg font-semibold"  >       Projects
              </a>
            </div>


            {/**Scrolling projects photos div */}

            <div className="w-full h-96 flex justify-center items-center overflow-hidden relative">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index}`}
                  className={`absolute transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ width: '600px', height: '400px' }}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
      <Technologies />
      <Estimate />


    </main>
  );

}
export default Home;