import React from 'react'
import { RiTwitterXLine } from 'react-icons/ri'
import { TiSocialFacebookCircular, TiSocialInstagram } from 'react-icons/ti'

const Footer = () => {
  return (
    <footer className="  bg-[#244D3F] text-white p-10 ">
  <aside className='space-y-3'>
   
    <h2 className="font-bold text-4xl text-center">
      KeenKeeper
    </h2>
    <p className=' text-white text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  </aside>
   
  <nav>
   <h3 className='font-semibold flex items-center justify-center mt-3'>Social Links</h3>
    <div className="flex justify-center items-center gap-2 mt-1">
      
      <a href='#' className='text-black text-2xl bg-white rounded-full p-1'>
       <TiSocialInstagram></TiSocialInstagram>
      </a>
      <a href='#' className='text-black text-2xl bg-white rounded-full p-1'>
        <TiSocialFacebookCircular></TiSocialFacebookCircular>
      </a>
      <a href='#' className='text-black text-2xl bg-white rounded-full p-1'>
        <RiTwitterXLine></RiTwitterXLine>
      </a>
    </div>
  </nav>
  <div className='my-10 text-gray-500'><hr /></div>
  <div className='flex justify-between flex-col lg:flex-row'>
    <p className='text-[#9a9696]'>&copy; 2026 KeenKeeper. All rights reserved.</p>
    <div className='flex gap-3 text-[#9a9696]'>
      <a href="">Privacy Policy</a>
      <a href="">Terms of Service  </a>
      <a href="">Cookies</a>
    </div>
  </div>
</footer>
  )
}

export default Footer