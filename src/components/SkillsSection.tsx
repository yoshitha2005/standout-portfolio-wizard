
import React from "react";
import SectionHeading from "./SectionHeading";
import AnimatedCard from "./AnimatedCard";
import { Code, Layout, Database, Server, Lightbulb, Layers } from "lucide-react";

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "Express", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 75 },
        { name: "Firebase", level: 70 },
        { name: "Postgres", level: 65 },
      ],
    },
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 70 },
        { name: "C++", level: 60 },
      ],
    },
    {
      name: "Design",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "Photoshop", level: 65 },
        { name: "UI/UX Design", level: 80 },
      ],
    },
    {
      name: "Other Skills",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Agile/Scrum", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Technical Writing", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="section-container">
        <SectionHeading
          caption="Skills"
          title="My Technical Expertise"
          description="A comprehensive overview of my technical skills and competencies across various domains."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedCard
              key={categoryIndex}
              className="glass-card p-6"
              delay={categoryIndex * 100}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          transition: "width 1s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard className="mt-12 glass-card p-8" delay={600}>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Layers className="mr-2 h-6 w-6 text-primary" />
            Soft Skills
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Communication",
              "Teamwork",
              "Problem Solving",
              "Adaptability",
              "Creativity",
              "Time Management",
              "Leadership",
              "Critical Thinking",
              "Attention to Detail",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-lg px-4 py-3 flex items-center"
              >
                <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default SkillsSection;
