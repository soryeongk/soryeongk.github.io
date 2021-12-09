import styled from "styled-components";
import { theme } from "styled-tools";
import { Information, Records } from "../components";

function Resume() {
  return (
    <StyledContainer>
      <Information />
      <Records />
    </StyledContainer>
  );
}

export default Resume;

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 15rem;
  background-color: ${theme("colors.mainWhite")};
  padding: 12rem 10rem;
  width: 100vw;
  height: 100vh;
`;
