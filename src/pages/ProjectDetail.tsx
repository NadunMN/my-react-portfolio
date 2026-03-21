import { useParams } from "react-router-dom";
import { DetailPage } from "@/components/DetailPage";
import { projects } from "@/components/sections/Work";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return null;
  }

  return (
    <DetailPage
      badgeLabel="Project"
      title={project.title}
      description={project.description}
      image={project.image}
      tags={project.tech}
      backTo="/works"
      backLabel="Back to all works"
    />
  );
};

export default ProjectDetail;
