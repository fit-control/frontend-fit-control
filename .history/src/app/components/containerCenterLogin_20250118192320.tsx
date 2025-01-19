const ContainerCenterLogin = () => {
  return (
    <main className="containerLogin flex flex-col min-h-screen items-center justify-between p-10">
      <h1 className="text-4xl font-bold">Fit Control</h1>
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
