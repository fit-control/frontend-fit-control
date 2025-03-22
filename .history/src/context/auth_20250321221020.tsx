import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import api from "../api/api";

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<User>;
  logout: () => void;
  loading: boolean;
}

// Criação do contexto
const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: async () => ({
    id: '',
    email: '',
    password: '',
    name: '',
    role: '',
  }),
  logout: () => {},
  loading: false
});

// Provider do contexto de autenticação
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  const fetchUserData = useCallback(async (authToken: string) => {
    try {
      const response = await axios.get("/auth/me", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      logout();
    }
  }, []);

  useEffect(() => {
    // Verifica se há um token salvo no localStorage ao carregar a aplicação
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      fetchUserData(storedToken); // Busca os dados do usuário autenticado
    }
    setLoading(false);
  }, [fetchUserData]);

  const login = async (email: string, password: string): Promise<User> => {
    console.log("Iniciando login com:", email, password);
    
    try {
      const response = await api.post("/api/login", { email, password });
      console.log("Resposta da API:", response.data); // 🔍 Verifique a resposta
  
      const { token } = response.data;
  
      setLoading(true); // ✅ Agora só muda o loading se houver sucesso
  
      setToken(token);
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  
      const fakeUser: User = {
        id: "123",
        email,
        password,
        name: "Usuário Fake",
        role: "Admin",
      };
  
      setUser(fakeUser);
      console.log("Usuário autenticado:", fakeUser);
      
      return fakeUser;
    } catch (error) {
      console.error("Erro no login:", error);
      throw new Error("Erro ao realizar o login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
         {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir o contexto
export const useAuth = () => useContext(AuthContext);
