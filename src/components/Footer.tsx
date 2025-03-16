
import React from "react";
import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary font-display">
              Portfolio
            </a>
            <p className="mt-2 text-muted-foreground max-w-md">
              A showcase of my skills, projects, and achievements in the world of design and development.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="bg-background p-2 rounded-full text-foreground hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-background p-2 rounded-full text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-background p-2 rounded-full text-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:yoshitha.k@example.com"
                className="bg-background p-2 rounded-full text-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © {currentYear} Yoshitha Kothapalli. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and modern technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
