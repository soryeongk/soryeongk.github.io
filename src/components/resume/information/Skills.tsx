import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import {
  FigmaIcon,
  GithubIcon,
  JSIcon,
  NextIcon,
  NotionIcon,
  PyIcon,
  ReactIcon,
  SlackIcon,
  TSIcon,
} from "assets/index";
import { ResumeContent } from "components";

const SKILLLIST: {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  skill: string;
}[] = [
  { icon: JSIcon, skill: "JavaScript" },
  { icon: TSIcon, skill: "TypeScript" },
  { icon: PyIcon, skill: "python" },
  { icon: ReactIcon, skill: "React" },
  { icon: NextIcon, skill: "Next" },
  { icon: GithubIcon, skill: "GitHub" },
  { icon: SlackIcon, skill: "Slack" },
  { icon: NotionIcon, skill: "Notion" },
  { icon: FigmaIcon, skill: "Figma" },
];

interface Skill {
  skill: string;
}

function Skills() {
  return (
    <ResumeContent title="Skills" direction="row">
      <StyledWrapper>
        {SKILLLIST.map((item, idx) => (
          <StyledIconWrapper key={`icon-${idx}`} skill={item.skill}>
            <item.icon />
          </StyledIconWrapper>
        ))}
      </StyledWrapper>
    </ResumeContent>
  );
}

export default Skills;

const StyledWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

const StyledIconWrapper = styled.div<Skill>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    position: absolute;
    content: "${(props) => props.skill}";
    bottom: -2rem;
    ${theme("fonts.caption")}
  }
`;
