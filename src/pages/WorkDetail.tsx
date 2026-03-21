import { useParams } from "react-router-dom";
import { DetailPage } from "@/components/DetailPage";
import { projects } from "@/components/sections/Work";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return null;
  }

  return (
    <DetailPage
      badgeLabel="Work"
      title={project.title}
      description={project.description}
      image={project.image}
      tags={project.tech}
      backTo="/works"
      backLabel="Back to all works"
    >
      {project.content && (
        <article className="mt-8 prose prose-invert prose-headings:text-white prose-a:text-accent prose-strong:text-white max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.content as string}
          </ReactMarkdown>
        </article>
      )}
    </DetailPage>
  );
};

export default WorkDetail;
