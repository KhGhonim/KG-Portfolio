import ScrollUp from "../../components/ScrollUP";
import HearoSection from "../../components/Translator/HearoSection";
import ProjectsHome from "../../components/Translator/ProjectsHome";
import ServicesHome from "../../components/Translator/ServicesHome";
import SideBar from "../../components/Translator/SideBar";
import SocialMedia from "../../components/Translator/SocialMedia";
import Testimonials from "../../components/Translator/Testimonials";

export default function TranslatorHome() {
  return (
    <div className="relative z-20 ">
      <HearoSection />
      <SocialMedia />
      <ServicesHome />
      <div className="flex  w-screen ">
        <SideBar title={"projects"} position={"left-0"} />
        <ProjectsHome />
      </div>
      <div className="flex  w-screen ">
        <SideBar title={"Testimonials"} position={"right-0"} />
        <Testimonials />
      </div>
      <ScrollUp />
    </div>
  );
}
