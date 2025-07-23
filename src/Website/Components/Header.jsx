
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
            <img src={Logo} className="h-14 " />
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

                <Link onClick={openDropDown} to="/Services" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Services    </Link>             

                <Link onClick={closeMenu} to="/About" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>About</Link>

                <Link onClick={closeMenu} to="/Projects" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Portfolio</Link>


                <Link onClick={closeMenu} to="/Contacts" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>Contacts Us</Link>
                <Link onClick={closeMenu} to="/Faq" className='list-none w-full text-center p-4 hover:bg-slate-900 hover:text-white transition-all cursor-pointer'>FAQ</Link>
            </div>


            {/**Large Screen navigation links menu  */}
            <nav className="hidden sm:block space-x-4 text-lg text-nowrap font-semibold" aria-label="main">
                <Link  to="/" className="hover:opacity-90 text-white hover:bg-yellow-400   p-2 rounded-md">Home</Link>
                <Link to="Services" className="hover:opacity-90   hover:bg-yellow-400 text-white p-2 rounded-md" >Services</Link>  
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