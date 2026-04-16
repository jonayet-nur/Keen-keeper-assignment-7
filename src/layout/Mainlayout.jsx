import React, { Suspense } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const Mainlayout = () => {
  return (
    <div>
       
       <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
<span className="loading loading-bars loading-xl"></span></div>}>
        <Navbar></Navbar>
         <Outlet></Outlet>
          <Footer></Footer>
       </Suspense>
       
    </div>
  )
}

export default Mainlayout