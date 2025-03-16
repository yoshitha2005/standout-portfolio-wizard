
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import AnimatedCard from "./AnimatedCard";
import { Github, ExternalLink, ChevronRight } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "Mobile", "UI/UX", "AI"];

  const projects = [
    {
      title: "E-Commerce Dashboard",
      category: "Web",
      image: "https://via.placeholder.com/600x400",
      description:
        "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer behavior with data visualization.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Health Tracker App",
      category: "Mobile",
      image: "https://via.placeholder.com/600x400",
      description:
        "A mobile application for tracking health metrics, exercise routines, and nutrition with personalized recommendations.",
      technologies: ["React Native", "Firebase", "Redux", "Health API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Smart Home Interface",
      category: "UI/UX",
      image: "https://via.placeholder.com/600x400",
      description:
        "A modern and intuitive interface design for controlling smart home devices with accessibility features.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Testing"],
      github: "#",
      demo: "#",
    },
    {
      title: "Sentiment Analysis Tool",
      category: "AI",
      image: "https://via.placeholder.com/600x400",
      description:
        "A machine learning tool that analyzes customer feedback and social media mentions to determine sentiment and key topics.",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      category: "Web",
      image: "https://via.placeholder.com/600x400",
      description:
        "A personal portfolio website with smooth animations and responsive design to showcase projects and skills.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "#",
      demo: "#",
    },
    {
      title: "AR Learning Experience",
      category: "Mobile",
      image: "https://via.placeholder.com/600x400",
      description:
        "An augmented reality application for interactive learning experiences in science education.",
      technologies: ["Unity", "AR Kit", "C#", "3D Modeling"],
      github: "#",
      demo: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="section-container">
        <SectionHeading
          caption="Projects"
          title="Featured Work"
          description="A collection of projects that showcase my skills and passion for creating innovative digital solutions."
          centered
        />

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-white"
                  : "bg-muted/50 hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedCard
              key={index}
              className="group h-full"
              delay={index * 100}
            >
              <div className="glass-card flex flex-col h-full overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-muted px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      className="text-sm flex items-center transition-colors hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="text-sm flex items-center transition-colors hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="text-sm flex items-center ml-auto transition-colors hover:text-primary"
                    >
                      Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
