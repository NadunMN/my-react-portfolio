const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-accent">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
