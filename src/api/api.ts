import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL; // Use import.meta.env
const api = axios.create({
  baseURL: baseURL, // URL base da API
  timeout: 5000, // Tempo limite para requisições
  headers: { "Content-Type": "application/json" }, // Cabeçalhos padrão
});

// Interceptor para adicionar o token de autenticação nas requisições
api.interceptors.request.use(
    (config) => {
      // Recuperar o token do localStorage (ou outra fonte)
      const token = localStorage.getItem("token");
  
      if (token) {
        // Adicionar o token no cabeçalho da requisição
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      // Retornar a configuração modificada
      return config;
    },
    (error) => {
      // Tratar erros na configuração da requisição
      console.error("Erro ao configurar a requisição:", error);
      return Promise.reject(error);
    }
  );
  
  // Interceptor para tratar respostas da API
  api.interceptors.response.use(
    (response) => {
      // Aqui você pode processar a resposta antes de retornar os dados
      console.log("Resposta bem-sucedida:", response);
      return response;
    },
    (error) => {
      // Tratar erros de resposta (ex.: erro 401 ou 500)
      if (error.response) {
        console.error("Erro na resposta da API:", error.response.data);
  
        // Exemplo: Redirecionar para login em caso de erro 401 (não autorizado)
        if (error.response.status === 401) {
          console.log("Token expirado. Redirecionando para login...");
          window.location.href = "/";
        }
      } else {
        console.error("Erro na requisição:", error.message);
      }
  
      return Promise.reject(error);
    }
  );

export default api;
