import React from 'react'

const StatCard = () => {
  return (
   <div>
     <div className=" bg-base-100  grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4  gap-5 container lg:mx-auto my-8 ">
  <div className="bg-emerald-50 p-8 text-center rounded-xl">
    <div className="text-2xl font-bold text-[#244D3F]">10</div>
     <div className="text-[#64748B]  font-semibold">Total Friends</div>
  </div>

   <div className="bg-emerald-50 p-8 text-center  rounded-xl">
    <div className="text-2xl font-bold text-[#244D3F]">3</div>
     <div className=" text-[#64748B]  font-semibold">On Track</div>
  </div>
   <div className="bg-emerald-50 p-8 text-center rounded-xl">
    <div className="text-2xl font-bold text-[#244D3F]">6</div>
     <div className="text-[#64748B]  font-semibold">Need Attention</div>
  </div>
   <div className="bg-emerald-50 p-8 text-center rounded-xl">
    <div className="text-2xl font-bold text-[#244D3F]">12</div>
     <div className="text-[#64748B]  font-semibold">Interactions This Month</div>
  </div>
 
</div>
 <div className='border-b container mx-auto  border-[#64748B]'></div>
   </div>
  )
}

export default StatCard