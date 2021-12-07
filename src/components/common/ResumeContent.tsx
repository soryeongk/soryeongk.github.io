import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

interface ContentProps {
  title: String;
  children: React.ReactChild;
}

function ResumeContent({ title, children }: ContentProps) {
  return (
    <StyledContainer>
      <StyledTitle>
        {title}
        <hr />
      </StyledTitle>
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
}

export default ResumeContent;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.span`
  width: fit-content;
  position: relative;
  ${theme("fonts.title")}
  z-index: 2;

  &::after {
    content: ".";
    color: ${theme("colors.mainWhite")};
  }

  hr {
    position: absolute;
    bottom: 0.3rem;
    z-index: -1;
    margin: 0;
    border: 0;
    background-color: ${theme("colors.mainPoint")};
    width: 100%;
    height: 0.5rem;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding-left: 2rem;

  span {
    ${theme("fonts.display")}
  }
`;
