import styled from "styled-components";
import { AboutMe, Connection, Skills } from "components";

function Information() {
  return (
    <StyledContainer>
      <AboutMe />
      <Connection />
      <Skills />
    </StyledContainer>
  );
}

export default Information;

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 61rem;
`;
