import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'



const ProtectedRoute = ({children}) => {

    const {user} = UserAuth();

    const navigate = useNavigate();

    if(!user) {
        return navigate('/login');
    } else{
        return children
    }
  
}

export default ProtectedRoute