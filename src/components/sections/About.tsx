import React from "react";

export const About = () => {
  const highlights = [
    "Backend Development",
    "System Design",
    "Networking",
    "Java",
    "PostgreSQL",
    "MVC Architecture",
  ];

  return (
    <section id="about" className="relative flex min-h-screen items-center overflow-hidden bg-background py-14 sm:py-20 lg:py-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto flex flex-col justify-center px-4 sm:px-6">

        {/* Section Label */}
        <div className="mb-10 flex items-center gap-3 sm:mb-16 sm:gap-4">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">01</span>
          <div className="h-px w-16 bg-red-500/50" />
          <span className="text-white/50 font-mono text-sm tracking-widest uppercase">About Me</span>
        </div>

        {/* Hero Statement */}
        <div className="max-w-5xl">
          <p className="text-2xl font-light leading-[1.15] tracking-tight text-white/90 sm:text-4xl md:text-5xl lg:text-6xl">
            Computer Science undergraduate passionate about{" "}
            <span className="text-red-500 font-normal">backend development</span>,{" "}
            <span className="text-red-500 font-normal">system design</span>, and{" "}
            <span className="text-red-500 font-normal">networking</span>.
          </p>
        </div>

        {/* Skill Tags */}
        <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="px-4 py-1.5 text-xs font-mono tracking-wider uppercase border border-white/10 text-white/60 rounded-full hover:border-red-500/50 hover:text-red-400 transition-all duration-300 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-16" />

        {/* Content Row */}
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-10">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/Images/WhatsApp Image 2025-11-19 at 00.37.36_1f373920.jpg"
                alt="Nadun Madusanka"
                className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[360px] md:h-[450px]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Red accent border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-red-500/30 transition-colors duration-500" />
            </div>
          </div>

          {/* Right: Text & CTA */}
          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <h3 className="mb-4 text-xl font-light text-white sm:mb-6 sm:text-2xl">
              I'm <span className="text-red-500 font-semibold">Nadun</span>.
            </h3>
            <p className="mb-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Beyond technology, I enjoy hiking and exploring nature,
              which helps me maintain a balanced lifestyle and brings a sense
              of adventure and curiosity.
            </p>
            <p className="mb-8 text-base leading-relaxed text-white/60 sm:mb-10 sm:text-lg">
              That spirit of exploration also shapes how I approach
              problem-solving in technology always seeking new
              perspectives and creative solutions.
            </p>

            {/* CTA Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-sm border border-red-500/50 px-5 py-3 text-xs font-mono uppercase tracking-widest text-red-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white sm:w-fit sm:justify-start sm:gap-3 sm:px-8 sm:py-3.5 sm:text-sm"
            >
              View Resume
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

