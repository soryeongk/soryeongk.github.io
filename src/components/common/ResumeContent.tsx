import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

interface ContentProps {
  title: string;
  children: React.ReactNode;
  direction?: string;
}

function ResumeContent(props: ContentProps) {
  const { title, children, direction = "column" } = props;

  return (
    <StyledContainer direction={direction}>
      <StyledTitle direction={direction}>
        {title}
        <hr />
      </StyledTitle>
      <StyledContent direction={direction}>{children}</StyledContent>
    </StyledContainer>
  );
}

export default ResumeContent;

const StyledContainer = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => (props.direction === "row" ? "space-between" : "initial")};
`;

const StyledTitle = styled.span<{ direction: string }>`
  width: fit-content;
  position: relative;
  ${theme("fonts.title")}
  z-index: 2;
  padding-top: ${(props) => (props.direction === "row" ? "1.2rem" : "0")};

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

const StyledContent = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: ${(props) => (props.direction === "column" ? "2rem 0 0 2rem" : "0")};

  span {
    ${theme("fonts.display")}
  }
`;
