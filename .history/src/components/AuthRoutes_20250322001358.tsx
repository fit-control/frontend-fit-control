import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/auth"

const AuthRoutes = () => {
    const {isAuthenticated} = useAuth()
    // Renderiza as rotas filhas se o usuário estiver autenticado
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default AuthRoutes