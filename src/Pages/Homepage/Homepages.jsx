import React from 'react'
import Banner from '../../Components/Homepagebanner/Banner'
import StatCard from '../../Components/Homepagebanner/StatCard'
import AllfriendCard from '../../Components/Homepagebanner/AllfriendCard'
import Footer from '../../Components/Footer/Footer'

const Homepages = () => {
  return (
    <div>
        <Banner></Banner>
        <StatCard></StatCard>
        <AllfriendCard></AllfriendCard>
        <Footer></Footer>
    </div>
  )
}

export default Homepages