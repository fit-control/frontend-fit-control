import { useAuth } from "../context/auth";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from 'react-hook-form'
import { User } from "../types/AuthType";
import { useNavigate } from "react-router-dom";

const ContainerCenterCadastro = () => {
    
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  )

  const {
    handleSubmit,
    register,
    getValues} = useForm<User>({
    mode: 'onSubmit',
  })
  
  const handleFormSubmit = async ({ nomeCompleto, email, password, genero }: User) => {
    console.log("ENTROU AQUI", nomeCompleto, email, password, genero);
    setLoading(true);
    // const credentials = { user, password }
    // setDadosProfileLocalStorage(credentials)

    try {
      const response = await login(email, password)
      if (response) {
        toast.success(`Seja bem vindo ${response.name}! login realizado com sucesso.`)
        // setTimeout(() => {
        //   navigate('/pagina-teste')
        // }, 1000)
      }
    } catch (error) {
      // setFocus('email')
      // setFocus('password')
      toast.error('Email ou senha inválidos. Tente novamente.')
      if (error instanceof Error) setErrorMessage(error.message)
        setTimeout(() => {
          setErrorMessage(() => '')
        }, 2000)
    }finally{
      setLoading(false);
    }
  }
  return (
    <form style={{
      width: '100vw',
      justifyContent: "center",
      display: "flex",
    }} onSubmit={(e) => {
      e.preventDefault();
      console.log("Valores no form:", getValues());
      handleSubmit(handleFormSubmit)(e);
    }}>
      <img src="/trello-right.e6e102c7 (1).svg" alt="iconPageLeft" className="iconPageLeft" />
        <main className="containerLogin">
        <div className="divTitle">
          <h1 className="title">Fit Control</h1>
          <h3 className="subtitle">Personal Trainner</h3>
        </div>
        <div className="centerCard">
            <input 
            type="text" 
            placeholder="Nome Completo" 
            {...register('nomeCompleto', {
              required: 'Nome é obrigatório',
            })}
            autoFocus
            style={{ borderColor: errorMessage ? "red" : "" }}
          />
          <input 
            type="text" 
            placeholder="E-mail" 
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Email inválido',
              },
            })}
            style={{ borderColor: errorMessage ? "red" : "" }}
          />
          <input 
            type="password" 
            placeholder="Senha" 
            {...register('password', {
              required: 'Senha é obrigatória',
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&.*])[0-9a-zA-Z!@#$%^&*]{6,}$/,
                message:
                  'Senha deve ter pelo menos 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais',
              },
              
            })}
            style={{ borderColor: errorMessage ? "red" : ""}}
          />
          <input 
            type="password" 
            placeholder="Repita a senha" 
            {...register('password', {
              required: 'Senha é obrigatória',
              
            })}
            style={{ borderColor: errorMessage ? "red" : ""}}
          />
          <input 
            type="text" 
            {...register('telefone')}
            style={{ borderColor: errorMessage ? "red" : ""}}
          />
           <select {...register('genero')} style={{ borderColor: errorMessage ? "red" : "transparent" }}>
                <option value="">Gênero</option>
                <option value="homem">Homem</option>
                <option value="mulher">Mulher</option>
            </select>

          <button disabled={loading} type="submit" className="registerButton">
            {loading ? 'Carregando...' : 'Cadastrar'}
          </button>
          <p className="tagRegister">Já tem uma conta? <a onClick={(e) => {
            e.preventDefault(); // Impede a ação padrão do botão
            setTimeout(() => {
              navigate('/');
            }, 200);
          }} className="registerLink">Clique aqui</a></p>
        {errorMessage && (
              <div style={{ maxWidth: '85%', textAlign: 'center', color: 'red' }}>
                {errorMessage}
              </div>
            )}
        </div>
          
        <footer className="">
          <p className="">
            &copy; {new Date().getFullYear()} Fit Control. All rights reserved.
          </p>
          <p className="assignDeveloper">Desenvolvedor Anderson Rodrigues</p>
        </footer>
      </main>
      <img src="/trello-left.4f52d13c (1).svg" alt="iconPageRight" className="iconPageRight" />
      <ToastContainer />
    </form>
  );
};

export default ContainerCenterCadastro;
