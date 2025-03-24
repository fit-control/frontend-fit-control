import { useAuth } from "../context/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from 'react-hook-form'
import { IAuthUser } from "../types/AuthType";

const ContainerCenterLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const handleLogin = async () => {
  //   setLoading(true);
  //   console.log("CLICOU"); // Certifique-se de que o botão foi clicado
  //   try {
  //     console.log("BUSCANDO...");
  //     console.log("Email:", email, "Password:", password); // Log dos dados enviados
  //     const data = await login(email, password); // Chamada do login
  //     toast.success(`Bem vindo ${data.name}!!`)
  //     setTimeout(() => {
  //       navigate('/pagina-teste')
  //     }, 3000)
  //     console.log("Data retornada do login:", data); // Log dos dados retornados
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   } catch (error) {
  //     toast.error("Erro ao fazer login. Verifique suas credenciais.")
  //   }finally{
  //     setLoading(false);
  //   }
  // };

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  )

  const {
    handleSubmit,
    register,
    reset,
    getValues} = useForm<IAuthUser>({
    mode: 'onSubmit',
  })

  // useEffect(() => {
  //   const savedCredentials = getDadosProfileLocalStorage()
  //   if (savedCredentials) {
  //     try {
  //       const { user, password } = savedCredentials
  //       setValue('user', user)
  //       setValue('password', password)
  //     } catch (error) {
  //       console.error('Failed to parse saved credentials:', error)
  //     }
  //   }
  // }, [setValue])

  const handleFormSubmit = async ({ email, password }: IAuthUser) => {
    console.log("ENTROU AQUI")
    setLoading(true);
    // const credentials = { user, password }
    // setDadosProfileLocalStorage(credentials)

    try {
      const response = await login(email, password)
      if (response) {
        toast.success(`Seja bem vindo ${response.name}! login realizado com sucesso.`)
        setTimeout(() => {navigate('/pagina-teste')}, 1000)
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

//   const handleFormSubmit = (data: IAuthUser) => {
//   console.log("Entrou na função handleFormSubmit com os dados:", data);
// };
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
          <p className="description">A sua plataforma de gestão de treinos, finanças e clientes</p>
          <p className="description">Faça login para continuar</p>
          <p className="description">Se não tem uma conta, clique no botão abaixo para criar uma.</p>

        </div>
        <div className="centerCard">
          <label htmlFor="email" style={{ color: errorMessage ? "red" : ""}}>Email *</label>
          <input 
            type="text" 
            placeholder="Email" 
            {...register('email', {
              required: 'Email é obrigatório',
            })}
            autoFocus
            style={{ borderColor: errorMessage ? "red" : "" }}
          />
          <label htmlFor="password" style={{ color: errorMessage ? "red" : ""}}>Password *</label>
          <input 
            type="password" 
            placeholder="Password" 
            {...register('password', {
              required: 'Senha é obrigatória',
              
            })}
            autoFocus
            style={{ borderColor: errorMessage ? "red" : ""}}
          />
          <button disabled={loading} type="submit">
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
          <button className="registerButton" type="button" onClick={(e) => {
            e.preventDefault(); // Impede a ação padrão do botão
            setTimeout(() => {
              navigate('/cadastro');
              reset(); // Reseta o formulário
            }, 1000);
          }}>Não tenho uma conta</button>
          <p className="forgotPassword">Esqueceu a senha? <button type="button" onClick={(e) => {
            e.preventDefault(); // Impede a ação padrão do botão
            setTimeout(() => {
              navigate('/recuperar-senha');
              reset(); // Reseta o formulário
            }, 1000);
          }} className="registerLink">Clique aqui</button></p>
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

export default ContainerCenterLogin;
