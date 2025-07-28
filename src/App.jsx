import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import Header from "./Website/Components/Header.jsx"
import Home from "./Website/Pages/Home.jsx"
import Faq from "./Website/Pages/Faq.jsx"
import Contacts from "./Website/Pages/Contacts.jsx";
import About from "./Website/Pages/About.jsx";
import Services from "./Website/Pages/Services.jsx"
import Projects from "./Website/Pages/Projects.jsx";
import Estimate from "./Website/Pages/Estimate.jsx";
import useScrollToTop from "./Website/Components/ScrollToTop.jsx"
import Footer from "./Website/Components/Footer.jsx";

//admin and auth components
import Login from './admin-Dashboard/Login.jsx';
import PersistLogin from './hooks/PersistLogin.jsx';
import RequireAuth from './admin-Dashboard/RequireAuth.jsx'; 
import AdminDashboard from "./admin-Dashboard/AdminDash.jsx";
import EstimatesDash from './admin-Dashboard/components/estimates/EstimatesDash.jsx';
import MessagesDash from './admin-Dashboard/components/messages/MessagesDash.jsx';
import ChatWithUs from "./Website/Components/ChatWithUs.jsx";



function App() {
  useScrollToTop()

  const queryClient = new QueryClient()
  return (<> 
   <QueryClientProvider client={queryClient} >
     <Header />
     <ChatWithUs/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/Contacts" element={<Contacts/>} />
        <Route path="/Project-Estimate" element={<Estimate/>} />
        <Route path="/About" element={<About/>} />        
        <Route path="/Projects" element={<Projects/>} />        
        <Route path="/Services" element={<Services/>} />

        <Route element={<PersistLogin />}>
                <Route element={<RequireAuth  />}>
                  <Route path="/admin-dashboard" element={<AdminDashboard />}>
                    {/* Default route for admin dashboard */}
                    <Route index element={<MessagesDash />} />
                    <Route path="Estimates" element={<EstimatesDash />} />                 
                    <Route path="Messages" element={<MessagesDash />} />          
                                      
                  </Route>
                </Route>
              </Route>
      </Routes>
<Footer/>

        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="top-[53px]"
               
      />

   </QueryClientProvider>
 
       
          
        
      

    </>
  );
}

export default App
