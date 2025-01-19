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
        <Home />
      <img src="/trello-right.e6e102c7 (1).svg" alt="iconPageRight" className="iconPageRight" />
      <img src="/trello-left.4f52d13c (1).svg" alt="iconPageLeft" className="iconPageLeft" />
      </body>
    </html>
  );
}
