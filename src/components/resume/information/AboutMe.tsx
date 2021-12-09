import { profileImg } from "assets";
import styled from "styled-components";
import { theme } from "styled-tools";

function AboutMe() {
  return (
    <StyledContainer>
      <StyledProfile />
      <StyledWrapper>
        <StyledTitle>
          김소령 | soryeongk
          <span>기획의 중심을 지킬 수 있는 단단한 개발자가 되고 싶습니다.</span>
        </StyledTitle>
        <StyledParag>
          개발자는 아이디어를 구현하는 사람입니다.
          <br />
          주어진 것에 집중하는 것만큼, 더 좋은 결과물을 위해 필요한 지식을 공부하고
          <br />
          방향을 제안할 수 있어야한다고 생각합니다. 문뜩 떠오르는 아이디어를
          <br />
          생각으로만 그치고 싶지 않아 데이터 분석을 공부한 것이 개발의 시작이었습니다.
          <br />
          대량의 데이터 분석을 위해 AWS 가상머신에서 리눅스 사용해보기도 했습니다.
          <br />
          결과를 공유하기 위해서 웹 개발을 시작했고, 더 좋은 화면을 위한 디자인을 공부
          <br />
          했습니다. 아이디어를 지키기 위해서 개인 특허 출원을 진행하고, 현재는 개발의
          <br />
          깊이를 더하고 단단하게 만들고 있습니다.
          <br />
          <span>다양한 분야를 깊이 있게 공부하고 적용할 수 있는 프론트엔드 개발자</span>로서
          <br />
          기획의 중심을 지킬 수 있는 사람이 되고 싶습니다.
        </StyledParag>
      </StyledWrapper>
    </StyledContainer>
  );
}

export default AboutMe;

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledProfile = styled.div`
  border-radius: 13rem;
  background-color: ${theme("colors.mainPoint")};
  background-image: url(${profileImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 25rem;
  height: 33.4rem;

  @media only screen and (max-width: 1920px) {
    width: 30rem;
    height: 45rem;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
`;

const StyledTitle = styled.p`
  display: flex;
  flex-direction: column;
  ${theme("fonts.headLine")}

  span {
    margin-top: 1rem;
    ${theme("fonts.display")}
    color: ${theme("colors.mainGray")};
  }
`;

const StyledParag = styled.p`
  white-space: pre-wrap;
  ${theme("fonts.caption")}

  span {
    ${theme("fonts.captionBold")}
  }
`;
