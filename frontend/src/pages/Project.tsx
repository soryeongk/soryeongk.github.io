import styled from "styled-components";
import { Header, ProjectContainer } from "components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getProjectData } from "utils";
import { ProjectConnect, ProjectContent, ProjectInfo } from "utils/projectData";
import { theme } from "styled-tools";

interface ProjectColors {
  textCol: string;
  bgCol: string;
  pointCol: string;
}

function Project() {
  const { pathname } = useLocation();
  const projectName: string = pathname.split("/")[2];
  const [logo, setLogo] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [mainColors, setMainColors] = useState<ProjectColors>({
    textCol: "",
    bgCol: "",
    pointCol: "",
  });
  const [infoList, setInfoList] = useState<ProjectInfo[]>([]);
  const [connectList, setConnectList] = useState<ProjectConnect[]>([]);
  const [projectList, setProjectList] = useState<ProjectContent[]>([]);

  useEffect(() => {
    (async function () {
      const data = await getProjectData(projectName);
      setLogo(data.logo);
      setTitle(data.title);
      setMainColors({ textCol: data.textColor, bgCol: data.bgColor, pointCol: data.pointColor });
      setConnectList(data.connectData);
      setInfoList(data.infoData);
      setProjectList(data.projectDatum);
    })();
  }, []);

  return (
    <StyledContainer textCol={mainColors.textCol} bgCol={mainColors.bgCol}>
      <Header
        projectName={projectName}
        logo={logo}
        title={title}
        pointCol={mainColors.pointCol}
        connectData={connectList}
        infoData={infoList}
      />
      <ProjectContainer pointCol={mainColors.pointCol} projectData={projectList} />
    </StyledContainer>
  );
}

export default Project;

const StyledContainer = styled.main<{ textCol: string; bgCol: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgCol};
  padding: 6.5rem 11.5rem;
  padding-bottom: 70rem;
  color: ${(props) => props.textCol};

  @media ${theme("device.mobile")} {
    padding: 2rem;
  }
`;
