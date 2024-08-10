export default function SideBar({ title, position }) {
  return (
    <div
      className={`absolute hidden md:flex ${position} z-30 h-dvh w-1/6 items-center justify-center rounded-xl bg-[#FF4654] text-center`}
    >
      <h1 className="rotate-[-90deg] text-5xl font-bold uppercase text-white">
        {title}
      </h1>
    </div>
  );
}
