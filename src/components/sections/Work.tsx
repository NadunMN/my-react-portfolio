import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import vpnContent from "@/works/vpn.md?raw";
import kottuLabsContent from "@/works/kottuLabs.md?raw";
import brainMapContent from "@/works/brainMap.md?raw";

export const projects = [
  {
    slug: "brainmap",
    title: "brainMap",
    description:
      "A digital platform that connects students with domain experts for ethical academic guidance, offering task management, real-time collaboration, and transparent expert support to promote active learning.",
    tech: ["Java", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "AWS"],
    image: "./Images/brainMap.jpeg",
    link: "https://example.com/brainmap",
    content: brainMapContent,
  },
  {
    slug: "kottulabs",
    title: "KottuLabs",
    description:
      "Kottu Labs, a comprehensive web-based restaurant management system built using PHP (MVC) and MySQL. Designed to support multi-branch operations, it streamlines restaurant workflows for both customers and staff.",
    tech: ["PHP", "SQL", "JavaScript", "Docker"],
    image: "./Images/kottulabs.jpeg",
    link: "https://example.com/kottulabs",
    content: kottuLabsContent,
  },
  {
    slug: "private-vpn",
    title: "Private VPN",
    description:
      "Own VPN using WireGuard on a DigitalOcean Ubuntu 22.04 Droplet. Configured firewall rules, secured SSH access, generated client keys, and verified encrypted tunneling with live handshake monitoring.",
    tech: ["CyberSecurity", "Networking", "WireGuard", "DigitalOcean"],
    image: "./Images/wireguard-vpn-docker.jpg",
    link: "https://example.com/private-vpn",
    content: vpnContent,
  },
];

export const Work = () => {
  return (
    <section id="work" className="relative min-h-screen overflow-hidden bg-background py-14 sm:py-20 lg:py-24">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-red-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <div className="mb-10 flex items-center gap-3 sm:mb-16 sm:gap-4">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">03</span>
          <div className="h-px w-16 bg-red-500/50" />
          <span className="text-white/50 font-mono text-sm tracking-widest uppercase">Works</span>
        </div>

        

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12"
            >
              {/* Left Side - Content */}
              <div className="space-y-5 sm:space-y-8">
                {/* Work Number */}
                <span className="text-red-500/40 font-mono text-sm tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="font-abel text-3xl font-black leading-none tracking-tight text-white/90 sm:text-5xl md:text-6xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="cursor-default rounded-full border border-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-white/60 hover:border-red-500/50 hover:text-red-400 sm:px-4"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Arrow Button */}
                <div className="group inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/10 hover:border-red-500 hover:bg-red-500/10 sm:h-16 sm:w-16">
                  <Link to={`/works/${project.slug}`} aria-label={`View ${project.title}`} className="flex items-center justify-center w-full h-full">
                    <FiArrowUpRight className="h-5 w-5 text-white/60 group-hover:rotate-45 group-hover:text-red-500 sm:h-7 sm:w-7" />
                  </Link>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative group cursor-pointer">
                <Link to={`/works/${project.slug}`} aria-label={project.title}>
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-[16/9] h-full w-full object-cover group-hover:scale-105"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Red accent border on hover */}
                    <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-red-500/30" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-16" />

        {/* View All Works Link */}
        <div className="text-center">
          <Link
            to="/works"
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-sm border border-red-500/50 px-5 py-3 text-xs font-mono uppercase tracking-widest text-red-400 hover:border-red-500 hover:bg-red-500 hover:text-white sm:w-auto sm:gap-3 sm:px-8 sm:py-3.5 sm:text-sm"
          >
            View All Works
            <FiArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
