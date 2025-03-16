
import React from "react";
import SectionHeading from "./SectionHeading";
import AnimatedCard from "./AnimatedCard";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "TechSolutions Inc.",
      location: "San Francisco, CA (Remote)",
      period: "June 2023 - Present",
      description:
        "Working on user interface components using React and TypeScript. Collaborating with design team to implement responsive designs. Optimizing application performance and implementing accessibility features.",
      responsibilities: [
        "Developed responsive UI components with React & TypeScript",
        "Collaborated with UX team to implement design systems",
        "Optimized frontend performance, improving load times by 40%",
        "Participated in code reviews and pair programming sessions",
      ],
    },
    {
      title: "Student Research Assistant",
      company: "University AI Lab",
      location: "University Campus",
      period: "Jan 2022 - May 2023",
      description:
        "Assisted professors with research on machine learning applications for healthcare. Implemented data processing pipelines and visualization tools.",
      responsibilities: [
        "Developed algorithms for medical image processing using Python",
        "Created data visualization dashboards for research findings",
        "Co-authored 2 research papers presented at student conferences",
        "Mentored junior students on research methodologies",
      ],
    },
    {
      title: "Web Developer",
      company: "Student Innovation Hub",
      location: "University Campus",
      period: "Sep 2021 - Dec 2021",
      description:
        "Designed and developed websites for student organizations and university events. Implemented content management systems and taught basic web development to peers.",
      responsibilities: [
        "Built and maintained websites for 5+ student organizations",
        "Provided technical support and training to organization members",
        "Implemented responsive designs and accessibility features",
        "Organized web development workshops for beginners",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        <SectionHeading
          caption="Experience"
          title="My Professional Journey"
          description="A timeline of my professional experiences, internships, and roles that have shaped my career path."
          centered
        />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <AnimatedCard
                  delay={index * 200}
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 w-3 h-3 rounded-full bg-primary transform md:-translate-x-1.5"></div>

                  <div className="glass-card p-6 md:p-8 ml-6 md:ml-0">
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="caption-top">{experience.company}</span>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <div className="flex flex-wrap items-center text-sm text-muted-foreground mt-1 gap-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>

                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {experience.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
