import styled from "styled-components";
import { theme } from "styled-tools";
import { ResumeContent } from "components";
import { EmailIcon, GithubIcon, InstagramIcon, VelogIcon } from "assets";

function Connection() {
  return (
    <StyledContainer>
      <ResumeContent title="Contact">
        <>
          <StyledContent>
            <EmailIcon />
            <span>e-mail</span>soryeongk.kr@gmail.com
          </StyledContent>
          <StyledContent>
            <InstagramIcon />
            <span>instagram</span>@soryeongk
          </StyledContent>
        </>
      </ResumeContent>
      <ResumeContent title="Channels">
        <>
          <StyledContent>
            <GithubIcon />
            <span>github</span>@soryeongk | github.com/soryeongk
          </StyledContent>
          <StyledContent>
            <VelogIcon />
            <span>velog</span>@soryeongk | velog.io/@soryeongk
          </StyledContent>
        </>
      </ResumeContent>
    </StyledContainer>
  );
}

export default Connection;

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  ${theme("fonts.display")}

  svg {
    margin-right: 1rem;
  }

  span {
    position: relative;
    width: 7rem;

    &::after {
      position: absolute;
      right: 0;
      content: ":";
      margin: 0 0.5rem;
    }
  }
`;
