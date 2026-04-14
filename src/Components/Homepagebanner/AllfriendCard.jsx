import React, { use } from 'react'
import FriendCard from '../../ui/FriendCard'
 const friendPromise = fetch('friendData.json').then(res=>res.json())
const AllfriendCard = () => {
  const friends = use(friendPromise)
  // console.log(friends)
  return (
   <div className='container mx-auto my-12'>
    <h2 className='font-semibold text-[#64748B] text-xl mb-2'>Your Friends</h2>
     <div className='  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
      
      {
        friends.map(friend => {
          return <FriendCard friend={friend}></FriendCard>
        })
      }
    </div>
   </div>
  )
}

export default AllfriendCard
