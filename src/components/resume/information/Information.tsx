import styled from "styled-components";
import { AboutMe, Connection, Skills } from "components";
import { theme } from "styled-tools";

function Information() {
  return (
    <StyledContainer width="100rem">
      <AboutMe />
      <Connection />
      <Skills />
    </StyledContainer>
  );
}

export default Information;

export const StyledContainer = styled.section<{ width: string }>`
  display: flex;
  flex-direction: column;
  gap: 10rem;
  width: ${(props) => props.width};

  @media ${theme("device.mobile")} {
    width: 90vw;
  }
`;
