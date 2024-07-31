export default function SideBar({ title, position}) {
  return (
    <div className={`hidden md:flex absolute ${position} w-1/6 text-center items-center justify-center h-dvh bg-[#FF4654] rounded-xl  z-30`}>
      <h1 className="text-5xl font-bold text-white uppercase rotate-[-90deg]">
        {title}
      </h1>
    </div>
  );
}
