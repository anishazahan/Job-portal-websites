import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'

const JobCateogory = () => {

  const cateogoryCard = [
    {
        name : "Web Application & Software",
        icon : <FaLaptopCode></FaLaptopCode>,
        position : 0
    },
    {
        name : "Graphic Design",
        icon : <FaLaptopCode></FaLaptopCode>,
        position : 0
    },
    {
        name : "Graphic Design",
        icon : <FaLaptopCode></FaLaptopCode>,
        position : 0
    },
    {
        name : "Graphic Design",
        icon : <FaLaptopCode></FaLaptopCode>,
        position : 0
    },
    {
        name : "Graphic Design",
        icon : <FaLaptopCode></FaLaptopCode>,
        position : 0
    },
    {
        name : "Graphic Design",
        icon : <FaLaptopCode></FaLaptopCode>,
        position : 0
    }
]

  return (
    <div className='bg-green-50 pt-14 pb-28'>

        <h3 className='text-center'>JOB CATEGORIES</h3>
        <h2 className='text-center text-3xl text-black pb-10 font-medium'>Top Categories</h2>


        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto px-10 lg:px-20 gap-4">

        {
                cateogoryCard.map((item,index)=>{
                                <button className='text-5xl bg-[#192A56] rounded-full p-3 text-white'>{item.icon} </button> 
                    return <div className="bg-gray-50 border border-gray-300 border-b-4 border-b-[#192A56] hover:border-b-green-700 cursor-pointer flex flex-col py-5 px-6 space-y-6 justify-center items-center w-full group relative">
                                <h2 className='text-[18px]'>{item.name}</h2>
                                <button className='text-5xl bg-[#192A56] duration-500 group-hover:bg-green-700 rounded-full p-3 text-white'>{item.icon} </button> 
                                <p className=''>{item.position} Open Position</p>
                          </div>
                })
            }

        </div>
    </div>
  )
}

export default JobCateogory