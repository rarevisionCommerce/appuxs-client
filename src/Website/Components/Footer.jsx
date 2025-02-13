import Logo from "../../assets/Logo.png";
import React from "react";
import Instagram from "../../assets/Instagram.jpg";
import Mail from "../../assets/Mail.jpg";

function Footer(){

   return(
<div className="bg-slate-900 py-1 flex justify-around items-center  relative bottom-0 right-0 left-0">

        <div className=" flex  text-white text-xl items-center">
            <img className="h-14 " src={Logo}/>
        
        </div>
        <div className="hidden  sm:flex  gap-x-4">
            <a href="https://www.instagram.com/gachora_kimani?igsh=Z2M2Mm92aW00ZWk5" ><img src={Instagram} className="h-8 rounded-full"/></a>
           <a><img src={Instagram} className="h-8 rounded-full"/></a>
            <a target="blank" href="https://mail.google.com/mail/u/0/#inbox" ><img src={Mail} className="h-8 rounded-full"/> </a>
            
        </div>
    <p className="text-center text-white"> All Rights Reserved! {new Date().getFullYear()}&copy;</p>
    
</div>
);
};

export default Footer