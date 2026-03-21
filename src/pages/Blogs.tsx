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
          <div className="absolute right-4 top-4 z-10">
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-red-300">
              {post.category}
            </span>
          </div>

          <Link to={`/blog/${post.slug}`} className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
                  <span className="inline-flex items-center gap-1.5">
                    <FiCalendar className="h-3.5 w-3.5" />
                    <span>{post.date}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiClock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h2>
              </div>
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 transition-all duration-300 group-hover:border-red-500 group-hover:text-red-400 group-hover:bg-red-500/10"
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
