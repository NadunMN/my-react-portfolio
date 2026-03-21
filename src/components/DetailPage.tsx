import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";

interface DetailPageProps {
  badgeLabel: string;
  title: string;
  subtitle?: string;
  meta?: ReactNode;
  description?: string;
  image?: string;
  tags?: string[];
  backTo: string;
  backLabel: string;
  children?: ReactNode;
}

export const DetailPage = ({
  badgeLabel,
  title,
  subtitle,
  meta,
  description,
  image,
  tags,
  backTo,
  backLabel,
  children,
}: DetailPageProps) => {
  return (
    <div className="relative min-h-screen bg-background text-white overflow-hidden">
      <Navigation />

      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[520px] w-[520px] rounded-full bg-red-500/5 blur-3xl" />
      </div>

      <main className="relative z-10 pt-28 pb-20">
        <div className="container mx-auto px-6 max-w-5xl space-y-10">
          {/* Back link */}
          <div className="flex items-center justify-between gap-4">
            <Link
              to={backTo}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-white/50 hover:text-red-300 transition-colors"
            >
              <span className="h-px w-6 bg-white/30" />
              {backLabel}
            </Link>

            <span className="inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-xs font-mono tracking-[0.25em] uppercase text-red-300">
              {badgeLabel}
            </span>
          </div>

          {/* Header */}
          <header className="space-y-6">
            <div className="space-y-3">
              <h1 className="font-abel text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
                {title}
              </h1>
              {subtitle && (
                <p className="text-red-300/80 text-sm font-mono tracking-[0.25em] uppercase">
                  {subtitle}
                </p>
              )}
            </div>
            {meta && <div className="text-sm text-white/50 flex flex-wrap gap-4">{meta}</div>}
          </header>

          {/* Hero image */}
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover max-h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          )}

          {/* Content */}
          <section className="space-y-6">
            
            {tags && tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

              {children}
          </section>
        </div>
      </main>
    </div>
  );
};
