import Header from "../components/Translator/Header";
import HearoSection from "../components/Translator/HearoSection";

export default function Home() {
  return (
    <div className="!w-screen !min-h-screen  container mx-auto relative  ">
      <div className="fixed z-10 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="relative z-10">
        <Header />
        <HearoSection/>
      </div>
    </div>
  );
}
