import React from 'react'
import './home.css'

const Subscribe = () => {
  return (
    <div className='subscribe-bg py-20'>
        <div className="text-white max-w-7xl mx-auto px-10 lg:px-20 justify-center items-center text-center ">
            <h2 className='text-4xl font-bold'>Subscribe to our job alert</h2>
            <p className='font-medium mt-3 mb-10'>If you want to get email for every posted job. please enter your email here. we will send email to <br/> you for every verified job</p>
            <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 justify-center">
                <input className='py-3 px-6 outline-none text-black font-medium w-full  md:w-[50%] rounded-r-full md:rounded-r-none  rounded-l-full placeholder-black' placeholder='Enter your Email' type="text" />
                <button className='py-3 px-10 bg-blue-800 rounded-l-full md:rounded-l-none rounded-r-full font-medium'>Subscribe</button>
            </div>
        </div>

    </div>
  )
}

export default Subscribe