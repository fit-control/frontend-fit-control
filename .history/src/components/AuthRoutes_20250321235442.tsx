import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/auth"

const AuthRoutes = () => {
  console.log("EUTROU AQUI")
    const {isAuthenticated} = useAuth()

    console.log("autenticado?", isAuthenticated)
    if (!isAuthenticated) {
      // Redireciona para a página de login caso o usuário não esteja autenticado
      return <Navigate to="/login" />;
    }
  
    // Renderiza as rotas filhas se o usuário estiver autenticado
    return <Outlet />;
}

export default AuthRoutes