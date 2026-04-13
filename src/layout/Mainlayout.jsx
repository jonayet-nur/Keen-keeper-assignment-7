import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const Mainlayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
       
    </div>
  )
}

export default Mainlayout