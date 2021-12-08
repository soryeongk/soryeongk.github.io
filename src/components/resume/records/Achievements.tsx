import { ContentList, ResumeContent } from "components";
import { useEffect, useState } from "react";
import { getAchieveList } from "utils";

interface AchieveData {
  id: string;
  date: string;
  content: string;
}

function Achievements() {
  const [achieveList, setAchieveList] = useState<AchieveData[]>([]);

  useEffect(() => {
    (async function () {
      const data = await getAchieveList();
      setAchieveList(data);
    })();
  });
  return (
    <ResumeContent title="Achievements">
      {achieveList.map((achieve) => (
        <ContentList key={achieve.id} date={achieve.date} content={achieve.content} dateWidth="10rem" />
      ))}
    </ResumeContent>
  );
}

export default Achievements;
