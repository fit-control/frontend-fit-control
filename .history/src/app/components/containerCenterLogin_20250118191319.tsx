const ContainerCenterLogin = () => {
  return (
    <main className="flex flex-col gap-y-20 row-start-2 items-center sm:items-start bg-gray-950 h-screen">
      <h1 className="text-4xl font-bold">Fit Control</h1>
      <p className="text-lg">
        Fit Control is a platform for managing your fitness goals and tracking
        your progress.
      </p>
      <footer className="row-end-10">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Fit Control. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default ContainerCenterLogin;
