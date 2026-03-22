import { FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import secComContent from "@/blogs/SecCom.md?raw";
import highWebClusterContent from "@/blogs/highWebCluster.md?raw";

export const blogPosts = [
  {
    slug: "secure-communication-setup-between-apache-tomcat-and-mysql-using-tlsv1.2",
    title: "Secure Communication Setup between Apache Tomcat and MySQL using TLSv1.2",
    date: "March 15, 2026",
    excerpt:
      "secure environment where Apache Tomcat communicates with a MySQL database server using TLSv1.2. The objective is to configure both servers in such a way that Tomcat itself, not just applications deployed within it, is able to establish a secure connection with MySQL.",
    readTime: "5 min read",
    category: "Development",
    link: "https://example.com/blog/secure-communication-setup-between-apache-tomcat-and-mysql-using-tlsv1.2",
    content: secComContent,
  },
  {
    slug: "high-availability-web-cluster",
    title: "High-Availability Web Cluster with Load Balancing & Automatic Failover",
    date: "March 10, 2025",
    excerpt:
      "Building a production-grade high-availability web cluster with load balancing and automatic failover capabilities.",
    readTime: "7 min read",
    category: "Development",
    link: "https://example.com/blog/high-availability-web-cluster",
    content: highWebClusterContent,
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background py-14 sm:py-20 lg:py-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-red-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Label */}
        <div className="mb-10 flex items-center gap-3 sm:mb-16 sm:gap-4">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">04</span>
          <div className="h-px w-16 bg-red-500/50" />
          <span className="text-white/50 font-mono text-sm tracking-widest uppercase">Blog</span>
        </div>

       

        {/* Blog Grid */}
        <div className="grid gap-4 md:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-red-500/30 hover:shadow-[0_0_40px_-10px] hover:shadow-red-500/15"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                {/* Category badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-1 text-[10px] font-mono tracking-wider text-red-400 sm:px-3 sm:text-xs">
                    {post.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="space-y-4 p-4 sm:p-6">
                  {/* Date and Read Time */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-white/30 sm:gap-4 sm:text-sm">
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
                  <h3 className="line-clamp-2 text-xl font-bold tracking-tight text-white/90 group-hover:text-red-500 sm:text-2xl">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="line-clamp-3 text-sm leading-relaxed text-white/50 sm:text-base">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 pt-2 font-mono text-xs tracking-wider text-red-500 sm:text-sm">
                    <span>
                      Read Article
                    </span>
                    <FiArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100" />
              </Link>
            </article>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-16" />

        {/* View All Blog Posts Link */}
        <div className="text-center">
          <Link
            to="/blog"
            className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-sm border border-red-500/50 px-5 py-3 text-xs font-mono uppercase tracking-widest text-red-400 hover:border-red-500 hover:bg-red-500 hover:text-white sm:w-auto sm:gap-3 sm:px-8 sm:py-3.5 sm:text-sm"
          >
            View All Articles
            <FiArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
