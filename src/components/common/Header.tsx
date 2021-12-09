import styled from "styled-components";
import { ContentList, ResumeContent } from "components";
import { theme } from "styled-tools";

interface ConnectData {
  id: string;
  connect: string;
  url: string;
}

interface InfoData {
  head: string;
  width: string;
  content: string;
}

interface HeaderProps {
  title: string;
  projectName: string;
  pointCol: string;
  connectData: ConnectData[];
  infoData: InfoData[];
}

function Header(props: HeaderProps) {
  const { title, projectName, pointCol, connectData, infoData } = props;

  return (
    <StyledContainer pointCol={pointCol}>
      <ResumeContent title={title} hrColor={pointCol}>
        {infoData.map((info, idx) => (
          <ContentList key={idx} date={info.head} dateWidth={info.width} content={info.content} />
        ))}
      </ResumeContent>
      <StyledWrapper>
        <TempIcon />
        <StyledConnectionWrapper>
          {connectData.map((connection) => (
            <StyledConnection href={connection.url} key={`${projectName}: ${connection.id}`}>
              {connection.connect}
            </StyledConnection>
          ))}
        </StyledConnectionWrapper>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default Header;

const StyledContainer = styled.header<{ pointCol: string }>`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2rem solid ${(props) => props.pointCol};
  padding-bottom: 4rem;
  width: 169rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const TempIcon = styled.div`
  position: relative;
  background-color: red;
  width: 5rem;
  height: 5rem;

  &::before {
    content: "GitHub";
    position: absolute;
    top: -1.5rem;
    left: 8%;
  }
`;

const StyledConnectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledConnection = styled.a`
  ${theme("fonts.display")}

  & + & {
    position: relative;

    &::before {
      position: absolute;
      left: -1.9rem;
      content: "|";
    }
  }
`;
