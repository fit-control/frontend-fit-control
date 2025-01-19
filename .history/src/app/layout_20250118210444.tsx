import "./globals.css";
import Home from "./page";
import { Image } from 'next/image';
export default function RootLayout({
  // children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Image src="/public/trello-left.4f52d13c (1).svg" alt="iconPageLeft" />
        <Home />
      </body>
    </html>
  );
}
