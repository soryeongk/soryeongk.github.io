import { ContentList, ResumeContent } from "components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getProjectList } from "utils";

interface ProjectData {
  id: string;
  date: string;
  projectName: string;
  content: string;
  highlight: boolean;
}

function ProjectList() {
  const navigate = useNavigate();

  const [projectList, setProjectList] = useState<ProjectData[]>([]);

  useEffect(() => {
    (async function () {
      const data = await getProjectList();
      setProjectList(data);
    })();
  }, []);

  return (
    <ResumeContent title="Projects">
      {projectList.map((project) => (
        <ContentList
          key={project.id}
          date={project.date}
          dateWidth="18rem"
          content={project.content}
          onContentClick={() => navigate(`/project/${project.projectName}`)}
          highlight={project.highlight}
        />
      ))}
    </ResumeContent>
  );
}

export default ProjectList;
