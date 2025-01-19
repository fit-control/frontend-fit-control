import "./globals.css";
import Home from "./page";
import iconPageLeft from "./images/trello-left.4f52d13c (1).svg";
import Image from "next/image";

export default function RootLayout({
  // children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Image src={iconPageLeft} alt="iconPageLeft" />
        <Home />
      </body>
    </html>
  );
}
