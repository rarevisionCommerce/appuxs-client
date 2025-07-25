import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import  useAuth  from './useAuth';
import axiosPublic from '../api/axios';

const useLogin = () => {
  const { setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin-Dashboard";

  const login = useCallback(async (username, password) => {
    setIsLoading(true);
    setError('');

    try {
      const response = await axiosPublic.post('/auth',
        JSON.stringify({ username, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      const { accessToken, roles } = response.data;
      
      setAuth({ username, accessToken, roles });
      navigate(from, { replace: true });
      
      return { success: true };
    } catch (err) {
      const errorMessage = getLoginErrorMessage(err);
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, [setAuth, navigate, from]);

  const clearError = useCallback(() => setError(''), []);

  return { login, isLoading, error, clearError };
};

const getLoginErrorMessage = (error) => {
  if (!error?.response) return 'No Server Response';
  
  switch (error.response.status) {
    case 400: return 'Missing Username or Password';
    case 401: return 'Invalid credentials';
    default: return 'Login Failed';
  }
};

export default useLogin