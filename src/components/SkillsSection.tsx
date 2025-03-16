
import React from "react";
import SectionHeading from "./SectionHeading";
import AnimatedCard from "./AnimatedCard";
import { Code, Layout, Database, Server, Lightbulb, Layers, BarChart, Sigma } from "lucide-react";

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Data Analysis",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Python for Data Analysis", level: 90 },
        { name: "SQL & Database Management", level: 85 },
        { name: "Statistical Analysis", level: 80 },
        { name: "Data Visualization", level: 85 },
        { name: "Excel Advanced Functions", level: 90 },
      ],
    },
    {
      name: "Data Science",
      icon: <Sigma className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Predictive Modeling", level: 70 },
        { name: "Data Cleaning", level: 85 },
        { name: "Feature Engineering", level: 70 },
        { name: "Data Storytelling", level: 80 },
      ],
    },
    {
      name: "Database Technologies",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Data Warehousing", level: 70 },
        { name: "ETL Processes", level: 65 },
      ],
    },
    {
      name: "Programming",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "R", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "Shell Scripting", level: 65 },
      ],
    },
    {
      name: "Visualization Tools",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Matplotlib/Seaborn", level: 85 },
        { name: "D3.js", level: 65 },
      ],
    },
    {
      name: "Soft Skills",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Critical Thinking", level: 90 },
        { name: "Problem Solving", level: 85 },
        { name: "Business Understanding", level: 80 },
        { name: "Communication", level: 85 },
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
          title="Data Analysis Toolkit"
          description="A comprehensive overview of my technical skills and competencies across various data analysis domains."
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
              "Analytical Thinking",
              "Problem Solving",
              "Adaptability",
              "Attention to Detail",
              "Time Management",
              "Business Acumen",
              "Critical Thinking",
              "Data Storytelling",
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
