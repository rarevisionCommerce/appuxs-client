
import Logo from "/src/assets/Logo.png";
import React,{useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Web from "./assets/web.png";
import MobileApp from "./assets/MobileApp.png"
import Biz from "./assets/voip.png"
import Design from "./assets/UiDesign.png"

function Header(){

    const [menu, setmenu] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownLargeOpen, setIsDropdownLargeOpen] = useState(false);

            const closeDropDown = () =>{
                setIsDropdownOpen(false);
            }

            const openDropDown = () =>{
                setIsDropdownOpen(!isDropdownOpen);
            }

            const openDropDownLarge = () =>{
                setIsDropdownLargeOpen(!isDropdownLargeOpen);
            }

            const closeDropDownLarge = () =>{
                setIsDropdownLargeOpen(false);
            }

            const closeMenu = () => {
                setmenu(false);
            };

           



            //Transparent header which gain a Bg when i scroll
            const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //className={`text-white backdrop-blur-xl py-2  z-50  fixed right-0 left-0 top-0 transition-colors duration-300 ${scrolled ? 'bg-slate-900 bg-opacity-100' : 'bg-transparent'} `}
           

return(
<div>
<header className={`fixed w-full top-0 left-0 right-0 z-50 p-2 transition-colors duration-500 ${scrolled ? 'bg-slate-900 bg-opacity-90' : 'bg-transparent'}`} >
<section className="max-w-7xl   mx-auto px-3 flex justify-between items-center">
    <div className="text-2xl font-bold flex items-center gap-3">
        <img src={Logo} className="h-16 "/>
        <h1 className="text-yellow-500" ></h1>
        
    </div>
            {/**Small screen Navigation Menu **/}
    <div>
                             {/**Toggle and Close buttons for small screen Navigation menu  **/}
        <button onClick={()=>setmenu(!menu)} className="text-3xl text-white  sm:hidden focus:outline-none" id="mobile-open">
        {menu ? (
         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg" >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12">        
        </path>
         
       </svg>
           
          ) : (
        <svg
            className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 25 25 "
               xmlns="http://www.w3.org/2000/svg"
            >
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"            ></path>
            </svg>
          )}
        </button>

                             {/** Small screen  menu  **/}

        <div className={`sm:hidden absolute top-[80px] right-0 w-full bg-yellow-400 text-slate-900 flex flex-col items-center gap-3 font-semibold text-lg transform transition-transform ${ menu ? "block" : "hidden"} `} style={{transition : "transform 0.3s ease, opacity 0.3s ease"}}>
            <Link onClick={closeMenu} to="/" smooth={true} duration={1000}  className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Home</Link>

            <Link onClick={openDropDown} to="/" smooth={true} duration={1000} className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Services    </Link>


                            {/** Small screen Services links menu dropdown **/}
{isDropdownOpen && (
        <div
        className="  bg-gray-200 mt-[-15px] shadow-lg w-full"
        
        >
        <Link onClick={()=>{
           
            closeDropDown();
            closeMenu();
        }    
        } to="/WebDev" className="hover:bg-slate-900 text-slate-950 hover:text-white block px-4 py-3 ">
        <h1 className=" ">Web Development</h1>
        </Link>
        <Link onClick={()=>{
            
            closeDropDown();
            closeMenu();
        }    
        } to="WebDesign" className="  hover:bg-slate-900 text-slate-950 hover:text-white block px-4 py-3 ">
        <h1 className="  ">UI/UX Design</h1>
        </Link>
        <Link onClick={()=>{
            
            closeDropDown();
            closeMenu();
        }    
        }  to="BizMgnt" className="hover:bg-slate-900 hover:text-white block px-4 py-2 ">
        <h1 className=" hover:text-white text-slate-950">Business Management Solutions</h1>
        </Link>
        <Link onClick={()=>{
            
            closeDropDown();
            closeMenu();
        }    
        } to="MobileApp" className=" hover:bg-slate-900 hover:text-white block px-4 py-2 ">
        <h1 className=" hover:text-white text-slate-950">Mobile App Develpment</h1>
        </Link>

        <Link onClick={()=>{
            
            closeDropDown();
            closeMenu();
        }    
        } to="/Bulk" className=" hover:bg-slate-900 hover:text-white block px-4 py-2 ">
        <h1 className=" hover:text-white text-slate-950">Bulk SMS </h1>
        </Link>


        </div>
    )}


            <Link onClick={closeMenu} to="/About" smooth={true} duration={1000}  className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>About</Link>

            <Link onClick={closeMenu} to="/Projects" smooth={true} duration={1000}  className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Portfolio</Link>


            <Link onClick={closeMenu} to="/Contacts" smooth={true} duration={1000}  className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Contacts Us</Link>
            <Link onClick={closeMenu} to="/Faq" smooth={true} duration={1000}  className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>FAQ</Link>
        </div>


                                 {/**Large Screen navigation links menu  */}
        <nav className="hidden sm:block space-x-4 text-lg text-nowrap font-semibold" aria-label="main">
        <Link onClick={closeDropDownLarge} to="/" smooth={true} duration={1000} className="hover:opacity-90 text-white hover:bg-yellow-400   p-2 rounded-md">Home</Link>

                    {/**Services Link */}
        <Link   onClick={openDropDownLarge} className="hover:opacity-90   hover:bg-yellow-400 text-white p-2 rounded-md" >Services</Link>

                    {/**On-Mouse Services Menu with links **/}
{isDropdownLargeOpen && (
        <div
        className="absolute top-[73px] right-36 left-36 flex flex-col lg:grid lg:grid-cols-2 p-2 lg:p-10 lg:gap-7 gap-0 mt-2  bg-gray-100 text-slate-700  shadow-lg"
        
        >
        <Link onClick={closeDropDownLarge} to="/WebDev" className="block p-2 border-b-2 hover:bg-yellow-300 border-b-yellow-400 lg:bg-gray-50">
            <div className="flex  lg:p-5 gap-3">
                <div className="hidden xl:block"><img className="h-14 " src={Web} /></div>
                <div>
                    <h1 className="text-center text-slate-950">Web Development</h1>
                    <p className="text-sm hidden lg:block text-slate-600">Developing of robust and reliable Websites</p>
                </div>

            </div>
        </Link>
        <Link onClick={closeDropDownLarge} to="WebDesign" className="block p-2 hover:bg-yellow-300 border-b-2 border-b-yellow-400  lg:bg-gray-50">
            <div className="flex lg:p-5 gap-3">
                <div className="hidden xl:block"><img className="h-14 " src={MobileApp} /></div>
                <div>
                    <h1 className="text-center text-slate-950">UI/UX Design</h1>
                    <p className="text-sm hidden lg:block text-slate-600">Designing userfriendly and prophe</p>
                </div>

            </div>
        </Link>
        <Link onClick={closeDropDownLarge} to="BizMgnt" className="block hover:bg-yellow-300 h-full p-2 border-b-2 border-b-yellow-400  lg:bg-gray-50">
            <div className="flex lg:p-5 gap-3">
                <div className="hidden xl:block"><img className="h-14 " src={Biz} /></div>
                <div>
                    <h1 className="text-center text-slate-950">Business Management Solutions</h1>
                    <p className="text-sm hidden lg:block text-slate-600">Work smart  and efficiently with our Biz solutions.</p>
                </div>

            </div>
        </Link>
        <Link onClick={closeDropDownLarge} to="MobileApp" className="block hover:bg-yellow-300 p-2 border-b-2 border-b-yellow-400  lg:bg-gray-50">
            <div className="flex xl:p-5 gap-3">
                <div className="hidden xl:block" ><img className="h-14 " src={Design} /></div>
                <div>
                    <h1 className="text-center text-slate-950">Mobile App Develpment</h1>
                    <p className="text-sm hidden lg:block text-slate-600">Developing of fast and Strong mobile Apps</p>
                </div>

            </div>
        </Link>

        <Link onClick={closeDropDownLarge} to="/Bulk" className="block p-2 hover:bg-yellow-300 border-b-2 border-b-yellow-400  lg:bg-gray-50">
            <div className="flex lg:p-5 gap-3">
                <div className="hidden xl:block" ><img className="h-14 " src={Web} /></div>
                <div>
                    <h1 className="text-center text-slate-950  ">Bulk SMS </h1>
                    <p className="text-sm hidden lg:block text-slate-600">Quick and easy intergration of bulk SMS service</p>
                </div>

            </div>
        </Link>


        </div>
    )}


    <Link onClick={closeDropDownLarge} to="/About" smooth={true} duration={1000} className="hover:opacity-90  hover:bg-yellow-400 text-white  p-2 rounded-md">About</Link>
    <Link onClick={closeDropDownLarge} to="/Projects" smooth={true} duration={1000} className="hover:opacity-90   hover:bg-yellow-400 text-white p-2 rounded-md">Portfolio</Link>
    <Link onClick={closeDropDownLarge} to="/Contacts" smooth={true} duration={1000} className="hover:opacity-90   hover:bg-yellow-400 text-white p-2 rounded-md">Contact Us</Link>
    <Link onClick={closeDropDownLarge} to="/Faq" smooth={true} duration={1000} className="hover:opacity-90   hover:bg-yellow-400 text-white p-2 rounded-md">FAQ</Link>

    
    
        </nav>
    </div>
    <div className="hidden lg:block" >
       <Link to="Estimate" > <button className="bg-yellow-400 text-slate-700 text-lg font-semibold hover:bg-yellow-300 p-2 rounded-md" >Project Estiamte </button></Link>
    </div>
   
</section>
</header>
</div>
);

}


export default Header;