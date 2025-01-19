/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
const ContainerCenterLogin = () => {
  return (
    <div><img src="/trello-right.e6e102c7 (1).svg" alt="iconPageLeft" className="iconPageLeft" />
        <main className="containerLogin">
        <div className="divTitle">
          <h1 className="title">Fit Control</h1>
          <h3 className="subtitle">Personal Trainner</h3>
        </div>
        <div className="centerCard">
          <label htmlFor="email">Email *</label>
          <input type="text" placeholder="Email" />
          <label htmlFor="password">Password *</label>
          <input type="password" placeholder="Password" />
          <button>Entrar</button>
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
