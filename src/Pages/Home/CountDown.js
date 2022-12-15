import React from 'react'
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { FaBriefcase,FaGraduationCap } from "react-icons/fa";


const CountDown = () => {

    const data = [
        {
            name : "Search Millions of Jobs",
            icon : <HiOutlineDocumentSearch></HiOutlineDocumentSearch>,
        },
        {
            name : "Easy To Manage Jobs",
            icon : <FaBriefcase></FaBriefcase>,
        },
        {
            name : "Easy To Manage Jobs",
            icon : <FaGraduationCap></FaGraduationCap>,
        },
        {
            name : "Easy To Manage Jobs",
            icon : <FaGraduationCap></FaGraduationCap>,
        }
    ]
  return (
   <>
    <div className='bg-[#192A56] py-10'>

        <div className=" space-y-7 md:space-y-0 mx-auto max-w-7xl px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center">
            {
                data.map(item=>{
                    return <div className="text-white text-center">

                            <button className='text-5xl'> {item.icon}</button>
                            <h2>{item.name}</h2>

                        </div>
                })
            }

    </div>

   </div>

<div className="bg-green-50 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-20">
                <div className="flex flex-col text-center md:text-left">
                    <h2>RECENTLY ADDED JOBS</h2>
                    <h2 className='my-3 text-2xl'>Featured Jobs Posts For This Week</h2>
                </div>
                <div className="">
                    <h2 className='text-center text-2xl font-semibold'>Top Recruitments</h2>
                </div>
            </div>
    </div> 
   
   
   
   
   </>
  )
}

export default CountDown