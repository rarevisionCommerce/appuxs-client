import { useLocation, Navigate, Outlet } from 'react-router-dom';
import  useAuth  from '../hooks/useAuth';


const RequireAuth = ({ allowedRoles = [] }) => {
  const { auth } = useAuth();
  const location = useLocation();

  // Check if user is authenticated
  if (!auth?.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If roles are specified, check if user has required role
  if (allowedRoles.length > 0) {
    // Ensure auth.roles is an array
    const userRoles = Array.isArray(auth.roles) ? auth.roles : [];
    
    // Fix: Change parameter name from 'roles' to 'userRole' to avoid naming conflict
    const hasRequiredRole = userRoles.some(userRole => allowedRoles.includes(userRole));
    
    if (!hasRequiredRole) {
      console.log('Access denied. User roles:', userRoles, 'Required roles:', allowedRoles);
      return <Navigate to="/Login" state={{ from: location }} replace />;
    }
  }

  return <Outlet />;
};

export default RequireAuth;