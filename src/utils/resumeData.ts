import {
  EmailIcon,
  InstagramIcon,
  GithubIcon,
  VelogIcon,
  FigmaIcon,
  JSIcon,
  NextIcon,
  NotionIcon,
  PyIcon,
  ReactIcon,
  SlackIcon,
  TSIcon,
} from "../assets";

interface Project {
  id: string;
  date: string;
  projectName: string;
  content: string;
  highlight: boolean;
}

interface Edu {
  id: string;
  date: string;
  education: string;
}

interface Achieve {
  id: string;
  date: string;
  content: string;
}

interface ConnectionData {
  id: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  connect: string;
  address: string;
  url?: string;
}

interface Skill {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  skill: string;
}

export const PROJECTS: Project[] = [
  {
    id: "bookTez",
    date: "2021.01.02 ~ now",
    projectName: "bookTez",
    content: "[FrontEnd] 진짜 독서가들을 위한 독서법: 북스테어즈",
    highlight: true,
  },
  {
    id: "cherish",
    date: "2020.12.12 ~ now",
    projectName: "cherish",
    content: "[기획] 당신의 소중한 사람을 위한 연락관리 서비스: Cherish",
    highlight: true,
  },
  {
    id: "dibker",
    date: "2020.11.21 ~ now",
    projectName: "dibker",
    content: "[PM] 의류 공유 서비스: dibker",
    highlight: false,
  },
  {
    id: "ddowaddo",
    date: "2020.06.27 ~ now",
    projectName: "ddowaddo",
    content: "[개인 특허 출원] QR코드 연동 고객 관리 플랫폼 시스템: 또와또",
    highlight: false,
  },
  {
    id: "reBrunch",
    date: "2021.11.13 ~ 12.05",
    projectName: "reBrunch",
    content: "[FrontEnd] bunch 홈페이지 리디자인",
    highlight: false,
  },
  {
    id: "reOlive0",
    date: "2021.09.28 ~ 10.31",
    projectName: "reOlive0",
    content: "[Design & FrontEnd] 올리브영 메인 페이지 리디자인",
    highlight: true,
  },
  {
    id: "colfume",
    date: "2021.06.26 ~ 08.31",
    projectName: "colfume",
    content: "[FrontEnd] 색으로 찾는 나만의 향기: Colfume",
    highlight: true,
  },
  {
    id: "reNaver",
    date: "2021.05.22 ~ 06.11",
    projectName: "reNaver",
    content: "[FrontEnd] 네이버 홈페이지 리디자인",
    highlight: false,
  },
  {
    id: "fishing",
    date: "2021.11.21 ~ 11.22",
    projectName: "fishing",
    content: "[PM] 일중독에서 벗어날 휴식 레퍼런스: FISHING",
    highlight: false,
  },
  {
    id: "dnol",
    date: "2020.08.31 ~ 10.17",
    projectName: "dnol",
    content: "[FrontEnd] 데이터야놀자2020 홈페이지",
    highlight: true,
  },
];

export const EDULIST: Edu[] = [
  { id: "edu-01", date: "2016.03.02 ~ now", education: "중앙대학교 재학 중 (경영학 전공, 인문소프트웨어 융합 전공)" },
  { id: "edu-02", date: "2019.04.04 ~ 2019.06.21", education: "도쿄 월드 일본어 학교 수료 (워킹홀리데이)" },
  { id: "edu-03", date: "2018.06.25 ~ 2018.10.07", education: "빅데이터 전문가과정 데잇걸즈 수료" },
  { id: "edu-04", date: "2013.03.04 ~ 2016.02.15", education: "충남 외국어 고등학교 졸업 (영어 전공, 일본어 부전공)" },
];

export const ACHIEVES: Achieve[] = [
  { id: "북스테어즈", date: "2022.01.22", content: "SOPT 28th APP-JAM 최우수상 - 북스테어즈" },
  { id: "colfume", date: "2021.07.17", content: "SOPT 28th APP-JAM 대상 - Colfume" },
  { id: "cherish", date: "2021.01.16", content: "SOPT 27th APP-JAM 최우수상 - Cherish" },
  { id: "JLPT N2", date: "2019.02", content: "JLPT N2 취득" },
];

export const CONTACTS: ConnectionData[] = [
  { id: "contact-01", icon: EmailIcon, connect: "e-mail", address: "soryeongk.kr@gmail.com" },
  { id: "contact-02", icon: InstagramIcon, connect: "instagram", address: "@soryeongk" },
];

export const CHANNELS: ConnectionData[] = [
  { id: "channel-01", icon: GithubIcon, connect: "github", address: "github.com/soryeongk" },
  { id: "channel-02", icon: VelogIcon, connect: "velog", address: "velog.io/@soryeongk" },
];

export const SKILLS: Skill[] = [
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
