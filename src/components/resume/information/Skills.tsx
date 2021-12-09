import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { ResumeContent } from "components";
import { getSkills } from "utils";
import Responsive from "components/Responsive";

interface SkillData {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  skill: string;
}

function Skills() {
  const [skillList, setSkillList] = useState<SkillData[]>([]);

  useEffect(() => {
    (async function () {
      const data = await getSkills();
      setSkillList(data);
    })();
  }, []);

  return (
    <>
      <Responsive desktop tablet>
        <ResumeContent title="Skills" direction="row">
          <StyledWrapper>
            {skillList.map((item, idx) => (
              <StyledIconWrapper key={`icon-${idx}`} skill={item.skill}>
                <item.icon />
              </StyledIconWrapper>
            ))}
          </StyledWrapper>
        </ResumeContent>
      </Responsive>
      <Responsive mobile>
        <ResumeContent title="Skills">
          <StyledWrapper>
            {skillList.map((item, idx) => (
              <StyledIconWrapper key={`icon-${idx}`} skill={item.skill}>
                <item.icon />
              </StyledIconWrapper>
            ))}
          </StyledWrapper>
        </ResumeContent>
      </Responsive>
    </>
  );
}

export default Skills;

const StyledWrapper = styled.div`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
`;

const StyledIconWrapper = styled.div<{ skill: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    position: absolute;
    content: "${(props) => props.skill}";
    bottom: -2.5rem;
    ${theme("fonts.caption")}
  }
`;
