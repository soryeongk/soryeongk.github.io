import { ContentList, ResumeContent } from "components";

const ACHIEVES: string[] = ["SOPT 28th APP-JAM 대상 - Colfume", "SOPT 27th APP-JAM 대상 - Cherish", "JLPT N2 취득"];

function Achievements() {
  return (
    <ResumeContent title="Achievements">
      {ACHIEVES.map((achieve, idx) => (
        <ContentList key={`achieve-${idx}`} date="0000.00.00" content={achieve} />
      ))}
    </ResumeContent>
  );
}

export default Achievements;
