import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/auth"

const AuthRoutes = () => {
  console.log("EUTROU AQUI")
    const {isAuthenticated} = useAuth()

    console.log("autenticado?", isAuthenticated)
    if (!isAuthenticated) return <Navigate to="/login" />;
    // Renderiza as rotas filhas se o usuário estiver autenticado
    return <Outlet />;
}

export default AuthRoutes