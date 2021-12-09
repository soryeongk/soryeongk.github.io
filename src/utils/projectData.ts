import {
  cherishBanner,
  cherishBannerMid,
  cherishPhoto01,
  reOlive0Banner,
  reOlive0BannerMid,
  reOlive0Photo01,
  reOlive0Photo02,
} from "assets";

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
};

export const PROJECTDATA: { [projectName: string]: ProjectData } = {
  cherish: {
    title: "연락을 이어가는 가장 쉬운 방법: Cherish",
    pointColor: "#31D692",
    infoData: INFOS["cherish"],
    connectData: CONNECTS["cherish"],
    projectDatum: PROJECTDATUM["cherish"],
  },
  reOlive0: {
    title: "올리브영 홈페이지 리디자인",
    pointColor: "#A6CD48",
    infoData: INFOS["reOlive0"],
    connectData: CONNECTS["reOlive0"],
    projectDatum: PROJECTDATUM["reOlive0"],
  },
};
