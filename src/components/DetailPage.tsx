import { ReactNode } from "react";
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

      <main className="relative z-10 pb-12 pt-20 sm:pb-16 sm:pt-24 md:pb-20 md:pt-28">
        <div className="container mx-auto max-w-5xl space-y-8 px-4 sm:space-y-10 sm:px-6">
          {/* Back link */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to={backTo}
              className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 hover:text-red-300 sm:text-xs"
            >
              <span className="h-px w-6 bg-white/30" />
              {backLabel}
            </Link>

            <span className="inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-red-300 sm:text-xs">
              {badgeLabel}
            </span>
          </div>

          {/* Header */}
          <header className="space-y-4 sm:space-y-6">
            <div className="space-y-3">
              <h1 className="font-abel text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-red-300/80 sm:text-sm">
                  {subtitle}
                </p>
              )}
            </div>
            {meta && <div className="flex flex-wrap gap-3 text-xs text-white/50 sm:gap-4 sm:text-sm">{meta}</div>}
          </header>

          {/* Hero image */}
          {image && (
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5">
              <img
                src={image}
                alt={title}
                className="h-full max-h-[240px] w-full object-cover sm:max-h-[320px] md:max-h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          )}

          {/* Content */}
          <section className="space-y-5 sm:space-y-6">
            
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
