import styled from "styled-components";
import { ContentList, ResumeContent } from "components";
import { useLocation } from "react-router";
import { theme } from "styled-tools";

const CONNECTS: { id: string; connect: string; url: string }[] = [
  {
    id: "connect-01",
    connect: "devFolio 인터뷰",
    url: "https://velog.io/@devfolio/%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%A7%8C%EB%93%9C%EC%85%A8%EC%96%B4%EC%9A%94-5-CHERISH",
  },
  { id: "connect-02", connect: "홍보영상 보러가기", url: "https://youtu.be/YRuwT29FK4Q" },
  {
    id: "connect-03",
    connect: "Android 다운로드",
    url: "https://play.google.com/store/apps/details?id=com.sopt.cherish",
  },
  {
    id: "connect-04",
    connect: "iOS 다운로드",
    url: "https://apps.apple.com/kr/app/cherish-%EC%97%B0%EB%9D%BD%EC%9D%84-%EC%9D%B4%EC%96%B4%EA%B0%80%EB%8A%94-%EA%B0%80%EC%9E%A5-%EC%89%AC%EC%9A%B4-%EB%B0%A9%EB%B2%95/id1557601516",
  },
];
function Header() {
  const projectName = useLocation().pathname;

  return (
    <StyledContainer>
      <ResumeContent title="연락을 이어가는 가장 쉬운 방법: Cherish" hrColor="green">
        <ContentList date="주요 역할" dateWidth="fit-content" content="기획" />
        <ContentList date="사용 기술" dateWidth="fit-content" content="python, AWS EC2" />
      </ResumeContent>
      <StyledWrapper>
        <TempIcon />
        <StyledConnectionWrapper>
          {CONNECTS.map((connection) => (
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

const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5rem solid green;
  padding-bottom: 4rem;
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
    /* left: calc(25%); */
    left: 9%;
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
