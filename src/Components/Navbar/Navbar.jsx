import React from 'react'
import { CiHome } from 'react-icons/ci'
import { FaChartLine } from 'react-icons/fa6'
import { IoMdTime } from 'react-icons/io'
import { NavLink } from 'react-router'

const Navbar = () => {
  const link =(
        <>
        
         <li >
        
          <NavLink to='/' className={({isActive})=> ` flex items-center gap-1 ${isActive? " bg-[#244D3F] text-white p-2 border-2 rounded-md" :""}`}>
          <CiHome className='text-2xl'></CiHome>
          <span> Home</span>
          </NavLink>
          </li>

           <li ><NavLink to='/friend' className={({isActive})=>`flex items-center gap-1 ${isActive?" bg-[#244D3F] text-white  p-2  rounded-md":""}`}>
           <IoMdTime className='text-2xl'></IoMdTime>
           <span>Timeline</span>
           </NavLink>
           </li>

             <li ><NavLink to='/page not' className={({isActive})=>`flex items-center gap-1 ${isActive?" bg-[#244D3F] text-white  p-2  rounded-md":""}`}>
            <FaChartLine />
             <span>Stats</span>
             </NavLink>
             </li>
                        
        </>
    )
  return (
  <div className='bg-base-200 p-4 '>
     <div className='flex justify-between items-center container mx-auto '>
  
  {/* Left: Logo */}
  <div className='flex items-center justify-center gap-2'>
    <h2 className='text-[#244D3F] font-bold text-4xl'>KeenKeeper</h2>
  </div>

  {/* Right Side */}
  <div className='flex items-center gap-6 ml-auto'>
    
    {/* Nav Links */}
    <ul className='hidden md:flex items-center gap-5 font-semibold text-[16px] text-[#101727]'>
      {link}
    </ul>

    {/* Mobile Menu */}
    <div className="dropdown md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> 
        </svg>
      </div>

      <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-80 p-6 shadow right-0">
        {link}

        <div className='flex gap-4 mt-3'>
          <button className='btn bg-[#244D3F] text-white'>Sign in</button>
          <button className='btn bg-[#244D3F] text-white'>Sign up</button>
        </div>
      </ul>
    </div>

  </div>
</div>
  </div>
  )
}

export default Navbar