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
    <section id="blog" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-20"
        >
          <h2 className="font-bebas-neue text-7xl md:text-8xl lg:text-9xl font-black mb-4">
            Blog
          </h2>
        </motion.div>

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
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px] hover:shadow-red-500/20 cursor-pointer"
            >
              <a href={post.link} className="block">
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-xs font-mono tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  {/* Date and Read Time */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-red-500 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-red-500 font-medium pt-2">
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Read Article
                    </span>
                    <FiArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* View All Blog Posts Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-500/80 font-medium transition-colors duration-300 group"
          >
            <span className="text-lg">View All Articles</span>
            <FiArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
