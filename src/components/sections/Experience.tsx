import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "CeyCode",
    period: "2025 - PRESENT",
    logo: "/Images/2026-03-09_03-03__1_-removebg-preview.png", // Replace with actual logo path
  },
  {
    role: "ERP Technical Consultant - Intern",
    company: "Altria",
    period: "2025 - PRESENT",
    logo: "/Images/Altria-Logo-OD@4x-1024x366.png", // Replace with actual logo path
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center ">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="font-bebas-neue text-7xl md:text-8xl lg:text-9xl font-black mb-20 text-center"
        >
          Experience
        </motion.h2>

        <div className="mx-auto space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              {/* Top border */}
              <div className="border-t border-border/90" />

              {/* Experience Entry */}
              <div className="grid grid-cols-12 items-center gap-6 ">
                {/* Left side - Icon & Company */}
                <div className="col-span-12 md:col-span-6 flex items-center gap-6">
                  {/* Logo */}
                  <motion.div
                    // whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-shrink-0 w-[200px] h-[200px]  rounded-lg overflow-hidden p-2"
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  {/* Company Name */}
                  <h3 className="font-abel text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                    {exp.company}
                  </h3>
                </div>

                {/* Right side - Period & Role */}
                <div className="col-span-12 md:col-span-6 flex flex-col md:items-end md:text-right space-y-1">
                  {/* Period */}
                  <p className="text-muted-foreground text-sm md:text-base tracking-wider">
                    {exp.period}
                  </p>
                  {/* Role */}
                  <p className="text-abel text-xl md:text-2xl lg:text-3xl uppercase">
                    {exp.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-border/90" />
        </div>
      </div>
    </section>
  );
};
