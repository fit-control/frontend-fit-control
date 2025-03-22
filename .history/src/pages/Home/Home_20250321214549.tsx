import ContainerCenterLogin from '../../components/containerCenterLogin';

function Home() {
  return (
    <div className="items-center justify-items-center min=w-screen flex fundo_login" style={{
      width: '100vw',
      background: 'linear-gradient(343deg, rgba(22, 77, 0, 0.9), rgba(0, 25, 0, 10.9))'
    }}>
      <ContainerCenterLogin />
    </div>
  );
}
export default Home;