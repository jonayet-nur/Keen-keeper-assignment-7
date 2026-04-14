import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const Banner = () => {
  return (
   <div className='mt-5'>
     <div
  className="hero h-100 bg-linear-to-r from-[#eef9f6] via-[#effaf6] to-[#effdf8]"
  
>
  {/* <div className="hero-overlay"></div> */}
  <div className="hero-content text-[#244D3F] text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="mb-5 text-[#64748B] font-semibold">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
      </p>
      
      <button className="btn bg-[#244D3F] text-white"> <FaPlus></FaPlus>Add a Friend</button>
    </div>
  </div>
</div>
   </div>
  )
}

export default Banner