import React,{useContext} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/Authcontext'

const PrivateComponent = () => {
    const navigate = useNavigate()
    const { isLoggedIn} = useContext(AuthContext);
    return (
     isLoggedIn ? <Outlet />:navigate('/auth')
    )
}

export default PrivateComponent