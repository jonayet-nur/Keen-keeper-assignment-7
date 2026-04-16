
import React, { useContext } from 'react'
import { FriendContext } from '../../context/TimelineContext'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const StatsLine = () => {

  const { callInfo, textInfo, vedioCallInfo } = useContext(FriendContext)

  const data = [
    { name: 'call', value: callInfo.length },
    { name: 'text', value: textInfo.length },
    { name: 'video', value: vedioCallInfo.length }
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (

<div className='container mx-auto my-12'>
  <h2 className='mb-5 text-3xl font-bold'>Friendship Analytics</h2>

  <div className='bg-base-200 p-10'>
    <h3 className='font-semibold '>By Interaction Type</h3>

    <div className='grid place-items-center w-full'>
      
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            cornerRadius="50%"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" height={36}  iconType="circle" wrapperStyle={{ paddingTop: "14px", display:"flex", justifyContent:"center" , alignItems:"center" }}/>
        </PieChart>
      </ResponsiveContainer>

    </div>
  </div>
</div>

  )
}

export default StatsLine