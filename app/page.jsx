import HearoSection from "../components/HearoSection";
import ProjectsHome from "../components/ProjectsHome";
import ScrollUp from "../components/ScrollUpTranslator";
import ServicesHome from "../components/ServicesHome";
import SideBar from "../components/SideBar";
import SocialMedia from "../components/SocialMedia";
import Testimonials from "../components/Testimonials";


export default function TranslatorHome() {
  return (
    <div className="relative z-20 w-screen">
      <HearoSection />
      <SocialMedia />
      <ServicesHome />
      <div className="flex w-screen">
        <SideBar title={"projects"} position={"left-0"} />
        <ProjectsHome />
      </div>
      <div className="flex w-screen">
        <SideBar title={"Testimonials"} position={"right-0"} />
        <Testimonials />
      </div>
      <ScrollUp />
    </div>
  );
}
