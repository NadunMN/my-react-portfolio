const blogPosts = [
  {
    title: "Building Modern Web Applications",
    date: "March 15, 2024",
    excerpt: "Exploring the latest trends and best practices in web development...",
  },
  {
    title: "The Power of TypeScript",
    date: "March 10, 2024",
    excerpt: "Why TypeScript has become essential for large-scale applications...",
  },
  {
    title: "Performance Optimization Tips",
    date: "March 5, 2024",
    excerpt: "Practical techniques to make your web apps blazingly fast...",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black mb-12">Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300 cursor-pointer"
            >
              <time className="text-sm text-accent font-mono">{post.date}</time>
              <h3 className="text-2xl font-bold mt-3 mb-3">{post.title}</h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
