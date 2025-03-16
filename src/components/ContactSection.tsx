
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import AnimatedCard from "./AnimatedCard";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "yoshitha.k@example.com",
      link: "mailto:yoshitha.k@example.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "#",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "#",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        <SectionHeading
          caption="Contact"
          title="Get In Touch"
          description="Have a project in mind or just want to say hello? I'd love to hear from you. Reach out and let's start a conversation."
          centered
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedCard>
            <div className="space-y-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-6">Connect with Me</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-2 bg-background py-2 px-4 rounded-full transition-all hover:bg-primary hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-3">
                  Looking for collaboration?
                </h3>
                <p className="text-muted-foreground mb-4">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
                <a href="#projects" className="btn-outline inline-flex">
                  View My Work
                </a>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="animated-border-card">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                    Your message has been sent successfully!
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
