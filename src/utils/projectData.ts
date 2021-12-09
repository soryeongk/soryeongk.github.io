import {
  cherishBanner,
  cherishBannerMid,
  cherishPhoto01,
  colfumeBanner,
  colfumePhoto01,
  colfumePhoto02,
  colfumePhoto03,
  dnolBanner,
  dnolPhoto01,
  reOlive0Banner,
  reOlive0BannerMid,
  reOlive0Photo01,
  reOlive0Photo02,
} from "assets";
import { theme } from "styles/theme";

export interface ProjectInfo {
  head: string;
  width: string;
  content: string;
}

export interface ProjectConnect {
  id: string;
  connect: string;
  url: string;
}

export interface ProjectContent {
  type: string;
  context: string;
  margin?: string;
}

export interface ProjectData {
  title: string;
  textColor: string;
  bgColor: string;
  pointColor: string;
  infoData: ProjectInfo[];
  connectData: ProjectConnect[];
  projectDatum: ProjectContent[];
}

const INFOS: { [projectName: string]: ProjectInfo[] } = {
  cherish: [
    { head: "주요 역할", width: "fit-content", content: "기획" },
    { head: "사용 기술", width: "fit-content", content: "python, AWS EC2" },
  ],
  reOlive0: [
    { head: "주요 역할", width: "fit-content", content: "디자인, 프론트엔드 개발자" },
    { head: "사용 기술", width: "fit-content", content: "Figma, HTML/CSS" },
  ],
  colfume: [
    { head: "주요 역할", width: "fit-content", content: "프론트엔드 개발자" },
    { head: "사용 기술", width: "fit-content", content: "TypeScript, React: Next.js, SWR, styled-components, Recoil" },
  ],
  dnol: [
    { head: "주요 역할", width: "fit-content", content: "프론트엔드 개발자" },
    { head: "사용 기술", width: "fit-content", content: "React" },
  ],
};

const CONNECTS: { [projectName: string]: ProjectConnect[] } = {
  cherish: [
    {
      id: "cherish-01",
      connect: "devFolio 인터뷰",
      url: "https://velog.io/@devfolio/%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%A7%8C%EB%93%9C%EC%85%A8%EC%96%B4%EC%9A%94-5-CHERISH",
    },
    { id: "cherish-02", connect: "홍보영상 보러가기", url: "https://youtu.be/YRuwT29FK4Q" },
    {
      id: "cherish-03",
      connect: "Android 다운로드",
      url: "https://play.google.com/store/apps/details?id=com.sopt.cherish",
    },
    {
      id: "cherish-04",
      connect: "iOS 다운로드",
      url: "https://apps.apple.com/kr/app/cherish-%EC%97%B0%EB%9D%BD%EC%9D%84-%EC%9D%B4%EC%96%B4%EA%B0%80%EB%8A%94-%EA%B0%80%EC%9E%A5-%EC%89%AC%EC%9A%B4-%EB%B0%A9%EB%B2%95/id1557601516",
    },
  ],
  reOlive0: [
    {
      id: "reOlive0-01",
      connect: "Figma",
      url: "https://www.figma.com/file/Yh7bWkXfiIS0JBG0SEy3Aa/Olive0?node-id=778%3A401",
    },
  ],
  colfume: [
    {
      id: "colfume-01",
      connect: "devFolio 인터뷰",
      url: "https://velog.io/@devfolio/%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%A7%8C%EB%93%9C%EC%85%A8%EC%96%B4%EC%9A%94-4-colfume%ED%8C%80-%EC%9D%B8%ED%84%B0%EB%B7%B0",
    },
    { id: "colfume-02", connect: "colfume 홈페이지", url: "https://www.colfume.co.kr/" },
  ],
  dnol: [
    {
      id: "dnol-01",
      connect: "데이터야놀자 공식 홈페이지",
      url: "https://datayanolja.kr/",
    },
    { id: "dnol-02", connect: "데이터야놀자2020 홈페이지", url: "https://datayanolja.github.io/" },
  ],
};

const PROJECTDATUM: { [projectName: string]: ProjectContent[] } = {
  cherish: [
    { type: "banner", context: cherishBanner, margin: "4rem" },
    { type: "subTitle", context: "연락을 이어가는 가장 쉬운 방법" },
    {
      type: "paragraph",
      context:
        "Cherish는 사람들과 연락하는 일을 식물에 물주는 것에 비유합니다. 각 식물에 맞는 주기와 양으로 물을 주며 보살피듯, 사람과의 관계마다 적절한 연락 방식이 있다고 생각한 것에서 착안했습니다. 꾸준히 관계를 돈독히 하고 싶은 사람들을 등록하고 연락하는 주기를 설정할 수 있습니다. 연락이 필요할 때 알림을 보내주고 어떤 대화를 나누었는지 메모할 수 있습니다. 시간이 지날수록 애정도가 쌓이면서 그 사람을 상징하는 식물도 꽃으로 성장해 갑니다.",
      margin: "10rem",
    },
    { type: "img", context: cherishPhoto01, margin: "5rem" },
    { type: "title", context: "나부터 공감할 수 있는 서비스 만들기", margin: "3rem" },
    {
      type: "paragraph",
      context:
        "기획자로서 서비스에 공감하는 것이 가장 중요하다고 생각했습니다. 바쁘다는 이유로 소중한 인연들을 놓치고 있는 것은 아닌지, 이대로 괜찮을지에 대한 고민이 있었습니다. Cherish가 저의 개인적인 자책을 조금은 보듬어줄 수 있는 서비스라고 생각해 프로젝트를 함께 하게 되었습니다.",
      margin: "2rem",
    },
    { type: "subTitle", context: "연락을 보다 재미있게!" },
    {
      type: "paragraph",
      context:
        "Cherish는 바쁘다는 이유로 자꾸 연락을 미루는 사람, 연락이 일처럼 느껴지는 사람들을 위한 서비스입니다. 생각해보면 인연을 길게 이어나가기 위한 가장 기본적이고 쉬운 방법은 연락이고, 이를 재밌게 한다면 그 문제를 조금이나마 해결할 수 있을거라고 생각했습니다. 사전 리서치에서 주변 또래 20대 분들을 대상으로 연락에 관한 설문조사 및 인터뷰를 바탕으로 앱 기획에 대한 기반을 마련하였습니다. 또한, 당시 디자인이나 앱 UX적인 부분은 체리쉬와 비슷한 앱 자체가 당시 플레이 스토어나 앱 스토어에 있지가 않았어서 정말 여러 식물을 기반으로한 게임, 키우기 등의 앱들을 참고하면서 만들었습니다.",
      margin: "10rem",
    },
    { type: "banner", context: cherishBannerMid, margin: "4rem" },
    {
      type: "paragraph",
      context:
        "iOS와 안드로이드 어플을 릴리즈하였고, 그 중 AppStore에서 에디터로부터 긍정적인 평가를 받았습니다. 덕분에 “이번 주 주목해야 할 앱”과 “오늘의 앱”으로 선정되어 유저 수가 급격히 늘어났습니다. 더욱 좋은 앱 운영을 위해 현재 개발자들은 어플 유지보수를, 기획자인 저는 QA와 함께 최소 기능 제품(MVP)과 관리자 페이지 개발 중에 있습니다.",
      margin: "10rem",
    },
    { type: "title", context: "기획자로서 기여할 수 있는 것", margin: "2rem" },
    { type: "subTitle", context: "슬랙봇으로 최소 기능 제품(MVP) 만들기" },
    {
      type: "paragraph",
      context:
        "Cherish는 연락을 이어가고 싶은 사람들을 식물로 등록하면, 각각의 주기와 시간에 맞추어 연락 알림을 주는 것이 주 기능입니다. 어플 릴리즈 후에 좋은 반응을 얻었지만, 유저들의 목소리를 듣는 것은 쉽지 않았습니다. “연락 알림을 받는 것만으로 연락에 대한 동기부여가 될까?”하는 원초적 물음에서 시작한 MVP 개발은 고객 확보를 위한 추가 홍보용으로도 사용될 수 있다고 생각했습니다. Cherish의 주기능 하나만 넣은 슬랙봇을 만들어 유저들의 반응을 살펴보기 위하여 개발 중에 있습니다.",
      margin: "2rem",
    },
    { type: "subTitle", context: "관리자 페이지로 유저 추적하기" },
    {
      type: "paragraph",
      context:
        "릴리즈 후 유저가 증가하였지만, 다운로드 수와 실 사용자를 추적하기 위해서는 앱을 등록한 개발자와 유저 DB를 관리하는 서버 개발자에게 문의해야 하는 번거로움이 있었습니다. 사용자 문의가 발생하면 개발자에게 문의 후 기획에서 다시 대응하는 구조였습니다. 효율적이지 못한 커뮤니케이션을 개선하기 위해 SQL 기초를 공부하고 서버 개발자로부터 DB를 확인하는 방법을 배웠습니다. 또한, 개발 지식이 없는 다른 기획 팀원들을 위해 사용자를 쉽게 추적할 수 있는 관리자 페이지를 구현 중에 있습니다.",
      margin: "10rem",
    },
    { type: "title", context: "좋은 기획자로 성장하기", margin: "2rem" },
    {
      type: "subTitle",
      context: "사용자를 위한 기획만큼 팀원을 위한 기획이 중요하다는 것을 배울 수 있었습니다.",
    },
    {
      type: "paragraph",
      context:
        "Cherish는 처음 3주간의 프로젝트로 시작된 장기 해커톤이었습니다. 이후 6개월간 어플 유지보수를 거쳐 릴리즈에 성공했고, 예상보다 좋은 반응을 얻었습니다. 하지만, 초반 목표 기한을 훌쩍 넘어가면서 팀 전체 인원(총 15명: 기획 3명, 디자인 3명, 프론트 6명, 서버 3명) 모두가 함께 이어가기에는 개인의 사정이 있었습니다. 서비스의 성장만큼 좋은 동료를 잃지 않는 것이 중요했기에 긴 호흡으로 천천히 서비스 유지 보수를 이어가기로 했습니다. 각자의 생활에 집중하되, 2주에 한 번 회의를 통해 작지만 가치 있는 결과물을 계속 쌓아가고 있습니다.",
      margin: "2rem",
    },
    {
      type: "paragraph",
      context:
        "기획자로서 프로젝트에 참여할 수 있는 기회가 또 주어진다면, 적당한 개발의 크기와 기간을 정하고, 서비스 유지보수를 위한 설계도 고려한 기획을 해보고 싶습니다.",
    },
  ],
  reOlive0: [
    { type: "banner", context: reOlive0Banner, margin: "4rem" },
    { type: "subTitle", context: "반갑습니다, 즐거운 올리브영입니다!" },
    {
      type: "paragraph",
      context:
        "취급하는 상품이 다양하고 진행하는 이벤트도 많은 올리브영 홈페이지를 조금 더 사용성있게 리디자인해보았습니다. 올리브영 근무 경험을 살려 고객들에게 더 필요한 정보는 무엇인지 고민하고, 유사한 종류의 홈페이지를 참조하였습니다. HTML과 CSS로만 작업하여 시멘틱 태그와 스타일링을 깊이 고민하여 웹표준에 부합하는 좋은 페이지를 만드는 것을 목표로 하였습니다.",
      margin: "2rem",
    },
    { type: "subTitle", context: "화장품 구매에서 나타나는 지식의 빈부격차" },
    {
      type: "paragraph",
      context:
        "핸드메이드 코스메틱 브랜드 LUSH와 국내 Health&Beauty 스토어 올리브영에서 근무하면서 화장품 구매에서 일반 소비자들이 겪는 문제점을 알 수 있었습니다. 화장품과 관련한 각종 콘텐츠와 정보가 풍부한 덕분에 주도적으로 원하는 상품을 구매하는 고객이 많아진 것은 사실입니다. 동시에 콘텐츠에 익숙하지 못하고 무관심한 고객은 오프라인 매장에서 헤매기도 합니다. 특히 기초 화장품은 브랜드별로 진열되어있어 자신에게 맞는 상품을 찾는 것이 어려워하시는 고객님들이 많았습니다.",
      margin: "10rem",
    },
    { type: "img", context: reOlive0Photo01, margin: "10rem" },
    { type: "title", context: "프로젝트 시작 이유", margin: "2rem" },
    {
      type: "paragraph",
      context:
        "일반 고객이 화장품 오프라인 매장 이용 경험과 구매에서 겪는 어려움을 확인하기 위해 130여명을 대상으로 개인적으로 직접 설문조사를 해본 적이 있습니다. 그 결과는 다음과 같습니다.",
      margin: "1rem",
    },
    {
      type: "paragraph",
      context: "1. 제품을 직접 보기 위해서 사람들은 오프라인 매장을 찾을 수 밖에 없다.",
    },
    {
      type: "paragraph",
      context:
        "2. 접객을 꺼리는 사람들이 많긴 하지만, 40대 이상의 고객님들은 딱히 꺼리지 않았고, 약 20%의 사람들이 직접 물어보고 구매하고자 매장을 방문한다고 답했기 때문에 접객이 사라지는 것은 옳지 않다. 5명 중 1명의 비율로 접객을 필요로 한다.",
    },
    {
      type: "paragraph",
      context: "3. 모든 나이대의 응답에서 요약정리를 원하는 사람들이 많다. (76% 이상)",
      margin: "1rem",
    },
    {
      type: "paragraph",
      context:
        "설문조사 결과를 바탕으로 Easy Pick Zone을 만들어 피부 고민별로 제품을 나누어 설명한 종이를 배치했습니다. 이 달의 프로모션 상품과 자사 제품을 적당히 안내할 수 있어서 영업 효과도 있었지만, 점장님의 입장에서는 매달 내용을 변경하고 디자인하는 것에 시간을 쓰는 것을 부담스러워 하셨습니다.",
      margin: "10rem",
    },
    { type: "title", context: "프론트엔드 개발자로서 기여할 수 있는 것", margin: "2rem" },
    {
      type: "paragraph",
      context:
        "매장 직원들의 이야기를 들으면서 올리브영 홈페이지와 어플에서 같은 역할을 수행할 수 있다면 더 좋겠다는 생각을 했습니다. 다 안다고 생각하면서 넘어갔던 HTML/CSS도 다시 한 번 공부해야겠다는 생각으로 리디자인 프로젝트를 시작했습니다.",
      margin: "1rem",
    },
    { type: "subTitle", context: "리디자인 포인트: “올리브영 매장에서의 경험을 온라인에서도 느낄 수 있게 하자!”" },
    {
      type: "paragraph",
      context:
        "올리브영은 고객에게 먼저 말을 거는 적극적인 영업 대신, 도움이 필요하면 언제든 찾을 수 있도록 주변에 머무는 방식을 택하고 있습니다. 온라인 홈페이지에서도 제품의 광고를 줄이고 조금 더 여유있는 디자인이 필요하다는 생각을 했습니다.",
      margin: "4rem",
    },
    { type: "banner", context: reOlive0BannerMid, margin: "10rem" },
    { type: "img", context: reOlive0Photo02, margin: "10rem" },
    { type: "title", context: "화장품 구매를 어렵게만 생각하지 않았으면 좋겠어요", margin: "2rem" },
    {
      type: "paragraph",
      context:
        "스킨 로션부터 색조 등 화장품은 우리 생활에서 자주 사용되고 있고, 관련 콘텐츠도 많습니다. 하지만 여전히 자신의 피부 타입, 제형별 특징, 색조의 종류 등 복잡하다고 느끼는 고객님이 많고, 너무 많은 콘텐츠에 오히려 정보를 얻기 어려워졌습니다. 언제부터인가 오프라인 매장 직원을 ‘부담’이라고 느끼는 사람이 많아지면서 온라인 홈페이지의 역할이 더욱 중요해졌다고 생각합니다.",
      margin: "1rem",
    },
    {
      type: "paragraph",
      context:
        "올리브영 홈페이지 디자인은 다른 사이트에서도 많이 참고하고 있을 정도로 잘 만들어져있다는 이야기를 들은 적이 있습니다. 하지만 다양하고 많은 정보를 담고 있는 탓인지 ‘난잡해보인다’, ‘광고밖에 없는 것 같다’는 의견도 있었습니다. 직원이자 고객의 입장에서 조금 더 사용성 좋은 페이지로 바꾸는 것을 목표로 했습니다.",
      margin: "1rem",
    },
    {
      type: "paragraph",
      context:
        "주어진 디자인만 똑같이 구현하기 보다는 사용자의 입장에서 디자인까지 고민해보는 것도 필요하다고 생각했습니다. 디자인 전공자에게 조언을 구하기도 하고, 유사 홈페이지(제품군이 다양한 서비스)를 레퍼런스로 하여 디자인해보았습니다. 디자인을 깊이 있게 공부하고, 어렵다는 이유로 타협하지 않기 보다는 진짜 사용자에게 필요한 디자인을 모두 구현할 수 있는 개발자가 되고 싶다는 생각을 했습니다.",
    },
  ],
  colfume: [
    { type: "banner", context: colfumeBanner, margin: "4rem" },
    { type: "subTitle", context: "“시향을 하지 않고 향기를 전달할 수 없을까?”라는 고민과 함께 출발했습니다." },
    {
      type: "paragraph",
      context:
        "향을 글로 전달하고 묘사하는 것은 대부분의 향수 브랜드에서도 제공하지만, 고객의 입장에서는 여전히 진입장벽이 높을 수 있다고 생각했습니다. 색상과 스타일, 키워드 등의 직관적인 정보를 제공하는 방향으로 접근했습니다.",
      margin: "10rem",
    },
    { type: "img", context: colfumePhoto01, margin: "4rem" },
    { type: "img", context: colfumePhoto02, margin: "4rem" },
    { type: "subTitle", context: "색을 통해 당신의 향을 찾아보세요" },
    {
      type: "paragraph",
      context:
        "Colfume은 향수 구매를 어려워하는 사람들을 위해 색으로 향수를 선택할 수 있도록 하는 서비스입니다. 향수를 색감별로, 분위기별로, 스타일별로 보여줄 뿐 아니라, 심리테스트를 통해 맞춤 향수를 추천하고, 그 결과를 다른 사람에게 공유할 수 있습니다.",
      margin: "10rem",
    },
    { type: "img", context: colfumePhoto03, margin: "4rem" },
    { type: "title", context: "나의 노하우를 전달할 수 있는 서비스", margin: "2rem" },
    {
      type: "paragraph",
      context:
        "러쉬와 올리브영에서 근무하면서 향수 구매를 어려워하는 사람들이 많다는 것을 알았습니다. 생각해보면, 선물할 향수를 추천을 도와줄 때마다 직원으로서 제가 물어보는 질문은 비슷했습니다. 선물받는 사람의 이미지, 어떤 스타일과 분위기인지를 묻고 좋아하는 향이 있다면 그에 덧붙여서 추천했습니다. 시향을 하지 않더라도 간단한 정보만으로 향수 구매를 훨씬 수월해진다는 것을 체감할 수 있었기에 Colfume 아이디에 크게 공감했습니다.",
      margin: "1rem",
    },
    { type: "title", context: "기술 선정 이유", margin: "2rem" },
    {
      type: "paragraph",
      context: "새로운 기술에 쫓기면 안되지만, 뭐든 직접 사용해봐야 장단점을 알 수 있다고 생각합니다.",
      margin: "1rem",
    },
    { type: "subTitle", context: "TypeScript" },
    {
      type: "paragraph",
      context:
        "자유로운 영혼의 JavaScript를 공부하면서 디버깅에 어려움을 겪는 일이 많았습니다. ESLint로 잡을 수 있는 오류들은 금방 해결할 수 있었지만, 근본적인 해결책이 되지 못한다는 생각을 했습니다. 주변의 추천으로 공부를 시작했고, 동적인 JS를 제어하는 비서 같다는 생각을 했습니다. 디버깅의 편리함을 알게 되어 공부를 더 해보고 싶다는 했습니다.",
      margin: "1rem",
    },
    { type: "subTitle", context: "Next.js" },
    {
      type: "paragraph",
      context:
        "처음에는 단순히 내가 모르는 기술이라서, 동시에 TypeScript를 지원하고 있어 공부에 도움이 될 것 같다는 생각에 선택했습니다. 프로젝트 시작 전 Next.js를 공부하면서 다량의 향수 정보를 불러와 렌더링하기 위해서는 Pre-rendering과 이미지 최적화를 지원하는 Next.js가 우리 서비스에 적합하다고 생각했습니다. 또한, Next.js에서 기본으로 제공하는 페이지네이션 덕분에 향수 제품 별로 페이지를 만드는 것에도 큰 품을 들이지 않아도 된다는 생각에 최종으로 선정하게 되었습니다.",
      margin: "1rem",
    },
    { type: "subTitle", context: "styled-components" },
    {
      type: "paragraph",
      context:
        "디자이너가 원하는 디자인을 모두 구현하고 싶어 semantic UI는 사용하지 않고 직접 구현했습니다. 또한, 리액트 다운 사고방식으로 globalstyle과 theme을 세팅을 할 수 있다고 생각하여 styled-components를 선정했습니다.",
      margin: "1rem",
    },
    { type: "subTitle", context: "Recoil" },
    {
      type: "paragraph",
      context:
        "초기 프로젝트 개발 기간은 3주였습니다. 짧은 기간 동안 러닝 커브가 높은 Redux나 MobX를 새롭게 공부해서 프로젝트에 바로 적용하는 것에는 어려움이 있을 것이라고 생각했습니다. 또한, 리액트 Hook처럼 사용할 수 있다는 점에서 팀원 모두가 빠르게 학습할 수 있는 Recoil을 선정했습니다.",
      margin: "1rem",
    },
    { type: "subTitle", context: "SWR" },
    {
      type: "paragraph",
      context:
        "Data Fetching이 잦은 서비스이기에 자동으로 재검증(revalidate)을 지원하는 SWR을 선택했습니다. 에러를 반환하더라도 캐싱된 데이터를 활용할 수 있게 함으로써 데이터를 계속 호출하는데 시간을 쓰지 않는다는 점에서 우리 서비스에서 사용하기 좋다고 생각했습니다.",
      margin: "10rem",
    },
    { type: "title", context: "배운 점", margin: "2rem" },
    {
      type: "paragraph",
      context:
        "팀원 모두가 Next.js과 TypeScript 등을 공부하면서 적용하다보니 초반 세팅부터 어려웠습니다. 또한, 라이브러리를 일부 수정해서 커스텀하는 과정이 꽤 험난했습니다. 캐러셀 구현을 위해 가장 널리 쓰이는 것으로 보이는 react-slick을 사용했는데, 슬라이드 콘텐츠 사이에 구분 선을 넣는 것이 생각보다 까다로웠습니다. 오른쪽에 구분 선을 포함하여 하나의 콘텐츠로 만들었고, 구분 선의 너비와 여백을 계산해 중앙 정렬이 덜 깨지도록 하였습니다. 현재는 더 좋은 해결책을 찾기 위해 공식 문서를 제대로 읽어보면서 코드를 리팩토링하고 있습니다.",
      margin: "1rem",
    },
    {
      type: "paragraph",
      context:
        "팀차원에서 어려웠던 점은, 전체 인원(총 10명: 기획 2명, 디자인 1명, 프론트 4명, 백엔드 3명) 코로나 때문에 만날 수 없는 상황이라 온라인으로 소통해야 하는게 어려웠습니다. 매일 회의하면서 커뮤니케이션을 더욱 활발하게 하고 슬랙과 노션, 피그마를 잘 활용해야 했습니다.",
    },
  ],
  dnol: [
    { type: "banner", context: dnolBanner, margin: "4rem" },
    { type: "subTitle", context: "데이터를 다루는 모든 사람들의 축제" },
    {
      type: "paragraph",
      context:
        "데이터에 대한 관심은 나날이 늘어나고 있지만, 데이터를 가지고 제대로 ‘놀 줄 아는’ 사람들의 이야기는 주변에서 쉽게 듣기가 어렵습니다. 데이터야놀자는 데이터 사용자들이 데이터와 더 잘 ‘놀’ 수 있는 방법을 고민하고 이를 공유합니다. 발표자, 참가자, 커뮤니티 그리고 후원기업 모두가 데이터로 어울릴 수 있는 장을 펼쳐 나가고 있습니다.",
      margin: "10rem",
    },
    { type: "img", context: dnolPhoto01, margin: "4rem" },
    { type: "subTitle", context: "재미를 찾아서" },
    {
      type: "paragraph",
      context:
        "데이터야놀자는 매년 컨셉을 정하고, 그에 맞는 디자인을 그려왔습니다. 2020년 “데놀랜드” 컨셉은 가장 데이터야놀자와 어울리는 디자인이었다고 평가받고 있습니다. 라프코스터의 재미이론이라는 책을 읽고 사람마다 노는 방식이 다르고 재미를 느끼는 포인트가 다르다는 점에서 착안하였습니다. 소소한 재미를 느낀 경험부터 예측 모형의 정확도를 0.1% 올리면서 느낀 희열까지 데이터를 다루며 느낀 다양한 재미를 담고 싶다는 준비위원회의 생각을 담은 디자인이었습니다.",
      margin: "10rem",
    },
    { type: "title", context: "프로젝트 참여 이유" },
    {
      type: "paragraph",
      context:
        "2018년, python을 처음 공부하면서 서울 시내 카페 색감 분석(Colors of Seoul - Cafe) 프로젝트를 진행한 적이 있습니다. 좋은 기회로 데이터야놀자2018에서 해당 프로젝트를 발표한 것이 인연의 시작이었습니다. 2020년 초대를 받아 준비위원회로 함께 하게 되었고, 웹 프로그래밍에 관심을 갖기 시작한 시점이었기에 공부 목적으로 홈페이지 파트에 들어갔습니다. 디자이너와 함께 홈페이지 구성부터 함께 고민하고, JavaScript 기초와 react를 공부하면서 개발을 했습니다. 2021년에는 후원사 모집과 관리를 맡아 스폰서 파트장으로서 함께 하고 있습니다.",
      margin: "10rem",
    },
    { type: "title", context: "프론트엔드 개발자로서 첫 협업", margin: "2rem" },
    { type: "subTitle", context: "설계부터 개발까지" },
    {
      type: "paragraph",
      context:
        "홈페이지는 발표자와 참가자, 후원사에게 데이터야놀자의 첫인상이 됩니다. 컨셉을 아우르면서도 예쁘고 직관적인 디자인을 만들고, 전달하고자 하는 내용을 적절한 메뉴에 배치하는 것이 중요하다고 생각합니다. 디자이너에게 글꼴과 오브젝트 배치에 대해서 배우면서 설계를 함께 했습니다. 디자인이 입혀지는 동안 css와 react를 공부하기 시작했고, 팀원들의 도움을 받으면서 개발을 했습니다. 처음에는 이미지를 띄우는 것도 힘들었지만, 나중에는 JavaScript 문법 활용도 해볼 수 있었습니다.",
      margin: "1rem",
    },
    { type: "subTitle", context: "지치지 않고 즐겁게 일하기" },
    {
      type: "paragraph",
      context:
        "데이터야놀자 준비위원회는 모두 자발적 의지로 모인 사람들입니다. 소위 말하는 “부캐”로서 참여하기 때문에 본업과 행사 준비를 병행합니다. 데이터야놀자의 모든 의사결정은 회의를 통해 결정되며, 모두가 동등한 위치에서 의견을 냅니다. 때문에 구성원의 그 누구도 타인의 일정을 강제할 수 없습니다. 일정에 차질이 없도록 하기 위해서는 팀원들과 원활하게 소통하는 것이 매우 중요했습니다. 멋진 결과물을 만드는 것만큼 행사 준비를 즐길 수 있는 방법에 대해 오랜 시간 회의했습니다. 부드러운 화법을 사용하되, 정확한 커뮤니케이션하는 것, 짧지만 자주 회의하는 것을 개발팀의 규칙으로 정했습니다. 그럼에도 불구하고 중도 하차를 고민하는 팀원과 개발을 따라오지 못하는 팀원이 존재했고, 저역시 처음 배우는 언어와 기술에 리액트를 제대로 활용하지는 못했다고 생각합니다. 하지만, 당시 끝까지 함께 했던 팀원들과 지금까지 좋은 관계를 유지하고 있다는 점에서 성공적인 프로젝트였다고 생각합니다.",
    },
  ],
};

export const PROJECTDATA: { [projectName: string]: ProjectData } = {
  cherish: {
    title: "연락을 이어가는 가장 쉬운 방법: Cherish",
    textColor: theme.colors.cherishBlack,
    bgColor: theme.colors.cherishBg,
    pointColor: theme.colors.cherishPoint,
    infoData: INFOS["cherish"],
    connectData: CONNECTS["cherish"],
    projectDatum: PROJECTDATUM["cherish"],
  },
  reOlive0: {
    title: "올리브영 홈페이지 리디자인",
    textColor: theme.colors.reOlive0Black,
    bgColor: theme.colors.reOlive0Bg,
    pointColor: theme.colors.reOlive0Point,
    infoData: INFOS["reOlive0"],
    connectData: CONNECTS["reOlive0"],
    projectDatum: PROJECTDATUM["reOlive0"],
  },
  colfume: {
    title: "색으로 찾는 나만의 향기: Colfume.",
    textColor: theme.colors.colfumeBlack,
    bgColor: theme.colors.colfumeBg,
    pointColor: theme.colors.colfumePoint,
    infoData: INFOS["colfume"],
    connectData: CONNECTS["colfume"],
    projectDatum: PROJECTDATUM["colfume"],
  },
  dnol: {
    title: "색으로 찾는 나만의 향기: dnol.",
    textColor: theme.colors.dnolBlack,
    bgColor: theme.colors.dnolBg,
    pointColor: theme.colors.dnolPoint,
    infoData: INFOS["dnol"],
    connectData: CONNECTS["dnol"],
    projectDatum: PROJECTDATUM["dnol"],
  },
};
