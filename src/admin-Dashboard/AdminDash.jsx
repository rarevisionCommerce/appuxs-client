import { Outlet, useLocation } from 'react-router-dom';
import SideNav from './components/SideNav';
import useTitle from '../Website/Components/useTitle';
import Header from '../Website/Components/Header';
import Footer from '../Website/Components/Footer';

function AdminDashboard() {
  const location = useLocation();
  
  // Get active view from current route
  const getActiveView = () => {
    const path = location.pathname.split('/').pop();
    
  };
useTitle("Welcome Back Admin")
  return (<>
  <Header/>
  <div className='h-20 w-full bg-primary fixed top-0'></div>
  <div className="min-h-screen flex flex-col bg-gray-100">
      
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideNav
          activeView={getActiveView()}
        />
        
        {/* Main Content Area */}
        <main className="flex-1  overflow-y-auto">
          <div className="max-w-7xl mx-auto">
               <Outlet />
          </div>
          
        </main>
        
      </div>
      
     
    </div>
    <Footer/>
  </>
    
  );
}

export default AdminDashboard;