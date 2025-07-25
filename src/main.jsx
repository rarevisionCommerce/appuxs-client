import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import { AuthProvider } from './context/AuthProvider.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <MantineProvider>
      <BrowserRouter>
   <App />
   </BrowserRouter>
    </MantineProvider>
    </AuthProvider>
    
    
   
         
   
    
   
  </StrictMode>,
)
