import Logo from "./assets/Logo.png";
import {Link} from 'react-router-dom';

function QuikeLinks(){

    return(
        <>
        <div className=" md:flex block bg-slate-800 gap-4 p-10" >
            <div className="md:w-1/4 w-full grid" > 
                <img src={Logo} className="h-20" />
                <p className="text-white text-lg">Your reliable partner in software development servises.</p>
            </div>
                    {/**Quik Links **/}
            <div className="flex flex-col gap-2 w-full md:w-1/4">
                <h1 className="bg-yellow-400 font-semibold p-2 text-center rounded-tr-2xl rounded-bl-2xl" >Quik Links</h1>
                <Link to="/" className="text-white hover:text-yellow-400" >Home</Link>
                <Link to="/About" className="text-white hover:text-yellow-400" >About</Link>
                <Link to="/Projects" className="text-white hover:text-yellow-400" >Portfolio</Link>
                <Link to="/Contacts" className="text-white hover:text-yellow-400" >Contacts</Link>
                <Link to="/Faq" className="text-white hover:text-yellow-400" >Frequently Asked Questions</Link>
            </div>
                    {/**Services Link **/}
            <div className="flex flex-col gap-2 w-full md:w-1/4">
                <h1 className="bg-yellow-400 font-semibold p-2 text-center rounded-tr-2xl rounded-bl-2xl" >Services</h1>
                <Link to="/WebDev" className="text-white hover:text-yellow-400" >Web Development</Link>
                <Link to="/WebDesign" className="text-white hover:text-yellow-400" >Web Design</Link>
                <Link to="/MobileApp" className="text-white hover:text-yellow-400" >Mobile App Development</Link>
                <Link to="/BizMgnt" className="text-white hover:text-yellow-400" >Business Management Solutions</Link>
                <Link to="/Bulk" className="text-white hover:text-yellow-400" >Bulk SMS Intergration</Link>
            </div>
                    {/**Info **/}
                    <div className="flex flex-col gap-2 w-full md:w-1/4">
                <h1 className=" font-semibold p-2 text-white text-xl rounded-tr-2xl rounded-bl-2xl" > Info:</h1>
                <p className="text-white " >Spur Mall,Kimbo Juja </p>
                <p className="text-white " >info@isosoft.com</p>
                <p className="text-white " >0706181387</p>
                <p className="text-white " >0742310701</p>
                <p className="text-white " >Instagram: Isosoft_Softwares</p>
            </div>

        </div>

        </>
    );

}
export default QuikeLinks