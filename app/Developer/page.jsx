import HeroSection from "../../components/Developer/HeroSection";
import AboutMe from "../../components/Developer/AboutMe";
import Connect from "../../components/Developer/Connect";
import MySkills from "../../components/Developer/MySkills";
import Services from "../../components/Developer/Services";
import WorkIDone from "../../components/Developer/WorkIDone";

export default function DeveloperHome() {
  return (
    <div className="h-full w-full  relative">
      <HeroSection />
      <div className="container mx-auto ">
        <AboutMe />
        <MySkills />
      </div>
      <WorkIDone />
      <div className="container mx-auto ">
        <Services />
        <Connect />
      </div>
    </div>
  );
}
