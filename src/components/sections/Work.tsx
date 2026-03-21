import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const projects = [
  {
    slug: "brainmap",
    title: "brainMap",
    description:
      "A digital platform that connects students with domain experts for ethical academic guidance, offering task management, real-time collaboration, and transparent expert support to promote active learning.",
    tech: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "AWS"],
    image: "/Images/brainMap.jpeg",
    link: "https://example.com/brainmap",
  },
  {
    slug: "kottulabs",
    title: "KottuLabs",
    description:
      "Kottu Labs, a comprehensive web-based restaurant management system built using PHP (MVC) and MySQL. Designed to support multi-branch operations, it streamlines restaurant workflows for both customers and staff.",
    tech: ["PHP", "SQL", "JavaScript", "Docker"],
    image: "/Images/kottulabs.jpeg",
    link: "https://example.com/kottulabs",
  },
  {
    slug: "private-vpn",
    title: "Private VPN",
    description:
      "Own VPN using WireGuard on a DigitalOcean Ubuntu 22.04 Droplet. Configured firewall rules, secured SSH access, generated client keys, and verified encrypted tunneling with live handshake monitoring.",
    tech: ["CyberSecurity", "Networking", "WireGuard", "DigitalOcean"],
    image: "/Images/wireguard-vpn-docker.jpg",
    link: "https://example.com/private-vpn",
  },
];

export const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="min-h-screen py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-red-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">03</span>
          <div className="h-px w-16 bg-red-500/50" />
          <span className="text-white/50 font-mono text-sm tracking-widest uppercase">Projects</span>
        </div>

        

        <div ref={sectionRef} className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Content */}
              <div className="space-y-8">
                {/* Project Number */}
                <span className="text-red-500/40 font-mono text-sm tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2 + 0.2,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  className="font-abel text-6xl font-black tracking-tight leading-none text-white/90"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2 + 0.3,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  className="text-white/50 text-lg leading-relaxed max-w-xl"
                >
                  {project.description}
                </motion.p>

                {/* Tech Tags */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2 + 0.4,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  className="flex flex-wrap gap-3"
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-xs font-mono tracking-wider uppercase border border-white/10 text-white/60 rounded-full hover:border-red-500/50 hover:text-red-400 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Arrow Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.5,
                    type: "spring" as const,
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="group inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/10 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300"
                >
                  <Link to={`/works/${project.slug}`} aria-label={`View ${project.title}`} className="flex items-center justify-center w-full h-full">
                    <FiArrowUpRight className="w-7 h-7 text-white/60 group-hover:text-red-500 transition-all duration-300 group-hover:rotate-45" />
                  </Link>
                </motion.div>
              </div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2 + 0.3,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="relative group cursor-pointer"
              >
                <Link to={`/works/${project.slug}`} aria-label={project.title}>
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover aspect-[16/9] transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Red accent border on hover */}
                    <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-red-500/30 transition-colors duration-500" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

        {/* View All Works Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/works"
            className="group/btn inline-flex items-center gap-3 px-8 py-3.5 border border-red-500/50 text-red-400 text-sm font-mono tracking-widest uppercase rounded-sm hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
          >
            View All Works
            <FiArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
