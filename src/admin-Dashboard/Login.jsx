import React, { useState, useEffect } from 'react';
import { LogIn, User, Lock, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLogin from '../hooks/useLogin';
import useAuth from '../hooks/useAuth';
import Secure from "../assets/Security.jpg"
import useTitle from '../Website/Components/useTitle';

const Login = () => {
  const { persist, setPersist } = useAuth();
  const { login, isLoading, error, clearError } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [hasShownToast, setHasShownToast] = useState(false);
  useTitle("Login-Isosoft Softwares")
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    mode: 'onChange'
  });

  const watchedValues = watch();

  useEffect(() => {
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
      usernameInput.focus();
    }
  }, []);

  useEffect(() => {
    if (error && !hasShownToast) {
      // Show error toast for unauthorized or other login errors
      if (error.toLowerCase().includes('unauthorized') || 
          error.toLowerCase().includes('invalid') || 
          error.toLowerCase().includes('wrong') ||
          error.toLowerCase().includes('incorrect')) {
        toast.error('❌ Unauthorized access. Please check your credentials.');
      } else {
        toast.error(`Login failed: ${error}`);
      }
      setHasShownToast(true);
    }
  }, [error, hasShownToast]);

  // Clear errors and toast flags when user starts typing
  useEffect(() => {
    if (watchedValues.username || watchedValues.password) {
      if (error) {
        clearError();
        setHasShownToast(false);
      }
    }
  }, [watchedValues.username, watchedValues.password, clearError, error]);

  const onSubmit = async (data) => {
    try {
      // Reset toast flag before attempting login
      setHasShownToast(false);
      
      const result = await login(data.username, data.password);
      
      // Only show success toast if login was actually successful and no error exists
      if (result && result.success && !error) {
        toast.success(`Welcome back, ${data.username}!`);
        reset();
      } else if (result && !result.success) {
        // Handle case where result exists but success is false
        // Don't show success toast, let the error handling above deal with it
        console.log('Login failed:', result.message || 'Unknown error');
      }
    } catch (loginError) {
      // Handle login errors - don't show success toast
      console.error('Login failed:', loginError);
      // The useEffect above will handle showing the error toast
    }
  };

  // Error Message Component
  const ErrorMessage = ({ message }) => {
    if (!message) return null;
    
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 mr-2 flex-shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <span>{message}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='h-20 w-full bg-primary'></div>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Left Side - Welcome Section */}
              <div className="hidden lg:flex bg-slate-800 items-center justify-center p-12">
                <div className="text-center text-white max-w-md">
                  {/* Security Image */}
                  <div className="w-full h-80 mb-8 rounded-xl overflow-hidden">
                    <img 
                      src={Secure} 
                      alt="Secure login illustration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">
                      Welcome Back!
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Secure access to your dashboard. Your trusted Software development platform for seamless operations.
                    </p>
                    
                    {/* Additional Benefits */}
                    <div className="mt-8 space-y-3">
                      <div className="flex items-start space-x-2 text-slate-300 text-sm">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Dashboard for Admins/employees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="p-8 lg:p-12 flex items-center justify-center bg-slate-50">
                <div className="w-full max-w-md">
                  {/* Mobile Welcome Message */}
                  <div className="lg:hidden text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome Back!</h2>
                    <p className="text-slate-600 text-sm">Secure access to your admin/employee dashboard</p>
                  </div>

                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 justify-center mb-4">
                      <LogIn className="h-8 w-8 text-slate-800" /> Sign In
                    </div>
                    <p className="text-slate-600">Enter your credentials to access your account</p>
                  </div>

                  {/* Error Message */}
                  <div className="mb-6">
                    <ErrorMessage message={error} />
                  </div>

                  {/* Login Form */}
                  <div className="space-y-6">
                    {/* Username Input */}
                    <div className="space-y-2">
                      <label htmlFor="username" className="block text-sm font-medium text-slate-700">
                        Username
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          type="text"
                          id="username"
                          {...register("username", { 
                            required: "Username is required",
                            minLength: {
                              value: 1,
                              message: "Username cannot be empty"
                            }
                          })}
                          placeholder="Enter your username"
                          autoComplete="username"
                          className="block w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white text-slate-900 placeholder-slate-400 transition-all duration-200 text-sm"
                        />
                      </div>
                      {errors.username && (
                        <span className="text-red-500 text-xs">{errors.username.message}</span>
                      )}
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                      <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          {...register("password", { 
                            required: "Password is required",
                            minLength: {
                              value: 1,
                              message: "Password cannot be empty"
                            }
                          })}
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          className="block w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 bg-white text-slate-900 placeholder-slate-400 transition-all duration-200 text-sm"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                          ) : (
                            <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <span className="text-red-500 text-xs">{errors.password.message}</span>
                      )}
                    </div>

                    {/* Trust Device and Forgot Password */}
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                        <input
                          type="checkbox"
                          onChange={(e) => setPersist(e.target.checked)}
                          checked={persist}
                          className="w-4 h-4 text-yellow-400 border-slate-300 rounded focus:ring-yellow-400 focus:ring-2"
                        />
                        <span className="select-none font-medium">Trust This Device</span>
                      </label>
                      
                      <a href="#" className="text-sm text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200">
                        Forgot Password?
                      </a>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      onClick={handleSubmit(onSubmit)}
                      disabled={isLoading}
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-slate-800 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-800 border-t-transparent rounded-full animate-spin mr-2"></div>
                          Signing In...
                        </>
                      ) : (
                        <>
                          <LogIn className="w-5 h-5 mr-2" />
                          Sign In to Dashboard
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast Container */}
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        theme='colored'
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName={"top-16"}
      />
    </>
  );
};

export default Login;