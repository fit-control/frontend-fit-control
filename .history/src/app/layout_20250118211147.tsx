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
      <img src="/trello-right.e6e102c7 (1).svg" alt="iconPageLeft" className="iconPageLeft" />
        <Home />
      <img src="/trello-right.e6e102c7 (1).svg" alt="iconPageRight" className="iconPageRight" />
      </body>
    </html>
  );
}
