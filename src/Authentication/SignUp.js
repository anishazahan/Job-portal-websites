import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../src/assets/img/logo.png'
import './style.css'

const SignUp = () => {
  return (
    <div className='bg-[#192A56] py-20'>

<div class=" max-w-7xl mx-auto flex justify-center items-center w-screen h-screen ">
            <div class=" bg-white border-4 rounded-sm w-[70%] h-auto">
                <div className="flex justify-between">
                    <div className="w-[40%]">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-[55%]">

                   <form className='px-10 pt-10 space-y-5'>

          {/* ////////////.............name input.......... */}

                   <div className="flex flex-col space-y-2">
                   <label className='text-[16px] text-gray-600' htmlFor="name">Name</label>
                    <input className='border border-gray-300 rounded w-full px-5 text-sm font-medium py-2' type="text" />
                   </div>
                       {/* ////////////.............email input.......... */}
                   <div className="flex flex-col space-y-2">
                   <label className='text-[16px] text-gray-600' htmlFor="name">Email Address *</label>
                    <input className='border border-gray-300 rounded w-full px-5 text-sm font-medium py-2' type="email" />
                   </div>
       {/* ////////////.............radio input.......... */}
                   <div class="">
                <span class="text-gray-700">You want to signup as ?*</span>
                <div class="mt-2 flex flex-col space-y-1">

                    <label class="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value="personal"/>
                    <span class="ml-2">Job seeker</span>
                    </label>
                    <label class="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value="busines"/>
                    <span class="ml-2">Employer</span>
                    </label>
                    <label class="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value="busines"/>
                    <span class="ml-2">Institute</span>
                    </label>
                </div>
                </div>

                   {/* ////////////.............password input.......... */}

                   <div className="flex flex-col space-y-2">
                   <label className='text-[16px] text-gray-600' htmlFor="name">Your Password *</label>
                    <input className='border border-gray-300 rounded w-full px-5 text-sm font-medium py-2' type="password" />
                   </div>

                      {/* ////////////.............confirm password.......... */}
                      <div className="flex flex-col space-y-2">
                   <label className='text-[16px] text-gray-600' htmlFor="name">Confirm Password *</label>
                    <input className='border border-gray-300 rounded w-full px-5 text-sm font-medium py-2' type="password" />
                   </div>

                   <div className="">
                    <input className='w-full cursor-pointer text-white font-semibold text-sm bg-[#192A56] rounded py-2' type="submit" value='submit' />
                   </div>
                   <hr />

                   </form>
                   <div className="text-center text-sm  pb-10 pt-5">
                    <Link to='/'>Forgot Password?</Link>
                    <h2 >Already Have an account?   <Link to='/signIn' className='font-medium text-[#192A56]'>SignIn !</Link> </h2>
                   </div>
     
           
        
                    </div>
                </div>
        
           </div>
</div>

    </div>
  )
}

export default SignUp