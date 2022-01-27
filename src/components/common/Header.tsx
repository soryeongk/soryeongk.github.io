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
  logo: string[];
  title: string;
  projectName: string;
  pointCol: string;
  connectData: ConnectData[];
  infoData: InfoData[];
}

function Header(props: HeaderProps) {
  const { logo, title, projectName, pointCol, connectData, infoData } = props;

  return (
    <StyledContainer pointCol={pointCol}>
      <ResumeContent title={title} hrColor={pointCol}>
        {infoData.map((info, idx) => (
          <ContentList key={idx} date={info.head} dateWidth={info.width} content={info.content} />
        ))}
      </ResumeContent>

      <StyledWrapper>
        <StyledIcon logoImg={logo[0]} href={logo[1]} />
        <StyledConnectionWrapper>
          {connectData.map((connection) => (
            <StyledConnection pointCol={pointCol} href={connection.url} key={`${projectName}: ${connection.id}`}>
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
  position: sticky;
  top: 6.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2rem solid ${(props) => props.pointCol};
  padding-bottom: 4rem;
  width: 100%;

  @media ${theme("device.mobile")} {
    flex-direction: column;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media ${theme("device.mobile")} {
    flex-direction: row;
  }
`;

const StyledIcon = styled.a<{ logoImg: string }>`
  position: relative;
  background-image: url(${(props) => props.logoImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 6rem;
  height: 6rem;

  &::before {
    content: "GitHub";
    position: absolute;
    top: -1.5rem;
    left: 8%;
  }

  @media ${theme("device.mobile")} {
    &::before {
      display: none;
    }
  }
`;

const StyledConnectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media ${theme("device.mobile")} {
    width: 40rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const StyledConnection = styled.a<{ pointCol: string }>`
  ${theme("fonts.display")}

  & + & {
    position: relative;

    &::before {
      content: "|";
      position: absolute;
      left: -1.9rem;
    }
  }

  &:hover {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-decoration-color: ${(props) => props.pointCol};
  }

  @media ${theme("device.mobile")} {
    & + & {
      &::before {
        display: none;
      }
    }

    &:hover {
      text-decoration: none;
    }
  }
`;
