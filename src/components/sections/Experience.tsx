import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "CeyCode",
    period: "2025 - PRESENT",
    logo: "/Images/2026-03-09_03-03__1_-removebg-preview.png",
  },
  {
    role: "ERP Technical Consultant - Intern",
    company: "Altria",
    period: "2025 - PRESENT",
    logo: "/Images/Altria-Logo-OD@4x-1024x366.png",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-red-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">02</span>
          <div className="h-px w-16 bg-red-500/50" />
          <span className="text-white/50 font-mono text-sm tracking-widest uppercase">Experience</span>
        </div>

       

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
              className="group"
            >
              {/* Top border */}
              <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-white/10 group-hover:from-red-500/30 group-hover:via-red-500/10 group-hover:to-red-500/30 transition-all duration-500" />

              {/* Experience Entry */}
              <div className="grid grid-cols-12 items-center gap-6 py-2 group-hover:bg-red-500/[0.02] transition-colors duration-500 rounded-lg">
                {/* Left side - Icon & Company */}
                <div className="col-span-12 md:col-span-6 flex items-center gap-6">
                  {/* Logo */}
                  <motion.div
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-shrink-0 w-[200px] h-[200px] rounded-lg overflow-hidden p-2"
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  {/* Company Name */}
                  <h3 className="font-abel text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white/90 group-hover:text-red-500 transition-colors duration-300">
                    {exp.company}
                  </h3>
                </div>

                {/* Right side - Period & Role */}
                <div className="col-span-12 md:col-span-6 flex flex-col md:items-end md:text-right space-y-2">
                  {/* Period */}
                  <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase bg-red-500/10 border border-red-500/20 rounded-full text-red-400 w-fit md:ml-auto">
                    {exp.period}
                  </span>
                  {/* Role */}
                  <p className="text-abel text-xl md:text-2xl lg:text-3xl uppercase text-white/60">
                    {exp.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-white/10" />
        </div>
      </div>
    </section>
  );
};
