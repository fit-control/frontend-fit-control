const ContainerCenterLogin = () => {
  return (
    <main className="containerLogin flex flex-col min-h-screen items-center justify-between p-80 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Fit Control</h1>
        <h3>Personal Trainner</h3>
      </div>
      <p className="text-lg">
        Fit Control is a platform for managing your fitness goals and tracking
        your progress.
      </p>
      <footer className="">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Fit Control. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default ContainerCenterLogin;
