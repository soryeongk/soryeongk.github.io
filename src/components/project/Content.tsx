import { StyledLine } from "components/common/ResumeContent";
import styled from "styled-components";
import { theme } from "styled-tools";

interface ContentData {
  type: string;
  context: string;
  margin?: string;
}

interface ContentProps {
  content: ContentData;
  pointCol: string;
}

function Content(props: ContentProps) {
  const { type, context, margin = "0rem" } = props.content;
  const pointCol = props.pointCol;

  switch (type) {
    case "banner":
      return <img style={{ width: "145rem", marginBottom: margin }} src={context} alt="banner" />;
    case "img":
      return <img style={{ width: "100%", marginBottom: margin }} src={context} alt="img" />;
    case "title":
      return (
        <StyledTitle margin={margin}>
          <span>
            {context}
            <StyledLine hrColor={pointCol} />
          </span>
        </StyledTitle>
      );
    case "subTitle":
      return <StyledSubTitle margin={margin}>{context}</StyledSubTitle>;
    default:
      return <StyledDisplay margin={margin}>{context}</StyledDisplay>;
  }
}

export default Content;

const StyledTitle = styled.div<{ margin: string }>`
  z-index: 2;
  margin-bottom: ${(props) => props.margin};
  width: 100%;
  ${theme("fonts.paragraphTitle")}

  & > span {
    position: relative;
    width: fit-content;
  }
`;

const StyledSubTitle = styled.span<{ margin: string }>`
  margin-bottom: ${(props) => props.margin};
  width: 100%;
  ${theme("fonts.paragraphBold")}
`;

const StyledDisplay = styled.span<{ margin: string }>`
  margin-bottom: ${(props) => props.margin};
  width: 100%;
  ${theme("fonts.paragraph")}
`;
