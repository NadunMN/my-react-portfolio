import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "brainMap",
    description: "A low-code platform that helps you build, deploy, and manage enterprise-grade apps while accelerating development time.",
    tech: ["Branding", "Web Design", "Design System", "Marketing"],
    image: "/Images/new.jpg",
    link: "#",
  },
  {
    title: "KottuLabs",
    description: "Full-stack solution for enterprise clients with robust authentication, real-time collaboration features, and advanced analytics.",
    tech: ["Node.js", "PostgreSQL", "React", "Docker"],
    image: "/Images/wb2I6wF-limbo-wallpaper.jpg",
    link: "#",
  },
  {
    title: "Private VPN",
    description: "Mobile-first progressive web app with offline support, push notifications, and lightning-fast performance across all devices.",
    tech: ["PWA", "React", "Firebase", "Workbox"],
    image: "/Images/new.jpg",
    link: "#",
  },
];

export const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="font-bebas-neue font-black mb-24 text-center"
          style={{ fontSize: 'clamp(2rem, 8vw, 20rem)' }}
        >
          My Recent Works
        </motion.h2>

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
                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2 + 0.2,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  className="font-abel text-6xl font-black tracking-tight leading-none"
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
                  className="text-muted-foreground text-lg leading-relaxed max-w-xl"
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
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-muted/50 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted transition-all duration-300 cursor-default"
                    >
                      #{tech}
                    </span>
                  ))}
                </motion.div>

                {/* Arrow Button */}
                <motion.a
                  href={project.link}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + 0.5,
                    type: "spring" as const,
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="group inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-foreground/20 hover:border-foreground hover:bg-foreground transition-all duration-300"
                >
                  <FiArrowUpRight className="w-7 h-7 text-foreground group-hover:text-background transition-colors duration-300 group-hover:rotate-45 transform transition-transform" />
                </motion.a>
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
                <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mt-32 flex flex-col items-center justify-center py-20 border-t border-border/30"
        >
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bebas-neue text-4xl md:text-5xl font-black mb-4 text-center"
          >
            Want to see more?
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-center max-w-md mb-10"
          >
            Explore my complete portfolio of projects, case studies, and creative work
          </motion.p>

          {/* Button */}
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
          >
            {/* Button background animation */}
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 transition-transform duration-300 group-hover:scale-105" />
            
            {/* Button content */}
            <span className="relative z-10">View All Projects</span>
            <FiArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/30" />
            <span className="text-xs text-muted-foreground tracking-widest uppercase">More Projects</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
