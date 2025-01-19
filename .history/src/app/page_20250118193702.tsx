import ContainerCenterLogin from "./components/containerCenterLogin";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen">
      <Image src="/src/app/images/trello-left.4f52d13c (1).svg" alt="background" width={100} height={100} />
      <ContainerCenterLogin /> 
    </div>
  );
}
