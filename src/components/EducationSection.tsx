
import React from "react";
import SectionHeading from "./SectionHeading";
import AnimatedCard from "./AnimatedCard";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "BTech",
      institution: "Sasi Institute of Technology and Engineering",
      period: "2022 - Present",
      description:
        "Currently pursuing my Bachelor's degree in Technology with a focus on data science and analytics, preparing for a career in data analysis.",
      achievements: ["Active participant in data science competitions", "Member of coding club", "Participated in analytics hackathons"],
    },
    {
      degree: "Intermediate in MPC",
      institution: "Sasi Junior College",
      period: "2020 - 2022",
      description:
        "Completed intermediate education with Mathematics, Physics, and Chemistry (MPC) specialization, building a strong foundation in quantitative analysis and problem-solving.",
      achievements: ["Excellent academic record", "Mathematics competitions", "Science project focused on data visualization"],
    },
  ];

  const certifications = [
    {
      title: "Data Analysis with Python",
      issuer: "Data Science Academy",
      date: "2023",
    },
    {
      title: "SQL Database Management",
      issuer: "Database Institute",
      date: "2022",
    },
    {
      title: "Data Visualization Fundamentals",
      issuer: "Analytics Learning Platform",
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
                    <span>Technical Competition Finalist (2023)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Outstanding Student in Engineering Department (2023)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>College Hackathon Winner (2022)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Academic Excellence Scholarship</span>
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
