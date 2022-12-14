import React from 'react'
import { FaBriefcase } from "react-icons/fa";
import CateogoryCard from './CateogoryCard';

const Hero = () => {
  return (
    <div className='bg-[#192A56] py-20 '>

    <div className="hero-section max-w-7xl mx-auto">

        <div className="">
            <h2 className='text-center text-white py-5 '>Find Job, Employment, and Career Opportunities</h2>
            <h2 className='text-center text-3xl text-white pb-10 font-medium'>The Eassiest Way to Get Your New Job</h2>

        </div>

        <div className="">
            <div className="text-center">
            <button className='text-center text-white text-[17px] rounded-t-md px-5 py-2 bg-blue-600 '>Find a Job</button>
            </div>
            <form className='bg-gray-200 py-8 px-5 mx-16'>

            <div class="flex justify-center space-x-5">

            <div class="relative inline-block w-full text-gray-700 rounded border border-gray-400">
            <button className='absolute flex items-center p-3 mr-3 bg-gray-200'><FaBriefcase></FaBriefcase></button>
            <select class="w-full h-10 pl-10 pr-6 text-base placeholder-gray-600  rounded appearance-none focus:shadow-lg outline-none" placeholder="Regular input">
                <option>A regular sized select </option>
                <option>Another option</option>
                <option>And one more</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
            </div>
            <div class="relative inline-block w-full text-gray-700 rounded border border-gray-400">
            <button className='absolute flex items-center p-3 mr-3 bg-gray-200'><FaBriefcase></FaBriefcase></button>
            <select class="w-full h-10 pl-10 pr-6 text-base placeholder-gray-600  rounded appearance-none focus:shadow-lg outline-none" placeholder="Regular input">
                <option>A regular sized select </option>
                <option>Another option</option>
                <option>And one more</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
            </div>
            <div class="relative inline-block w-full text-gray-700 rounded border border-gray-400">
            <button className='absolute flex items-center p-3 mr-3 bg-gray-200'><FaBriefcase></FaBriefcase></button>
            <select class="w-full h-10 pl-10 pr-6 text-base placeholder-gray-600  rounded appearance-none focus:shadow-lg outline-none" placeholder="Regular input">
                <option>A regular sized select </option>
                <option>Another option</option>
                <option>And one more</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
            </div>

            <div className="">
                <button className='py-2 px-10 border border-gray-400 rounded'>Search</button>
            </div>
      </div>


            </form>

            <CateogoryCard></CateogoryCard>
        </div>
    </div>



    </div>
  )
}

export default Hero