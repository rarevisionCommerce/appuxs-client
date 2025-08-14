 import { NavLink } from "react-router-dom"
 import { useNavigate } from "react-router-dom"
import P404 from "./assets/404.jpg"
 
 const F404 = () => {
  const navigate = useNavigate()
  return(<main className="flex flex-col md:flex-row min-h-screen gap-5 md:gap-20 p-3 md:p-10 bg-gradient-to-bl from-gray-100 via-blue-100 to bg-slate-300">
    <div className="">
      <img src={P404} className="rounded-lg w-full "/>
      
    </div>
    <div className="flex  flex-col px-2 md:px-8 py-20 gap-10">
      <h1 className="text-3xl font-bold">Oops 😥, Page Not Found!</h1>
      <p className="text-xl ">
        It looks like the page you are looking for is not available, maybe you typed the wrong address, the page was deleted or the page never existed.
      </p>
      <div className="flex  gap-4">
        <NavLink onClick={() => navigate(-1)} className="bg-blue-600 text-white text-lg font-semibold p-3 rounded-md " >Go Back</NavLink>
        <NavLink to="/"  className="bg-gray-500 text-white text-lg font-semibold p-3 rounded-md ">Home Page</NavLink>
      </div>
    </div>
   
  </main>)

 }
 export default F404