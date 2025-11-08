import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { RouterProvider } from "react-router/dom";
import { router } from './routers/route.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={router} 
      hydrateFallbackElement={<p>Loading...</p>} 
    />
  </React.StrictMode>
)
