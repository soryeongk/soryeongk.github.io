import styled from "styled-components";
import { theme } from "styled-tools";
import { Information, Records } from "../components/index";

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
  gap: 8.5rem;
  background-color: ${theme("colors.mainWhite")};
  padding: 14.5rem 10rem 13rem 10rem;
  flex: 1 1;
  width: 100vw;
  height: 100vh;
`;
