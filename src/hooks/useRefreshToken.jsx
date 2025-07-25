import { useCallback } from 'react';
import { axiosPrivate } from '../api/axios';
import  useAuth  from './useAuth';

 const useRefreshToken = () => {
  const { updateAuth } = useAuth();

  const refresh = useCallback(async () => {
    try {
      const response = await axiosPrivate.get('/auth/refresh', {
        withCredentials: true // Ensure cookies are sent
      });
      
      const { accessToken, username, roles } = response.data;
      
      updateAuth({ accessToken, username, roles });
      return accessToken;
    } catch (error) {
      console.error('Token refresh failed:', error);
      // Clear any existing auth state if refresh fails
      updateAuth({});
      throw error;
    }
  }, [updateAuth]);

  return refresh;
};
export default useRefreshToken