/* eslint-disable @next/next/no-img-element */
import "./globals.css";
import Home from "./page";
export default function RootLayout({
  // children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <img src="/trello-left.4f52d13c (1).svg" alt="iconPageLeft" />
        <Home />
      </body>
    </html>
  );
}
