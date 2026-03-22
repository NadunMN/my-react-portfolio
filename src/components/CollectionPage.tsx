import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";

interface CollectionPageProps<T> {
  title: string;
  subtitle?: string;
  description?: string;
  badgeLabel: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

export function CollectionPage<T>({
  title,
  subtitle,
  description,
  badgeLabel,
  items,
  renderItem,
}: CollectionPageProps<T>) {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      <Navigation />

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Single top-left corner accent — sharp, not blobby */}
      <div className="pointer-events-none absolute top-0 left-0 h-px w-64 bg-gradient-to-r from-red-500/60 to-transparent" />
      <div className="pointer-events-none absolute top-0 left-0 w-px h-64 bg-gradient-to-b from-red-500/60 to-transparent" />

      <main className="relative z-10 pb-12 pt-20 sm:pb-16 sm:pt-24 md:pb-20 md:pt-32">
        <div className="container mx-auto space-y-8 px-4 sm:space-y-12 sm:px-6">
          {/* Header */}
          <header className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate('/')}
                className="group inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-200 hover:text-red-400 sm:text-xs"
              >
                <ArrowLeft
                  size={13}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                />
                Back
              </button>

              <span className="inline-flex items-center gap-2 rounded-sm border border-red-500/30 bg-red-500/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-red-400 sm:text-xs">
                <span className="h-1 w-1 rounded-full bg-red-500" />
                {badgeLabel}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-abel text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
                  {subtitle}
                </p>
              )}
            </div>

            {description && (
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
                {description}
              </p>
            )}
          </header>

          {/* Divider */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="h-px flex-1 bg-zinc-800" />
            <div className="h-1 w-1 rounded-full bg-red-500/60" />
            <div className="h-px w-8 bg-zinc-800" />
          </div>

          {/* Collection grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((item, index) => renderItem(item, index))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}