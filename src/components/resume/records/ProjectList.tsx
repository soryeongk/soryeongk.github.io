import { ContentList, ResumeContent } from "components";
import { useNavigate } from "react-router";

const PROJECTS: { id: string; date: string; projectName: string; content: string; highlight: boolean }[] = [
  {
    id: "project-01",
    date: "2020.12.12 ~ now",
    projectName: "cherish",
    content: "[기획] 당신의 소중한 사람을 위한 연락관리 서비스: Cherish",
    highlight: false,
  },
  {
    id: "project-02",
    date: "2020.11.21 ~ now",
    projectName: "dibker",
    content: "[PM] 의류 공유 서비스: dibker",
    highlight: false,
  },
  {
    id: "project-03",
    date: "2020.06.27 ~ now",
    projectName: "ddowaddo",
    content: "[개인 특허 출원] QR코드 연동 고객 관리 플랫폼 시스템: 또와또",
    highlight: false,
  },
  {
    id: "project-04",
    date: "2021.11.13 ~ 12.05",
    projectName: "reBrunch",
    content: "[FrontEnd] bunch 홈페이지 리디자인",
    highlight: true,
  },
  {
    id: "project-05",
    date: "2021.09.28 ~ 10.31",
    projectName: "reOlive0",
    content: "[Design & FrontEnd] 올리브영 메인 페이지 리디자인",
    highlight: true,
  },
  {
    id: "project-06",
    date: "2021.06.26 ~ 08.31",
    projectName: "colfume",
    content: "[FrontEnd] 색으로 찾는 나만의 향기: Colfume",
    highlight: true,
  },
  {
    id: "project-07",
    date: "2021.05.22 ~ 06.11",
    projectName: "reNaver",
    content: "[FrontEnd] 네이버 홈페이지 리디자인",
    highlight: true,
  },
  {
    id: "project-08",
    date: "2021.11.21 ~ 11.22",
    projectName: "fishing",
    content: "[PM] 일중독에서 벗어날 휴식 레퍼런스: FISHING",
    highlight: false,
  },
  {
    id: "project-09",
    date: "2020.08.31 ~ 10.17",
    projectName: "dnol",
    content: "[FrontEnd] 데이터야놀자2020 홈페이지",
    highlight: true,
  },
];

function ProjectList() {
  const navigate = useNavigate();

  return (
    <ResumeContent title="Projects">
      {PROJECTS.map((project) => (
        <ContentList
          key={project.id}
          date={project.date}
          dateWidth="18rem"
          content={project.content}
          onContentClick={() => navigate(`/project/${project.projectName}`)}
          highlight={project.highlight}
        />
      ))}
    </ResumeContent>
  );
}

export default ProjectList;
