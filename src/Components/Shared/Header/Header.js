import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'



const Menubar = () => {
    const [nav, setNav] = useState(false);
    const [navbar, setNavbar] = useState(false);
  return (
    <>
   

          <nav className="w-full bg-[#F7F7F7] drop-shadow-lg">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between md:py-2 md:block">
                        <Link to='/'>
                      <img className='w-28 h-[40%]' src={logo} alt="" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-center items-center pl-10 md:pl-0 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center w-full  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-700 text-[17px]">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-gray-700 text-[17px]">
                                <Link to="about">Browse Jobs</Link>
                            </li>
                            <li className="text-gray-700 text-[17px]">
                                <Link to="service">Candidates</Link>
                            </li>
                            <li className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 ">
                                <Link to='signUp' className='text-white text-center md:text-left rounded bg-green-700 py-[8px] px-5 text-[17px]'>
                                    SignUp
                                </Link>
                                <Link to='signIn' className='text-white text-center md:text-left rounded bg-blue-700 py-[8px] px-5 text-[17px]'>
                                    SignIn
                                </Link>
                            </li>
                          
                           
                        </ul>

                       
                    </div>
                </div>
               
            </div>
        </nav>



    </>
  )
}

export default Menubar