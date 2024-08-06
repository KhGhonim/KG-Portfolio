"use client";
import "../globals.css";
import ScrollUpDeveloper from "../../components/ScrollUpDeveloper";
import Footer from "../../components/Developer/Footer";
import Header from "../../components/Developer/Header";
import { useState } from "react";
import Model from "../../components/Developer/Model";

export default function RootLayout({ children }) {
  const [IsModelOpen, setIsModelOpen] = useState(false);
  const ModalHandle = () => {
    setIsModelOpen(true);
  };
  return (
    <div className=" text-white relative w-screen h-full overflow-hidden">
      <div className="absolute inset-0 z-[-2]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header ModalHandle={ModalHandle} />
      <Model IsModelOpen={IsModelOpen} setIsModelOpen={setIsModelOpen} />
      {children}
      <ScrollUpDeveloper />
      <Footer />
    </div>
  );
}
