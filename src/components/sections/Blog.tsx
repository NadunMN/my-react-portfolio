import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";

const blogPosts = [
  {
    title: "Building Modern Web Applications",
    date: "March 15, 2024",
    excerpt: "Exploring the latest trends and best practices in web development. Learn about cutting-edge technologies and frameworks.",
    readTime: "5 min read",
    category: "Development",
    link: "#",
  },
  {
    title: "The Power of TypeScript",
    date: "March 10, 2024",
    excerpt: "Why TypeScript has become essential for large-scale applications. Discover type safety and productivity benefits.",
    readTime: "7 min read",
    category: "Programming",
    link: "#",
  },
  {
    title: "Performance Optimization Tips",
    date: "March 5, 2024",
    excerpt: "Practical techniques to make your web apps blazingly fast. From lazy loading to code splitting strategies.",
    readTime: "6 min read",
    category: "Performance",
    link: "#",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="min-h-screen flex items-center justify-center py-24 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-red-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">04</span>
          <div className="h-px w-16 bg-red-500/50" />
          <span className="text-white/50 font-mono text-sm tracking-widest uppercase">Blog</span>
        </div>

       

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px] hover:shadow-red-500/15 cursor-pointer"
            >
              <a href={post.link} className="block">
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-mono tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Date and Read Time */}
                  <div className="flex items-center gap-4 text-sm text-white/30">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="w-4 h-4" />
                      <time>{post.date}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold tracking-tight text-white/90 group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/50 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-red-500 font-mono text-sm tracking-wider pt-2">
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Read Article
                    </span>
                    <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

        {/* View All Blog Posts Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#"
            className="group/btn inline-flex items-center gap-3 px-8 py-3.5 border border-red-500/50 text-red-400 text-sm font-mono tracking-widest uppercase rounded-sm hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
          >
            View All Articles
            <FiArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
