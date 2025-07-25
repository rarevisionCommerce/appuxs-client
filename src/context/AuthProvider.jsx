import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

 const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("persist")) || false;
    } catch {
      return false;
    }
  });

  // Sync persist state with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("persist", JSON.stringify(persist));
    } catch (error) {
      console.warn('Failed to save persist state:', error);
    }
  }, [persist]);

  const value = {
    auth,
    setAuth,
    persist,
    setPersist,
    isAuthenticated: !!auth?.accessToken,
    hasRole: (role) => auth?.roles?.includes(role),
    hasAnyRole: (roles) => roles.some(role => auth?.roles?.includes(role))
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default useAuthContext;