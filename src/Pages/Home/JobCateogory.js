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
    <div className='bg-fuchsia-100 py-14'>

        <h3 className='text-center'>JOB CATEGORIES</h3>
        <h2 className='text-center text-3xl text-black pb-10 font-medium'>Top Categories</h2>


        <div className="flex">

        {
                cateogoryCard.map((item,index)=>{
                    return <div className="bg-gray-100 border border-r flex flex-col py-5 px-6 space-y-6 justify-center items-center w-full md:w-[17%]">
                                <h2 className='text-[18px]'>{item.name}</h2>
                                <button className='text-5xl text-gray-800'><FaLaptopCode></FaLaptopCode> </button> 
                                <p>{item.position} Open Position</p>
                          </div>
                })
            }

        </div>
    </div>
  )
}

export default JobCateogory