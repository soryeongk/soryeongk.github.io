import { ContentList, ResumeContent } from "components";

const EDULIST: { id: string; date: string; education: string }[] = [
  { id: "edu-01", date: "2016.03.02 ~ now", education: "중앙대학교 재학 중 (경영학 전공, 인문소프트웨어 융합 전공)" },
  { id: "edu-02", date: "2019.04.04 ~ 2019.06.21", education: "도쿄 월드 일본어 학교 수료 (워킹홀리데이)" },
  { id: "edu-03", date: "2018.06.00 ~ 2018.10.00", education: "빅데이터 전문가과정 데잇걸즈 수료" },
  { id: "edu-04", date: "2013.03.04 ~ 2016.02.00", education: "충남 외국어 고등학교 졸업 (영어 전공, 일본어 부전공)" },
];

function Education() {
  return (
    <ResumeContent title="Education">
      {EDULIST.map((edu) => (
        <ContentList date={edu.date} content={edu.education} key={edu.id} />
      ))}
    </ResumeContent>
  );
}

export default Education;
