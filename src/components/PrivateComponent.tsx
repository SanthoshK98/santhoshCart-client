import { Outlet, Navigate } from "react-router-dom"
import cookie from 'react-cookies'

export const PrivateComponent = () => {
  const auth = cookie.load('token')
  return (
    auth ? <Outlet/> : <Navigate to='/signup'/>
  )
}


