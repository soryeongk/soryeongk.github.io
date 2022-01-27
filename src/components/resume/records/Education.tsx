import { ContentList, ResumeContent } from "components";
import { useEffect, useState } from "react";
import { getEduList } from "utils";

interface EduData {
  id: string;
  date: string;
  education: string;
}

function Education() {
  const [eduList, setEduList] = useState<EduData[]>([]);

  useEffect(() => {
    (async function () {
      const data = await getEduList();
      setEduList(data);
    })();
  }, []);

  return (
    <ResumeContent title="Education">
      {eduList.map((edu) => (
        <ContentList date={edu.date} content={edu.education} key={edu.id} />
      ))}
    </ResumeContent>
  );
}

export default Education;
