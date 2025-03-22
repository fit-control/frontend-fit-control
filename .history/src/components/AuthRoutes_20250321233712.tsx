import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/auth"

const AuthRoutes = () => {
    const {isAutenticatad} = useAuth()

  return (
    <div>{isAutenticatad ? <Outlet /> : <Navigate to="/" /> }</div>
  )
}

export default AuthRoutes