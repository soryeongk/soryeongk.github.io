import styled from "styled-components";
import { Header, ProjectContainer } from "components";
import { theme } from "styled-tools";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getProjectData } from "utils";
import { ProjectConnect, ProjectContent, ProjectInfo } from "utils/projectData";

function Project() {
  const { pathname } = useLocation();
  const projectName: string = pathname.split("/")[2];

  const [mainInfo, setMainInfo] = useState<{ title: string; pointCol: string }>({ title: "", pointCol: "" });
  const [infoList, setInfoList] = useState<ProjectInfo[]>([]);
  const [connectList, setConnectList] = useState<ProjectConnect[]>([]);
  const [projectList, setProjectList] = useState<ProjectContent[]>([]);

  useEffect(() => {
    (async function () {
      const data = await getProjectData(projectName);
      setMainInfo({ title: data.title, pointCol: data.pointColor });
      setConnectList(data.connectData);
      setInfoList(data.infoData);
      setProjectList(data.projectDatum);
    })();
  }, []);

  return (
    <StyledContainer>
      <Header
        projectName={projectName}
        title={mainInfo.title}
        pointCol={mainInfo.pointCol}
        connectData={connectList}
        infoData={infoList}
      />
      <ProjectContainer pointCol={mainInfo.pointCol} projectData={projectList} />
    </StyledContainer>
  );
}

export default Project;

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme("colors.cherishBg")};
  padding: 6.5rem 11.5rem;
  padding-bottom: 15rem;
`;
