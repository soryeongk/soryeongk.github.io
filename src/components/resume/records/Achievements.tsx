import { ContentList, ResumeContent } from "components";

const ACHIEVES: { id: string; date: string; content: string }[] = [
  { id: "achieve-01", date: "2021.07.17", content: "SOPT 28th APP-JAM 대상 - Colfume" },
  { id: "achieve-02", date: "2021.01.16", content: "SOPT 28th APP-JAM 최우수상 - Cherish" },
  { id: "achieve-03", date: "2019.02", content: "JLPT N2 취득" },
];

function Achievements() {
  return (
    <ResumeContent title="Achievements">
      {ACHIEVES.map((achieve) => (
        <ContentList key={achieve.id} date={achieve.date} content={achieve.content} dateWidth="10rem" />
      ))}
    </ResumeContent>
  );
}

export default Achievements;
