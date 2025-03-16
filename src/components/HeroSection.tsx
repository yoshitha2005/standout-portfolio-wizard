
import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-2 mb-6 inline-block">
            <span className="text-sm font-medium text-primary px-3">
              Student Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight">
            <span className="block animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hi, I'm <span className="text-primary">Yoshitha Kothapalli</span>
            </span>
            <span className="block animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Creative Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            I design and code beautifully simple things, and I love what I do.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "1.1s" }}>
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn-outline">
              View Projects
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-subtle cursor-pointer"
      >
        <span className="text-sm mb-2 opacity-70">Scroll down</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};

export default HeroSection;
