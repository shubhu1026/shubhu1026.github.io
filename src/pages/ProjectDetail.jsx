// src/pages/ProjectDetail.jsx
import { useParams } from "react-router-dom";
import projects from "@/../projects.json";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectDetailSection } from "@/components/ProjectDetailSection";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Shared layout */}
      <ThemeToggle />
      <StarBackground />
      <main>
        <ProjectDetailSection project={project} />
      </main>

      <Footer />
    </div>
  );
};
