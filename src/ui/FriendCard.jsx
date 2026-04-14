import React from 'react'

const FriendCard = ({friend}) => {
    console.log("Friend", friend)
  return (
    <div>{friend.length}
    
    
     <div className="card bg-base-100  shadow-sm transition-all duration-400 ease-in-out 
hover:bg-linear-to-br hover:from-[#c2f9e3] hover:to-[#96b1a0]  hover:border-transparent 
    hover:-translate-y-2 hover:shadow-[0px_20px_30px_rgba(100,116,139,0.3)]">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      alt="Shoes"
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{friend.name}</h2>
    <p className='font-semibold text-[17px] text-[#64748B]'>{friend.days_since_contact}d ago</p>
   
   <div className='flex items-center justify-start gap-10'>
         {friend.tags.map(tag => (<div className="bg-green-300 text-black font-semibold p-2 rounded-full">{tag}</div>))}
    </div>
    <span className={` text-white p-2 rounded-full ${friend.status === "on-track"? "bg-cyan-600" : friend.status === "almost due"?"bg-amber-500":"bg-red-400"}`}>{friend.status}</span>
  </div>
</div>
    
    </div>

   
  )
}

export default FriendCard