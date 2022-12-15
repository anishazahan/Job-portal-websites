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
    <div className='bg-[#192A56] py-10'>

        <div className="mx-auto max-w-7xl px-10 lg:px-20 flex justify-between items-center">
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
  )
}

export default CountDown