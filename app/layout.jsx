import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Khaled Ghonim Portfolio",
  description: "Web App for Khaled Ghonim's Translator and Developer Portfolio",
  icons: {
    icon: "/KGLogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}
