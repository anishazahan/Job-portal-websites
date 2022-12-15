import React from 'react'
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

    </>
  )
}

export default Home