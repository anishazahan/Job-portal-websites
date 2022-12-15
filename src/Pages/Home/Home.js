import React from 'react'
import Footer from '../../Components/Shared/Header/Footer'
import CountDown from './CountDown'
import Hero from './Hero'
import JobCateogory from './JobCateogory'
import Subscribe from './Subscribe'

const Home = () => {
  return (
    <>
        <Hero></Hero>
        <JobCateogory></JobCateogory>
        <CountDown></CountDown>
        <Subscribe></Subscribe>
        <Footer></Footer>

    </>
  )
}

export default Home