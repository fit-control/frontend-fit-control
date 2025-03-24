// import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from 'react-hook-form'
import { useAuth } from "../context/auth";

type TFormData = {
  email: string
  password: string
}
const ContainerCenterLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(false);
  
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors}
  } = useForm<TFormData>({
    mode: 'onSubmit',
  })
  useEffect(() => {
    if (errors.email) toast.error("Email é Obrigatório!");
    if (errors.password) toast.error("Senha é Obrigatória!!");
  }, [errors]); // Chama sempre que o erro de e-mail mudar
  
  const handleFormSubmit = async ({ email, password }: TFormData) => {
    console.log("Submit do formulário", email, password)
    setLoading(true);

    try {
      const response = await login(email, password)
      if (response) {
        toast.success(`Seja bem vindo ${response.name}! login realizado com sucesso.`)
        setTimeout(() => {navigate('/pagina-teste')}, 1000)
      }
    } catch (error) {
      setErrorMessage(true)

      if (error instanceof Error)toast.error(error.message)
    }finally{
      setLoading(false);
    }
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
            <label htmlFor="email" className={(errors?.email || errorMessage) ? "input-text-error" : ""}>Email *</label>
            <input 
              type="text" 
              placeholder="Email" 
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Email inválido',

                },
                onChange: (e) => {
                  e.preventDefault();
                  setErrorMessage(false)
                }
              })}
              autoFocus
              className={(errors?.email || errorMessage) ? "input-error" : ""}
            />
            {errors.email && (
              <p className={errors.email && "input-text-error"}>{errors.email.type === "required" ? "Email is Required" : errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className={(errors?.password || errorMessage) ? "input-text-error" : ""}>Password *</label>
            <input 
              type="password" 
              placeholder="Password" 
              {...register('password', {
                required: true,
                onChange: (e) => {
                  e.preventDefault();
                  setErrorMessage(false)
                }
              })}
              className={(errors?.password || errorMessage) ? "input-error" : ""}
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
