import styled from "styled-components";
import { theme } from "styled-tools";
import { Information, Records } from "../components";
import Responsive from "components/Responsive";

function Resume() {
  return (
    <>
      <Responsive desktop tablet>
        <StyledContainer>
          <Information />
          <Records />
        </StyledContainer>
      </Responsive>
      <Responsive mobile>
        <StyledMobileContainer>
          <Information />
          <Records />
        </StyledMobileContainer>
      </Responsive>
    </>
  );
}

export default Resume;

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  background-color: ${theme("colors.mainWhite")};
  width: 100vw;
  height: 100vh;

  &::selection {
    background-color: ${theme("colors.mainPoint")};
    color: ${theme("colors.mainWhite")};
  }
`;

const StyledMobileContainer = styled(StyledContainer)`
  flex-direction: column;
  height: initial;
  padding: 10rem 0;
`;
