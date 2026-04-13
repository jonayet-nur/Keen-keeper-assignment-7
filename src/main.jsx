import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from 'react-router'
import { router } from './routes/Routes'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <h2 className='text-2xl bg-fuchsia-600'>Hello World</h2>
    <button className='btn btn-primary'>Click me</button> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
