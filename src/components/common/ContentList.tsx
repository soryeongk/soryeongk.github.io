import { ListIndexIcon } from "assets/index";
// import { NavigateFunction } from "react-router";
import styled, { css } from "styled-components";
import { ifProp, theme } from "styled-tools";

interface Content {
  date: string;
  content: string;
  dateWidth?: string;
  //   onContentClick?: () => NavigateFunction;
  onContentClick?: () => void;
  highlight?: boolean;
}

function ContentList(props: Content) {
  const { date, content, dateWidth = "21rem", onContentClick, highlight = false } = props;

  return (
    <StyledWrapper onClick={onContentClick} highlight={highlight}>
      <ListIndexIcon />
      <StyledDate dateWidth={dateWidth}>{date}</StyledDate>
      <span>{content}</span>
    </StyledWrapper>
  );
}

export default ContentList;

const StyledWrapper = styled.div<{ highlight: boolean }>`
  display: flex;
  align-items: center;
  ${ifProp(
    { highlight: true },
    css`
      ${theme("fonts.displayBold")}
    `,
    css`
      ${theme("fonts.display")}
    `,
  )}
  cursor: pointer;

  svg {
    margin-right: 1rem;
  }
`;

const StyledDate = styled.span<{ dateWidth: string }>`
  margin-right: 2rem;
  width: ${(props) => props.dateWidth};
`;
