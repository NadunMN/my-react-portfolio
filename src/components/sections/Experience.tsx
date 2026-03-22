const experiences = [
  {
    role: "Software Engineer",
    company: "CeyCode",
    period: "2025 - PRESENT",
    logo: "./Images/2026-03-09_03-03__1_-removebg-preview.png",
  },
  {
    role: "ERP Technical Consultant - Intern",
    company: "Altria",
    period: "2025 - PRESENT",
    logo: "./Images/Altria-Logo-OD@4x-1024x366.png",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background py-14 sm:py-20 lg:py-24">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-red-500/[0.03] blur-3xl sm:h-[600px] sm:w-[600px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <div className="mb-10 flex items-center gap-3 sm:mb-16 sm:gap-4">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">02</span>
          <div className="h-px w-16 bg-red-500/50" />
          <span className="text-white/50 font-mono text-sm tracking-widest uppercase">Experience</span>
        </div>

       

        <div className="mx-auto space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Top border */}
              <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-white/10 group-hover:from-red-500/30 group-hover:via-red-500/10 group-hover:to-red-500/30" />

              {/* Experience Entry */}
              <div className="flex items-center justify-between gap-3 overflow-x-auto rounded-lg py-3 group-hover:bg-red-500/[0.02] sm:grid sm:grid-cols-12 sm:gap-6 sm:py-2">
                {/* Left side - Icon & Company */}
                <div className="flex min-w-max items-center gap-3 sm:col-span-6 sm:gap-6">
                  {/* Logo */}
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg p-1 sm:h-32 sm:w-32 sm:p-2 md:h-44 md:w-44 lg:h-[200px] lg:w-[200px]">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Company Name */}
                  <h3 className="font-abel whitespace-nowrap text-xl font-black leading-none tracking-tight text-white/90 group-hover:text-red-500 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
                    {exp.company}
                  </h3>
                </div>

                {/* Right side - Period & Role */}
                <div className="flex min-w-max flex-col items-end gap-1 text-right sm:col-span-6 sm:mt-0 sm:gap-2">
                  {/* Period */}
                  <span className="w-fit whitespace-nowrap rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-red-400 sm:px-3 sm:text-xs md:ml-auto">
                    {exp.period}
                  </span>
                  {/* Role */}
                  <p className="font-abel whitespace-nowrap text-sm uppercase text-white/60 sm:text-xl md:text-2xl lg:text-3xl">
                    {exp.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-white/10" />
        </div>
      </div>
    </section>
  );
};
