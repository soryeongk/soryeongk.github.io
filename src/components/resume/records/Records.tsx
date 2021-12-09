import { Achievements, Education, ProjectList } from "../../index";
import { StyledContainer } from "../information/Information";

function Records() {
  return (
    <StyledContainer width="80rem">
      <Education />
      <ProjectList />
      <Achievements />
    </StyledContainer>
  );
}

export default Records;
