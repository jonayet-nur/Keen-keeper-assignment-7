import React, { useContext, useState } from 'react'
import { FriendContext } from '../../context/TimelineContext'
import TimelineCard from '../../ui/TimelineCard'

const Friendpage = () => {

  const {storedTimeline} = useContext(FriendContext)
  const [filter, setFilter] = useState("all")

const filteredTimeline =
filter === "all"
? storedTimeline
: storedTimeline.filter(item => item.type === filter)
  return (
    // <div className='container mx-auto'>
    //     <h1>FriendPage</h1>
    //     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates at id sint mollitia? Non recusandae sunt voluptas vero illo suscipit fugit sint eum cum voluptates deleniti, magni error ipsum quisquam!</p>
    // </div>


    <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto py-10 '>
                <h2 className='text-[48px] font-bold'>Timeline </h2>
               {/* Filter Dropdown */}
<div className="my-4">
<select
className="border p-4 rounded-lg"
onChange={(e)=> setFilter(e.target.value)}
>
<option value="all">Filter timeline</option>
<option value="call">Call</option>
<option value="text">Text</option>
<option value="video">Video Call</option>
</select>
</div>
                {
                    filteredTimeline.map(data => <TimelineCard data={data}></TimelineCard>)
                }
            </div>
        </div>
  )
}

export default Friendpage



