import { ContentList, ResumeContent } from "components";
import { useNavigate } from "react-router";

const PROJECTS: string[] = ["cherish", "dibker", "colfume", "ddowaddo"];

function ProjectList() {
  const navigate = useNavigate();

  return (
    <ResumeContent title="Projects">
      {PROJECTS.map((project) => (
        <ContentList
          key={project}
          date="0000.00.00 ~ 0000.00.00"
          content={project}
          onContentClick={() => navigate(`/project/${project}`)}
        />
      ))}
    </ResumeContent>
  );
}

export default ProjectList;
