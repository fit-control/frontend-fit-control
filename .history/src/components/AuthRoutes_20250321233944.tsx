import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/auth"

const AuthRoutes = () => {
  console.log("EUTROU AQUI")
    const {isAutenticatad} = useAuth()

    console.log("autenticado?", isAutenticatad)
  return (
    <div>{isAutenticatad ? <Outlet /> : <Navigate to="/" /> }</div>
  )
}

export default AuthRoutes