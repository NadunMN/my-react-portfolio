import { FiArrowUpRight } from "react-icons/fi";
import { CollectionPage } from "@/components/CollectionPage";
import { projects } from "@/components/sections/Work";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <CollectionPage
      title="All Works"
      subtitle="Selected case studies and experiments"
      description="A deeper look into the products, experiments, and collaborations I have crafted. Each work blends engineering, design, and a strong focus on user experience."
      badgeLabel="Works"
      items={projects}
      renderItem={(project, index) => (
        <article
          key={project.title}
          className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-red-500/40 hover:shadow-[0_0_40px_-10px_rgba(248,113,113,0.4)]"
        >
          <Link to={`/works/${project.slug}`} className="flex flex-1 flex-col">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover group-hover:scale-105 sm:h-48 md:h-56"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-red-400/70">
                  Work {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-white group-hover:text-red-400 sm:text-xl md:text-2xl">
                  {project.title}
                </h2>
              </div>
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 group-hover:border-red-500 group-hover:bg-red-500/10 group-hover:text-red-400"
                aria-hidden="true"
              >
                <FiArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </Link>
        </article>
      )}
    />
  );
};

export default Works;
