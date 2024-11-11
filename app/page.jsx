import AboutMe from "../components/AboutMe";
import Connect from "../components/Connect";
import HeroSection from "../components/HeroSection";
import MySkills from "../components/MySkills";
import Services from "../components/Services";
import WorkIDone from "../components/WorkIDone";

export const metadata = {
  title: "Khaled Ghonim Dev Portfolio",
  description: "Web App for Khaled Ghonim's Developer Portfolio",
  icons: {
    icon: "/Dev Logo.png",
  },
};

export default function DeveloperHome() {
  return (
    <div className="relative h-full w-full">
      <HeroSection />
      <div className="container mx-auto">
        <AboutMe />
        <MySkills />
      </div>
      <WorkIDone />
      <div className="container mx-auto">
        <Services />
        <Connect />
      </div>
    </div>
  );
}
