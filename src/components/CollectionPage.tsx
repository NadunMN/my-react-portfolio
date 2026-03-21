import { ReactNode } from "react";
import { motion } from "framer-motion";
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
  return (
    <div className="relative min-h-screen bg-background text-white overflow-hidden">
      <Navigation />

      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-red-500/5 blur-3xl" />
      </div>

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6 space-y-12">
          {/* Header */}
          <header className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-xs font-mono tracking-[0.25em] uppercase text-red-300">
              {badgeLabel}
            </span>
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
            {description && (
              <p className="max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
                {description}
              </p>
            )}
          </header>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Collection grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((item, index) => renderItem(item, index))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
