import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";
import { CollectionPage } from "@/components/CollectionPage";
import { blogPosts } from "@/components/sections/Blog";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <CollectionPage
      title="All Articles & Notes"
      subtitle="Thoughts on building and learning in public"
      description="Longer-form breakdowns, experiments, and notes on engineering, tooling, and the journey of learning in public. Curated to share both wins and lessons."
      badgeLabel="Blog"
      items={blogPosts}
      renderItem={(post, index) => (
        <motion.article
          key={post.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -6 }}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-red-500/40 hover:shadow-[0_0_40px_-10px_rgba(248,113,113,0.4)] cursor-pointer"
        >
          <div className="absolute right-3 top-3 z-10 sm:right-4 sm:top-4">
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-red-300 sm:px-3 sm:text-xs">
              {post.category}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/40 sm:gap-4">
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiClock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <h2 className="line-clamp-2 pr-12 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-red-400 sm:text-xl md:text-2xl">
                  {post.title}
                </h2>
              </div>

              <span
                className="absolute bottom-4 left-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-500/10 group-hover:text-red-400 sm:bottom-6 sm:left-6 sm:h-10 sm:w-10"
                aria-hidden="true"
              >
                <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </Link>
        </motion.article>
      )}
    />
  );
};

export default Blogs;
