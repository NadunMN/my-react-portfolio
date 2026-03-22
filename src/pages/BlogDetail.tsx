import { useParams } from "react-router-dom";
import { DetailPage } from "@/components/DetailPage";
import { blogPosts } from "@/components/sections/Blog";
import { FiCalendar, FiClock } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  return (
    <DetailPage
      badgeLabel={post.category}
      title={post.title}
      description={post.excerpt}
      backTo="/blog"
      backLabel="Back to all articles"
      meta={
        <>
          <span className="inline-flex items-center gap-1.5">
            <FiCalendar className="h-4 w-4" />
            <span>{post.date}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FiClock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </span>
        </>
      }
    >
      {post.content && (
        <article className="prose prose-sm mt-8 max-w-none break-words prose-invert prose-headings:text-white prose-a:text-accent prose-strong:text-white sm:prose-base lg:prose-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content as string}
          </ReactMarkdown>
        </article>
      )}
    </DetailPage>
  );
};

export default BlogDetail;
