const experiences = [
  {
    role: "Senior Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of cutting-edge web applications",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects",
  },
  {
    role: "Junior Developer",
    company: "Startup Inc",
    period: "2018 - 2020",
    description: "Contributed to product development and growth",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black mb-12">Experience</h2>
        <div className="max-w-3xl space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-accent pl-6 pb-8 last:pb-0"
            >
              <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
              <p className="text-accent font-medium mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
