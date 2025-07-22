import Header from "./Website/Components/Header.jsx"
import Home from "./Website/Pages/Home.jsx"
import { Routes, Route, Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import Faq from "./Website/Pages/Faq.jsx"
import Contacts from "./Website/Pages/Contacts.jsx";
import About from "./Website/Pages/About.jsx";
import Services from "./Website/Pages/Services.jsx"
import BulkSMS from "./Website/Pages/BulkSMS.jsx";
import WebDev from "./Website/Pages/WebDev.jsx";
import WebDesign from "./Website/Pages/WebDesign.jsx";
import BizMgnt from "./Website/Pages/BizMgnt.jsx";
import MobileApp from "./Website/Pages/MobileApp.jsx";
import Projects from "./Website/Pages/Projects.jsx";
import Estimate from "./Website/Components/Estimate.jsx";
import useScrollToTop from "./Website/Components/ScrollToTop.jsx"


function App() {
  useScrollToTop()
  return (<> 

  <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/Contacts" element={<Contacts/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Bulk-SMS-Intergration" element={<BulkSMS/>} />
        <Route path="/Web-Development" element={<WebDev/>} />
        <Route path="/Web-Design" element={<WebDesign/>} />
        <Route path="/Business-Management" element={<BizMgnt/>} />
        <Route path="/Mobile-App-Development" element={<MobileApp/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Estimate" element={<Estimate/>} />
        <Route path="/Services" element={<Services/>} />
      </Routes>


       
          
        
      

    </>
  );
}

export default App
