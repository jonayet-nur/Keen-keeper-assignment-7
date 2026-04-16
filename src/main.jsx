import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import TimelineContext from './context/TimelineContext'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  <TimelineContext>
     <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
  </TimelineContext>
  </StrictMode>

 
)
