import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

  const {user, logOut} = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
      try{
          await logOut()
          navigate('/login')
      } catch(error) {
          console.log(error)
      }
  }


  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>BUZZBEE</h1>
      </Link>
      {user?.email ? 
        (<div>
          <Link to='/account'>
            <button className='border-2 px-6 py-2 rounded cursor-pointer text-white mr-5 hover:bg-white hover:text-black'>Account</button>
          </Link>
          <button onClick={handleLogout} className='bg-red-600 hover:bg-red-700 px-6 py-2 rounded cursor-pointer text-white'>Log Out</button>
          
        </div>) : (
          <div>
            <Link to='/login'>
              <button className='border-2 px-6 py-2 rounded cursor-pointer text-white mr-5 hover:bg-white hover:text-black'>Sign In</button>
            </Link>
            <Link to='/signup'>
              <button className='bg-red-600 hover:bg-red-700 px-6 py-2 rounded cursor-pointer text-white'>SIgn Up</button>
            </Link>
          </div>
        )}
        
    </div>
  )
}

export default Navbar