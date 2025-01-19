import ContainerCenterLogin from "./components/containerCenterLogin";
import TrelloLeft from "@/app/images/trello-left.4f52d13c (1).svg";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen flex">
      <ContainerCenterLogin /> 
      <TrelloLeft width={100} height={100} />
    </div>
  );
}
