import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router'
import { router } from './routes/Routes'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
