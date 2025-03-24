// import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from 'react-hook-form'

type TFormData = {
  email: string
  password: string
}
const ContainerCenterLogin = () => {
  // const { login } = useAuth();
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [loading, ] = useState(false);

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

  const [errorMessage, ] = useState<string | undefined>(
    undefined,
  )
  
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors}
  } = useForm<TFormData>({
    mode: 'onSubmit',
  })
  useEffect(() => {
    if (errors.email) toast.error("Email is Required");
    if (errors.password) toast.error("Password is Required");
  }, [errors]); // Chama sempre que o erro de e-mail mudar
  console.log("errors: ", errors)
  
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

  const handleFormSubmit = async ({ email, password }: TFormData) => {
    console.log("Submit do formulário", email, password)
    // setLoading(true);
    // // const credentials = { user, password }
    // // setDadosProfileLocalStorage(credentials)

    // try {
    //   const response = await login(email, password)
    //   if (response) {
    //     toast.success(`Seja bem vindo ${response.name}! login realizado com sucesso.`)
    //     setTimeout(() => {navigate('/pagina-teste')}, 1000)
    //   }
    // } catch (error) {
    //   // setFocus('email')
    //   // setFocus('password')
    //   toast.error('Email ou senha inválidos. Tente novamente.')
    //   if (error instanceof Error) setErrorMessage(error.message)
    //     setTimeout(() => {
    //       setErrorMessage(() => '')
    //     }, 2000)
    // }finally{
    //   setLoading(false);
    // }
  }
  return (
    <form style={{
      width: '100vw',
      justifyContent: "center",
      display: "flex",
    }} onSubmit={handleSubmit((data) => handleFormSubmit(data), (errors) => console.log("ERROR: ", errors))}>
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
          <div >
            <label htmlFor="email" style={{ color: errorMessage ? "red" : ""}}>Email *</label>
            <input 
              type="text" 
              placeholder="Email" 
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'E-mail inválido',

                }
              })}
              autoFocus
              className={errors?.email && "input-error"}
            />
            {errors.email && (
              <p className={errors.email && "input-text-error"}>{errors.email.type === "required" ? "Email is Required" : errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" style={{ color: errorMessage ? "red" : ""}}>Password *</label>
            <input 
              type="password" 
              placeholder="Password" 
              {...register('password', {
                required: true,
              })}
              className={errors.password && "input-error"}
            />
             {errors.password && (
            <p className={errors.password && "input-text-error"}>{errors.password.type === "required" ? "Password is Required" : errors.password.message}</p>
            )}
          </div>
          <button disabled={loading} type="submit" className="registerButton button1" >
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
          <button className="registerButton" type="button" onClick={(e) => {
            e.preventDefault(); // Impede a ação padrão do botão
            setTimeout(() => {
              navigate('/cadastro');
              reset(); // Reseta o formulário
            }, 200);
          }}>Não tenho uma conta</button>
          <p className="tagRegister">Esqueceu a senha? <a onClick={(e) => {
            e.preventDefault(); // Impede a ação padrão do botão
            setTimeout(() => {
              navigate('/recuperar-senha');
              reset(); // Reseta o formulário
            }, 1000);
          }} className="registerLink">Clique aqui</a></p>
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
