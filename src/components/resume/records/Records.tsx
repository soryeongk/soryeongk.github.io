import { Achievements, Education, ProjectList } from "../../index";
import { StyledContainer } from "../information/Information";

function Records() {
  return (
    <StyledContainer>
      <Education />
      <ProjectList />
      <Achievements />
    </StyledContainer>
  );
}

export default Records;
