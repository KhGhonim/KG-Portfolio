"use client";
import "./globals.css";
import ScrollUpDeveloper from "../components/ScrollUpDeveloper";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Model from "../components/Model";

export default function RootLayout({ children }) {
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const ModalHandle = () => {
    setIsModelOpen(true);
  };
  return (
    <html lang="en">
      <body>
        <div className="relative h-full w-full overflow-hidden text-white">
          <div className="absolute inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <Header ModalHandle={ModalHandle} />
          <Model IsModelOpen={IsModelOpen} setIsModelOpen={setIsModelOpen} />
          {children}
          <ScrollUpDeveloper />
          <Footer />
        </div>
      </body>
    </html>
  );
}
