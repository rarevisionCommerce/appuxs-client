import { useCallback } from 'react';
import  useAuth  from './useAuth';
import axiosPublic from '../api/axios';

 const useLogout = () => {
  const { setAuth, setPersist } = useAuth();

  const logout = useCallback(async () => {
    try {
      // Call logout endpoint to clear httpOnly cookie
      await axiosPublic.post('/auth/logout', {}, {
        withCredentials: true
      });
    } catch (error) {
      console.error('Logout request failed:', error);
      // Continue with client-side logout even if server request fails
    } finally {
      // Clear client-side auth state
      setAuth({});
      setPersist(false);
    }
  }, [setAuth, setPersist]);

  return logout;
};
export default useLogout