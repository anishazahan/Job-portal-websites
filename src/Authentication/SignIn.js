import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/img/logo.png'
import google from '../../src/assets/img/googleIcon.png'

import './style.css'

const SignIn = () => {
  return (
    <div className=''>

       

{/* <!-- component --> */}
<div className="py-10">
  <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover bg"></div>
        <div className="w-full p-8 lg:w-1/2">
            <div className="">
                <img className='w-28 mx-auto' src={logo} alt="" />
            </div>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>

            {/* ///..........sign in with google--------- */}

            <Link to='/' className="flex items-center justify-evenly mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                <div className="px-4 py-3">
                    <img className='w-7 h-7' src={google} alt="" />
                </div>
                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
            </Link>

            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <Link to='/' className="text-xs text-center text-gray-500 uppercase">or login with email</Link>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>

            {/* ///..........sign in with email and password--------- */}


            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"/>
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <Link to = '/' className="text-xs font-medium underline text-[#192A56]">Forget Password?</Link>
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"/>
            </div>
            <div className="mt-8">
                <button className="bg-[#192A56] text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link to='/' href="#" className="text-xs text-gray-500 uppercase">or sign up</Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default SignIn