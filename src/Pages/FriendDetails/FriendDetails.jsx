import React, { useContext } from 'react'
import { FiArchive, FiPhoneCall } from 'react-icons/fi'
import { MdOutlineTextsms } from 'react-icons/md'
import { PiVideoCamera } from 'react-icons/pi'
import { RiDeleteBin2Line, RiDeleteBin6Line, RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri'
import { useLoaderData, useParams } from 'react-router'
import { FriendContext } from '../../context/TimelineContext'

const FriendDetails = () => {
    const {id}= useParams()
    // console.log(id)
    const friends = useLoaderData()
    console.log(friends)
     const expectedFriends = friends.find((friend)=> friend.id == id)
     console.log(expectedFriends)

   
const {handleCall,handleText,handleVideoCall} =useContext(FriendContext)


  return (
  <div className='my-30 container mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8 '>
   <div className='container mx-auto  '>
       <div  className="card  bg-base-500 w-100 shadow-sm 
  ">
  <figure className="px-10 pt-10">
    <img
      src={expectedFriends.picture}
      alt="Shoes"
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{expectedFriends.name}</h2>
    <p className='font-semibold text-[17px] text-[#64748B]'>{expectedFriends.days_since_contact}d ago</p>
   
   <div className='flex items-center justify-start gap-10'>
         {expectedFriends.tags.map(tag => (<div className="bg-green-300 text-black font-semibold p-2 rounded-full">{tag}</div>))}
    </div>
    <span className={` text-white p-2 rounded-full ${expectedFriends.status === "on-track"? "bg-cyan-600" : expectedFriends.status === "almost due"?"bg-amber-500":"bg-base-400"}`}>{expectedFriends.status}</span>
    <p className='font-semibold'>{expectedFriends.bio}</p>
  </div>
</div>
{/* button */}
<div className='container mx-auto grid gap-5 mt-5'>
     <div className='bg-base-300 rounded-xl w-100 p-4 flex justify-center items-center text-xl font-semibold'><RiNotificationSnoozeLine></RiNotificationSnoozeLine> <span className='text-center'>Snooze 2 weeks</span></div>
   <div className='bg-base-300  rounded-xl  w-100 p-4 flex justify-center items-center text-xl font-semibold'><FiArchive></FiArchive><span>Archive</span></div>
   <div className='bg-base-300  rounded-xl  w-100 p-4  flex justify-center items-center text-xl font-semibold text-red-400'> <RiDeleteBin6Line/> <span>Delete</span> </div>
  </div>

   </div>

  

  {/* right */}
  <div className='grid lg:grid-cols-3 gap-5 lg:h-20 grid-cols-1 lg:w-170'>
  <div className="shadow-sm  bg-base-500 p-10 text-center rounded-xl">
    <div className="text-2xl font-bold text-[#244D3F]">{expectedFriends.days_since_contact}</div>
     <div className="text-[#64748B]  font-semibold">Days Since Contact</div>
  </div>

   <div className="shadow-sm  bg-base-500  p-10 text-center  rounded-xl">
    <div className="text-2xl font-bold text-[#244D3F]">{expectedFriends.goal}</div>
     <div className=" text-[#64748B]  font-semibold">Goal (Days)</div>
  </div>
   <div className="shadow-sm  bg-base-500 p-10 text-center rounded-xl">
    <div className="text-2xl font-bold text-[#244D3F]">{expectedFriends.next_due_date}</div>
     <div className="text-[#64748B]  font-semibold">Next Due</div>
  </div>

<div className=''>

<div className="shadow-sm bg-base-500 p-10  rounded-xl lg:w-2xl w-full">
  <div className="text-2xl font-bold flex justify-between items-center">
    <p>Relationship Goal</p>
    <span className='badge bg-cyan-50'>Edit</span>
  </div>
  <div>
    <h3 className='font-bold text-gray-500 mt-1'>Connect every {expectedFriends.goal}</h3>
  </div>
</div>
 {/* call,text and video */}
<div className="shadow-sm bg-base-500 p-10 text-center rounded-xl lg:w-2xl w-full mt-4 grid grid-cols-3 gap-5">
 <button onClick={ ()=>handleCall(expectedFriends)} class="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-5 text-sm text-gray-500 transition hover:bg-gray-50 active:scale-95">
   <FiPhoneCall className='text-xl'></FiPhoneCall>
   <span className='font-semibold'>Call</span>
  </button>
  <button onClick={()=> handleText(expectedFriends)} class="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-5 text-sm text-gray-500 transition hover:bg-gray-50 active:scale-95">
   <MdOutlineTextsms className='text-xl'></MdOutlineTextsms>
   <span className='font-semibold'>Text</span>
  </button>
  <button onClick={()=>handleVideoCall(expectedFriends)} class="flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-5 text-sm text-gray-500 transition hover:bg-gray-50 active:scale-95">
   <PiVideoCamera className='text-xl'></PiVideoCamera>
   <span className='font-semibold'>Video</span>
  </button>
</div>

</div>

</div>






  </div>
  )
}

export default FriendDetails