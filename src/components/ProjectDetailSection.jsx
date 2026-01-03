// src/components/ProjectDetailContent.jsx
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectDetailSection = ({ project }) => {
  if (!project) {
    return <div className="py-24 text-center">Project not found.</div>;
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition mb-6"
        >
          <ArrowLeft size={18} /> Back to Projects
        </Link>

        {/* Title & Image */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
        <div className="rounded-xl overflow-hidden shadow-md mb-10">
          <img
            src={project.image} // should be "/projects/1.png"
            alt={project.title}
            className="w-full h-120 object-cover"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {project.longDescription || project.description}
        </p>

        {/* Optional Sections */}
        {project.problem && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Problem</h2>
            <p className="text-muted-foreground">{project.problem}</p>
          </div>
        )}
        {project.solution && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Approach & Solution</h2>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>
        )}
        {project.results && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Results & Impact</h2>
            <p className="text-muted-foreground">{project.results}</p>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 mt-8">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition"
            >
              <Github size={18} /> GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
