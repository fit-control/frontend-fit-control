import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/auth"

const AuthRoutes = () => {
    const {token} = useAuth()

  return (
    <div>{token ? <Outlet /> : <Navigate to="/" /> }</div>
  )
}

export default AuthRoutes