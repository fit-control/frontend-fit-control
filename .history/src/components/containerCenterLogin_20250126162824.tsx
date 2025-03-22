"use client";
import { useAuth } from "../context/auth";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const ContainerCenterLogin = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log("CLICOU"); // Certifique-se de que o botão foi clicado
    try {
      console.log("BUSCANDO...");
      console.log("Email:", email, "Password:", password); // Log dos dados enviados
      const data = await login(email, password); // Chamada do login
      console.log("Data retornada do login:", data); // Log dos dados retornados
    } catch (error) {
      console.error("Erro ao fazer login:", error); // Captura do erro
    }
  };

  return (
    <div><img src="/trello-right.e6e102c7 (1).svg" alt="iconPageLeft" className="iconPageLeft" />
        <main className="containerLogin">
        <div className="divTitle">
          <h1 className="title">Fit Control</h1>
          <h3 className="subtitle">Personal Trainner</h3>
          <p className="description">A sua plataforma de gestão de treinos e clientes</p>
          <p className="description">Faça login para continuar</p>
          <p className="description">Se não tem uma conta, clique no botão abaixo para criar uma.</p>

        </div>
        <div className="centerCard">
          <label htmlFor="email">Email *</label>
          <input 
            type="text" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password *</label>
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} disabled={loading}>
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
          <button className="registerButton">Não tenho uma conta</button>
          <p className="forgotPassword">Esqueceu a senha? <a href="/register" className="registerLink">Clique aqui</a></p>
        </div>
        <footer className="">
          <p className="">
            &copy; {new Date().getFullYear()} Fit Control. All rights reserved.
          </p>
          <p className="assignDeveloper">Desenvolvedor Anderson Rodrigues</p>
        </footer>
      </main>
      <img src="/trello-left.4f52d13c (1).svg" alt="iconPageRight" className="iconPageRight" />
    </div>
  );
};

export default ContainerCenterLogin;
