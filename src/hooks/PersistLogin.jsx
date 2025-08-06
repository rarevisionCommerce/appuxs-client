import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import  useAuth  from './useAuth';
import  useRefreshToken  from './useRefreshToken';
import Loading from '../admin-Dashboard/components/Loading';


const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth, persist } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error('Token refresh failed:', err);
        // If refresh fails, user stays logged out
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // If no access token and persist is enabled, try to refresh
    if (!auth?.accessToken && persist) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [auth?.accessToken, persist, refresh]);

  if (!persist) {
    return <Outlet />;
  }

  if (isLoading) {
    return (
      <div className="loading-container">
       <Loading/>
      </div>
    );
  }

  return <Outlet />;
};

export default PersistLogin;