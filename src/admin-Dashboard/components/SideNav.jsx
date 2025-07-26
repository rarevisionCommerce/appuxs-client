import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Calculator,  ChevronRight, ChevronLeft, MessageCircle, LogOut } from 'lucide-react';
import  useAuth  from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

function SideNav({ activeView }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, auth } = useAuth(); // Get auth to access current user info
  const axios = useAxiosPrivate();

  // Get current user data from auth context
  const currentUser = auth?.user || auth?.username || null;

  const getUser = useQuery({
    queryKey : ["users", currentUser],
    queryFn : async() => {
      if (!currentUser) return null;
      const response = await axios.get(`/users/${currentUser}`)
      return response.data
    },
    enabled: !!currentUser, // Only run query if we have a current user
    staleTime: 5 * 60 * 1000, 
  })
  
  const navigationItems = [
    { id: 'estimates', label: 'Project Estimates', icon: Calculator, path: '/admin-dashboard/Estimates' },
    { id: 'messages', label: 'Messages', icon: MessageCircle, path: '/admin-dashboard/messages' },
    
  ];

  const handleItemClick = (item) => {
    navigate(item.path);
    setIsOpen(false); 
  };

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate('/'); 
    } catch (error) {
      console.error('Logout failed:', error);
         navigate('/');
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Get user display info
  const getUserDisplayInfo = () => {
    if (getUser.data) {
      return {
        name: getUser.data.username || getUser.data.name || 'User',
        initials: (getUser.data.username || getUser.data.name || 'U').substring(0, 2).toUpperCase()
      };
    } else if (currentUser) {
      return {
        name: currentUser,
        initials: currentUser.substring(0, 2).toUpperCase()
      };
    }
    return {
      name: 'User',
      initials: 'U'
    };
  };

  const userInfo = getUserDisplayInfo();

  return (
    <>
      <div className="relative">
        {/* Toggle Button - Fixed position for mobile, adjusts for desktop */}
        <button
          onClick={toggleSidebar}
          className={`
            fixed top-6 z-40 mt-[75px] p-3 bg-white text-black shadow-lg
            hover:bg-gray-200 transition-all duration-300 ease-in-out
            ${isOpen ? 'left-[210px] rounded-l-full' : 'left-0 rounded-r-full'}
            lg:${isOpen ? 'left-[210px]' : 'left-0'}
          `}
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>

        {/* Overlay for mobile */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`
          fixed top-[78px] lg:top-0 left-0 h-full bg-gradient-to-b from-primary to-gray-700 
          text-white transition-all duration-300 ease-in-out z-20
          shadow-2xl border-r border-gray-700
          
          /* Mobile: Overlay behavior - slides in from left */
          ${isOpen 
            ? 'w-64 translate-x-0' 
            : 'w-64 -translate-x-full'
          }
          
          /* Desktop: Push behavior - fixed positioning with proper width */
          lg:mt-[78px] lg:translate-x-0
          ${isOpen ? 'lg:w-64' : 'lg:w-16'}
        `}>
          
          {/* Header - Expanded */}
          {isOpen && (
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold whitespace-nowrap">
                Admin Panel
              </h2>
            </div>
          )}

          {/* Navigation Items */}
          <nav className={`flex-1 p-2 ${isOpen ? "mt-2" : "mt-20"}`}>
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeView === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`
                      w-full flex items-center rounded-lg text-left
                      transition-all duration-200 group relative
                      ${isOpen ? 'px-4 py-3 space-x-3' : 'px-2 py-3 justify-center'}
                      ${isActive
                        ? 'bg-blue-600 text-white shadow-md transform scale-105'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }
                    `}
                    title={!isOpen ? item.label : ''}
                  >
                    <IconComponent className={`
                      w-5 h-5
                      transition-all duration-200
                      ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}
                    `} />
                    
                    {isOpen && (
                      <span className="font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    )}

                    {/* Tooltip for collapsed state */}
                    {!isOpen && (
                      <div className="
                        absolute left-14 bg-gray-900 text-white px-2 py-1 rounded-md text-sm
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200
                        pointer-events-none whitespace-nowrap z-50 border border-gray-600
                      ">
                        {item.label}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-gray-700">
            {/* Logout Button */}
            <div className="mb-4">
              <button
                onClick={handleLogout}
                className={`
                  w-full relative flex items-center rounded-lg text-left
                  transition-all duration-200 group 
                  ${isOpen ? 'px-2 py-3 space-x-3' : 'px-2 py-3 justify-center'}
                  text-gray-300 hover:text-white hover:bg-red-600
                `}
                title={!isOpen ? 'Logout' : ''}
              >
                <LogOut className="w-5 h-5 text-gray-300 group-hover:text-white transition-all duration-200" />
                
                {isOpen && (
                  <span className="font-medium whitespace-nowrap">
                    Logout
                  </span>
                )}

                {/* Tooltip for collapsed state */}
                {!isOpen && (
                  <div className="
                    absolute left-14 bg-gray-900 text-white px-2 py-1 rounded-md text-sm
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    pointer-events-none whitespace-nowrap z-50 border border-gray-600
                  ">
                    Logout
                  </div>
                )}
              </button>
            </div>

            {isOpen ? (
              // Expanded Profile
              <div className="flex fixed bottom-24 items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-sm font-bold">{userInfo.initials}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">User</p>
                  <p className="text-xs text-gray-400">{userInfo.name}</p>
                </div>
              </div>
            ) : (
              // Collapsed Profile
              <div className="flex fixed bottom-24 justify-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xs font-bold">{userInfo.initials}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Spacer to prevent content overlap - Desktop only */}
        <div className={`
          hidden lg:block transition-all duration-300 ease-in-out
          ${isOpen ? 'w-64' : 'w-16'}
        `} />
      </div>
    </>
  );
}

export default SideNav;