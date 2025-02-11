import React from 'react';
import Slide from "./Slide.jsx"
import { Link, animateScroll as scroll } from 'react-scroll';

const ScrollPage = () => {
  return (<>
  <Slide/>
    <div>
      {/* Button Section */}
      <div className="flex justify-center items-center h-screen">
        <Link to="targetDiv" smooth={true} duration={1000} className="bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Scroll to Section
        </Link>
      </div>

      {/* Target Div Section */}
      <div id="targetDiv" className="h-screen flex justify-center items-center bg-gray-200">
        <h1 className="text-3xl font-bold">Hello, you've reached the section!</h1>
      </div>
    </div>
    </>);
};

export default ScrollPage;
