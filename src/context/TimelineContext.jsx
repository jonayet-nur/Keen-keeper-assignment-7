import React, { Children, createContext, useState } from 'react'
// import { data } from 'react-router'
import { toast } from 'react-toastify'


export const FriendContext = createContext()

const TimelineContext = ({children}) => {
    const [storedTimeline, setStoredTimeline] = useState([])
    const [callInfo, setCallInfo] = useState([])
    const [textInfo, setTextInfo] = useState([])
    const [vedioCallInfo, setVedioCallInfo] = useState([])

    const handleCall = (currentFriend)=>{
    const newData = {...currentFriend, type:'call'}
        setStoredTimeline([...storedTimeline, newData])
        setCallInfo([...callInfo,currentFriend])
       toast.success(`${currentFriend.name} Call are Selected `)
    }

    const handleText = (currentFriend)=>{
    const newData = {...currentFriend, type:'text'}
        setStoredTimeline([...storedTimeline, newData])
         setTextInfo([...textInfo,currentFriend])
        toast.success(`${currentFriend.name} Text are Selected`)
    }

    const handleVideoCall = (currentFriend)=>{
    const newData = {...currentFriend, type:'video'}
        setStoredTimeline([...storedTimeline, newData])
       setVedioCallInfo([...vedioCallInfo,currentFriend])
        toast.success(`${currentFriend.name} VideoCall are Selected`)
    }

    const data={
        handleCall,handleText,handleVideoCall,storedTimeline,callInfo,textInfo,vedioCallInfo
    }
  return (
   <FriendContext.Provider value={data}>
    {children}
   </FriendContext.Provider>
  )
}

export default TimelineContext