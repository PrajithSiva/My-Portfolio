import { Code, Languages, User, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Front-end Developer</h3>

            <p className="text-muted-foreground">
              I'm a passionate frontend developer skilled in React, Tailwind CSS,
              and modern UI/UX practices. I love crafting clean and responsive designs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://myresumeprajith.tiiny.site"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    I'm a web developer focused on building clean, responsive, and user-friendly
                    websites using modern tools like HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    Bachelor of Engineering, KCG College of Technology – 7.65 CGPA
                  </p>
                  <p className="text-muted-foreground">
                    HSC, Nellai Nadar MHSS – 80%
                  </p>
                  <p className="text-muted-foreground">
                    SSLC, Nellai Nadar MHSS – 65%
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Languages className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Languages</h4>
                  <p className="text-muted-foreground">English</p>
                  <p className="text-muted-foreground">Tamil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
