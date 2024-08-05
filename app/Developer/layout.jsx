import "../globals.css";
import Header from "../../components/Developer/Header";
import Footer from "../../components/Developer/Footer";
import ScrollUpDeveloper from "../../components/ScrollUpDeveloper";

export const metadata = {
  title: "Khaled Ghonim Portfolio",
  description: "Web App for Khaled Ghonim's Translator and Developer Portfolio",
  icons: {
    icon: "/KGLogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <div className=" text-white relative w-screen h-full overflow-hidden">
      <div className="absolute inset-0 z-[-2]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />
      {children}
      <Footer />
      <ScrollUpDeveloper />
    </div>
  );
}
