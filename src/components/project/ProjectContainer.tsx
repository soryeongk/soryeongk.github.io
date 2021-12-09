import styled from "styled-components";
import { Content } from "components";

interface ProjectData {
  type: string;
  context: string;
  margin?: string;
}

interface ProjectProps {
  pointCol: string;
  projectData: ProjectData[];
}

function ProjectContainer(props: ProjectProps) {
  const projectData = props.projectData;

  return (
    <StyledContainer>
      {projectData.map((content, idx) => (
        <Content key={idx} content={content} pointCol={props.pointCol} />
      ))}
    </StyledContainer>
  );
}

export default ProjectContainer;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  width: 81.1rem;
`;
