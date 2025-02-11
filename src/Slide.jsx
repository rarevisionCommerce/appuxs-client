import React, { useEffect } from 'react';
import './App.css'; // Make sure to import your CSS file

const App = () => {
  useEffect(() => {
    const div = document.getElementById('emergingDiv');
    div.classList.add('slide-in');
  }, []);

  return (
    <div className="h-screen mt-[90px] flex justify-center items-center bg-gray-200">
      <div
        id="emergingDiv"
        className="w-64 h-64 bg-blue-500 text-white flex justify-center items-center"
      >
        Hello, I slide in!
      </div>
    </div>
  );
};

export default App;
