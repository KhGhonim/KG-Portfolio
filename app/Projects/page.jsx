import ProjectCard from "./ProjectCard";
import { DevProjects } from "../../constants/Arrays";

export const metadata = {
  title: `Khaled Ghonim Dev's Projects`,
  description: `Web App for Khaled Ghonim's Developer Portfolio`,
  icons: {
    icon: "/Dev Logo.png",
  },
};

export default function page() {
  return (
    <div className="h-full w-screen">
      <ProjectCard DevProjects={DevProjects} />
    </div>
  );
}
