
import React from "react";
import SectionHeading from "./SectionHeading";
import AnimatedCard from "./AnimatedCard";
import { Briefcase, GraduationCap, Heart, Users } from "lucide-react";

const AboutSection: React.FC = () => {
  const stats = [
    {
      value: "3+",
      label: "Years of Experience",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      value: "15+",
      label: "Projects Completed",
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
    },
    {
      value: "10+",
      label: "Satisfied Clients",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      value: "5+",
      label: "Awards Won",
      icon: <Heart className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="section-container">
        <SectionHeading
          caption="About Me"
          title="Crafting digital experiences that matter"
          description="I'm a passionate student with a focus on creating innovative digital solutions. Here's a bit about who I am and what drives me."
          centered
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedCard className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg">
                I am a final-year Computer Science student with a passion for creating elegant, user-centered digital experiences. My journey in technology started when I was 15, and I've been honing my skills ever since.
              </p>
              <p className="text-lg">
                My approach combines technical excellence with creative problem-solving. I believe in building solutions that not only work flawlessly but also bring joy to users.
              </p>
              <p className="text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring junior developers.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard className="order-1 md:order-2" delay={200}>
            <div className="animated-border-card">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-background flex flex-col items-center justify-center text-center"
                    >
                      <div className="mb-3 bg-primary/10 p-2 rounded-full">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
