import  useAuthContext  from '../context/AuthProvider';

 const useAuth = () => {
  const context = useAuthContext()
  
  const logout = () => {
    context.setAuth({})
    if (context.persist) {
      context.setPersist(false)
    }
  }

  const updateAuth = (newAuthData) => {
    context.setAuth(prev => ({ ...prev, ...newAuthData }))
  }

  return {
    ...context, logout,  updateAuth
  }
}
export default useAuth