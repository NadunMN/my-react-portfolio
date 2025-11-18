const projects = [
  {
    title: "Project One",
    description: "A cutting-edge web application built with React and modern tools",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    description: "Full-stack solution for enterprise clients",
    tech: ["Node.js", "PostgreSQL", "React"],
  },
  {
    title: "Project Three",
    description: "Mobile-first progressive web app",
    tech: ["PWA", "React", "Firebase"],
  },
];

export const Work = () => {
  return (
    <section id="work" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black mb-12">My Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
