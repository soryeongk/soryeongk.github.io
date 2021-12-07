import { ListIndexIcon } from "assets/index";
// import { NavigateFunction } from "react-router";
import styled from "styled-components";
import { theme } from "styled-tools";

interface Content {
  date: string;
  content: string;
  //   onContentClick?: () => NavigateFunction;
  onContentClick?: () => void;
}

function ContentList(props: Content) {
  const { date, content, onContentClick } = props;

  return (
    <StyledWrapper onClick={onContentClick}>
      <ListIndexIcon />
      <StyledDate>{date}</StyledDate>
      <span>{content}</span>
    </StyledWrapper>
  );
}

export default ContentList;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  ${theme("fonts.display")}

  svg {
    margin-right: 1rem;
  }
`;

const StyledDate = styled.span`
  margin-right: 2rem;
  width: 21rem;
`;
