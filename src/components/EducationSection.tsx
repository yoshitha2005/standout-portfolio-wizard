
import React from "react";
import SectionHeading from "./SectionHeading";
import AnimatedCard from "./AnimatedCard";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "BSc Computer Science",
      institution: "University of Technology",
      period: "2020 - Present",
      description:
        "Specializing in Artificial Intelligence and Human-Computer Interaction with a focus on user experience design.",
      achievements: ["GPA: 3.9/4.0", "Dean's List (All Semesters)", "Research Assistant"],
    },
    {
      degree: "High School Diploma",
      institution: "Science Academy",
      period: "2016 - 2020",
      description:
        "Advanced coursework in Mathematics, Physics, and Computer Science. Graduated with honors.",
      achievements: ["Valedictorian", "National Math Competition Finalist", "Computer Science Club President"],
    },
  ];

  const certifications = [
    {
      title: "Full-Stack Web Development",
      issuer: "Tech Academy",
      date: "2022",
    },
    {
      title: "UX/UI Design Fundamentals",
      issuer: "Design Institute",
      date: "2021",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "AI Learning Platform",
      date: "2023",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        <SectionHeading
          caption="Education"
          title="Academic Journey"
          description="My educational background and professional certifications that have shaped my knowledge and skills."
          centered
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Academic Education
            </h3>

            <div className="space-y-8">
              {education.map((item, index) => (
                <AnimatedCard
                  key={index}
                  className="glass-card p-6 md:p-8"
                  delay={index * 200}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-3 hidden md:block">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{item.period}</span>
                      </div>
                      <h4 className="text-xl font-bold">{item.degree}</h4>
                      <p className="text-lg text-primary font-medium">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="pt-2">
                        <h5 className="font-semibold mb-2">Achievements:</h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 text-primary">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-primary" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <AnimatedCard
                  key={index}
                  className="glass-card p-6"
                  delay={300 + index * 100}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-2 mr-4">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <AnimatedCard className="mt-8" delay={600}>
              <div className="glass-card p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  Awards & Honors
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Dean's List Scholar (2020-2023)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Outstanding Student in Computer Science (2022)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>1st Place, University Hackathon (2021)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Merit Scholarship Recipient</span>
                  </li>
                </ul>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
