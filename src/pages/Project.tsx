import styled from "styled-components";
import { Header } from "components";

function Project() {
  return (
    <StyledContainer>
      <Header />
      project Page
    </StyledContainer>
  );
}

export default Project;

const StyledContainer = styled.body`
  display: flex;
  flex-direction: column;
  margin: 6.5rem 11.5rem;
`;
