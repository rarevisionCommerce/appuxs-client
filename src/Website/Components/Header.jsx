
import Logo from "/src/assets/Logo.png";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Web from "../../assets/web.png";
import MobileApp from "../../assets/MobileApp.png"
import Biz from "../../assets/voip.png"
import Design from "../../assets/UiDesign.png"

function Header() {
    //Small screen open and close services menu functionality
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const closeDropDown = () => {
        setIsDropdownOpen(false);
    }

    const openDropDown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    //Large screen open and close services menu functionality
    const [isDropdownLargeOpen, setIsDropdownLargeOpen] = useState(false);
    const openDropDownLarge = () => {
        setIsDropdownLargeOpen(!isDropdownLargeOpen);
    }

    const closeDropDownLarge = () => {
        setIsDropdownLargeOpen(false);
    }
    //Small screen open and close navigation bar functionality
    const [menu, setmenu] = useState(false);
    const closeMenu = () => {
        setmenu(false);
    };





    //Transparent header which gain a Bg when You scroll
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


return (
<div>
<header className={`fixed w-full top-0 left-0 right-0 z-50 p-2 transition-colors duration-500 ${scrolled ? 'bg-slate-900 bg-opacity-90' : 'bg-transparent'}`} >
    <section className="max-w-7xl   mx-auto px-3 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-3">
            <img src={Logo} className="h-16 " />
            <h1 className="text-yellow-500" ></h1>

        </div>
        {/**Small screen Navigation Menu **/}
        <div>
            {/**Open and Close buttons for small screen Navigation menu  **/}
            <button onClick={() => setmenu(!menu)} className="text-3xl text-white  sm:hidden focus:outline-none" >
                {menu ? "✕" : "☰"}
            </button>

            {/** Small screen  menu  **/}

            <div className={`sm:hidden absolute top-[80px] right-0 w-full bg-yellow-400 text-slate-900 flex flex-col items-center gap-3 font-semibold text-lg transform transition-transform ${menu ? "block" : "hidden"} `} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
                <Link onClick={closeMenu} to="/" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Home</Link>

                <Link onClick={openDropDown} to="#" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Services    </Link>


                {/** Small screen Services links menu dropdown **/}
                {isDropdownOpen && (
                    <div
                        className="  bg-gray-200 mt-[-15px] shadow-lg w-full"

                    >
                        <Link onClick={() => { closeDropDown(); closeMenu(); }}


                            to="/Web-Development" className="hover:bg-slate-900 text-slate-950 hover:text-white block px-4 py-3 ">
                            <h1 className=" ">Web Development</h1>
                        </Link>
                        <Link onClick={() => {

                            closeDropDown();
                            closeMenu();
                        }
                        } to="/Web-Design" className="  hover:bg-slate-900 text-slate-950 hover:text-white block px-4 py-3 ">
                            <h1 className="  ">UI/UX Design</h1>
                        </Link>
                        <Link onClick={() => {

                            closeDropDown();
                            closeMenu();
                        }
                        } to="/Business-Management" className="hover:bg-slate-900 hover:text-white block px-4 py-2 ">
                            <h1 className=" hover:text-white text-slate-950">Business Management Solutions</h1>
                        </Link>
                        <Link onClick={() => {

                            closeDropDown();
                            closeMenu();
                        }
                        } to="/Mobile-App-Development" className=" hover:bg-slate-900 hover:text-white block px-4 py-2 ">
                            <h1 className=" hover:text-white text-slate-950">Mobile App Develpment</h1>
                        </Link>

                        <Link onClick={() => {

                            closeDropDown();
                            closeMenu();
                        }
                        } to="/Bulk-SMS-Intergration" className=" hover:bg-slate-900 hover:text-white block px-4 py-2 ">
                            <h1 className=" hover:text-white text-slate-950">Bulk SMS </h1>
                        </Link>


                    </div>
                )}   {/**End of small screen services links menu,,and the rest of the navigation links continue below */}


                <Link onClick={closeMenu} to="/About" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>About</Link>

                <Link onClick={closeMenu} to="/Projects" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Portfolio</Link>


                <Link onClick={closeMenu} to="/Contacts" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Contacts Us</Link>
                <Link onClick={closeMenu} to="/Faq" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>FAQ</Link>
            </div>


            {/**Large Screen navigation links menu  */}
            <nav className="hidden sm:block space-x-4 text-lg text-nowrap font-semibold" aria-label="main">
                <Link onClick={closeDropDownLarge} to="/" className="hover:opacity-90 text-white hover:bg-yellow-400   p-2 rounded-md">Home</Link>

                {/**Services Link */}
                <Link onClick={openDropDownLarge} className="hover:opacity-90   hover:bg-yellow-400 text-white p-2 rounded-md" >Services</Link>

                {/**Onclick Services Menu with links **/}
                {isDropdownLargeOpen && (
                    <div
                        className="absolute top-[70px] right-36 left-36 flex flex-col lg:grid lg:grid-cols-2 p-2 lg:p-10 lg:gap-7 gap-0 mt-2  bg-gray-100 text-slate-700  shadow-lg"

                    >
                        <Link onClick={closeDropDownLarge} to="/Web-Development" className="block p-2 border-b-2 hover:bg-yellow-300 border-b-yellow-400 lg:bg-gray-50">
                            <div className="flex  lg:p-5 gap-3">
                                <div className="hidden xl:block"><img className="h-14 " src={Web} /></div>
                                <div>
                                    <h1 className="text-center text-slate-950">Web Development</h1>
                                    <p className="text-sm hidden lg:block text-slate-600">Developing of robust and reliable Websites</p>
                                </div>

                            </div>
                        </Link>
                        <Link onClick={closeDropDownLarge} to="/Web-Design" className="block p-2 hover:bg-yellow-300 border-b-2 border-b-yellow-400  lg:bg-gray-50">
                            <div className="flex lg:p-5 gap-3">
                                <div className="hidden xl:block"><img className="h-14 " src={Design} /></div>
                                <div>
                                    <h1 className="text-center text-slate-950">UI/UX Design</h1>
                                    <p className="text-sm hidden lg:block text-slate-600">Designing userfriendly and prophe</p>
                                </div>

                            </div>
                        </Link>
                        <Link onClick={closeDropDownLarge} to="/Business-Management" className="block hover:bg-yellow-300 h-full p-2 border-b-2 border-b-yellow-400  lg:bg-gray-50">
                            <div className="flex lg:p-5 gap-3">
                                <div className="hidden xl:block"><img className="h-14 " src={Biz} /></div>
                                <div>
                                    <h1 className="text-center text-slate-950">Business Management Solutions</h1>
                                    <p className="text-sm hidden lg:block text-slate-600">Work smart  and efficiently with our Biz solutions.</p>
                                </div>

                            </div>
                        </Link>
                        <Link onClick={closeDropDownLarge} to="/Mobile-App-Development" className="block hover:bg-yellow-300 p-2 border-b-2 border-b-yellow-400  lg:bg-gray-50">
                            <div className="flex xl:p-5 gap-3">
                                <div className="hidden xl:block" ><img className="h-14 " src={MobileApp} /></div>
                                <div>
                                    <h1 className="text-center text-slate-950">Mobile App Develpment</h1>
                                    <p className="text-sm hidden lg:block text-slate-600">Developing of fast and Strong mobile Apps</p>
                                </div>

                            </div>
                        </Link>

                        <Link onClick={closeDropDownLarge} to="/Bulk-SMS-Intergration" className="block p-2 hover:bg-yellow-300 border-b-2 border-b-yellow-400  lg:bg-gray-50">
                            <div className="flex lg:p-5 gap-3">
                                <div className="hidden xl:block" ><img className="h-14 " src={Web} /></div>
                                <div>
                                    <h1 className="text-center text-slate-950  ">Bulk SMS </h1>
                                    <p className="text-sm hidden lg:block text-slate-600">Quick and easy intergration of bulk SMS service</p>
                                </div>

                            </div>
                        </Link>


                    </div>
                )}   {/**The end of large screen services menu links,,the rest of the large screen navigation links continue below */}


                <Link onClick={closeDropDownLarge} to="/About" smooth={true} duration={1000} className="hover:opacity-90  hover:bg-yellow-400 text-white  p-2 rounded-md">About</Link>
                <Link onClick={closeDropDownLarge} to="/Projects" smooth={true} duration={1000} className="hover:opacity-90   hover:bg-yellow-400 text-white p-2 rounded-md">Portfolio</Link>
                <Link onClick={closeDropDownLarge} to="/Contacts" smooth={true} duration={1000} className="hover:opacity-90   hover:bg-yellow-400 text-white p-2 rounded-md">Contact Us</Link>
                <Link onClick={closeDropDownLarge} to="/Faq" smooth={true} duration={1000} className="hover:opacity-90   hover:bg-yellow-400 text-white p-2 rounded-md">FAQ</Link>



            </nav>
        </div>
        {/**Project Estimate page Link */}
        <div className="hidden lg:block" >
            <Link to="Estimate" > <button className="bg-yellow-400 text-slate-700 text-lg font-semibold hover:bg-yellow-300 p-2 rounded-md" >Project Estiamte </button></Link>
        </div>

    </section>
</header>
</div>
);

}


export default Header;