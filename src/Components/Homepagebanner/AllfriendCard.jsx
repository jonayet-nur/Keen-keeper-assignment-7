import React, { use } from 'react'
 const friendPromise = fetch('friendData.json').then(res=>res.json())
const AllfriendCard = () => {
  const friends = use(friendPromise)
  // console.log(friends)
  return (
    <div className='container mx-auto'>
      <h2>Your Friends</h2>
    </div>
  )
}

export default AllfriendCard