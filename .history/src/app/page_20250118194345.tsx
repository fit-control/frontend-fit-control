import ContainerCenterLogin from "./components/containerCenterLogin";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen flex">
      <ContainerCenterLogin /> 
      <TrelloLeft width={100} height={100} />
    </div>
  );
}
