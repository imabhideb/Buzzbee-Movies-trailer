import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user, signUp} = UserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signUp(email, password)
            navigate('/')
        } catch(error) {
            console.log(error)
        }
    }
  return (
    <>
      <div className=' w-full h-screen'>
        <img className='absolute w-full h-full object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/6973a9ea-02b2-4de9-9006-d7d224c9b75d/IN-en-20230327-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input 
                                onChange={(e) => setEmail(e.target.value)} 
                                className='p-3 my-2 bg-gray-700 rouded outline-none' type="email" 
                                placeholder='Enter your email' autoComplete='email' />
                            <input 
                                onChange={(e) => setPassword(e.target.value)} 
                                className='p-3 my-2 bg-gray-700 rouded outline-none' type="password" 
                                placeholder='Enter your password' autoComplete='current-password' />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-gray-400 text-[15px]'>
                                <p ><input className='mr-2 cursor-pointer' type="checkbox" /> Remember me</p>
                                <p className='py-8'>Need Help?</p>
                            </div>
                            <p className='py-8'><span className='text-gray-400 mr-2'>Already Subscribed to Netflix?</span>
                            <Link to='/login'> Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SignUp