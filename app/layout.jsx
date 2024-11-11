import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "KG Trannslator's Portfolio",
  description: "Web App for Khaled Ghonim's Translator and Developer Portfolio",
  icons: {
    icon: "/KGLogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative h-full w-full overflow-hidden bg-[--background-color]">
          <div className="fixed inset-0 z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
