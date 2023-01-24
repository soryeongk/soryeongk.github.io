const Projects = () => {
  return (
    <div className="px-4 pb-3 bg-gray-100 w-full">
      <ul className="flex flex-col gap-y-[1px] w-full bg-blue">
        <ProjectListItem
          date={{ from: "2022.07.01" }}
          title="데이터야놀자 2022 운영총괄(놀장)"
          description="데이터를 다루는 모든 사람들의 축제, 데이터야놀자의 대표를 맡고 있습니다. 14개 스폰서와 30명의 발표자, 500여 명의 참가자들이 소통할 수 있는 오프라인 행사를 개최했습니다."
          url="https://event-us.kr/datayanolja2020/event/48793"
        />
        <ProjectListItem
          date={{ from: "2021.01.02" }}
          title="진짜 독서가들을 위한 독서법: 북스테어즈"
          description="효율적으로 독서할 수 있는 방법을 제안합니다. 단순히 활자를 읽는 것이 아니라 스스로 생각을 정리하며 책을 읽을 수 있는 북노트 기능을 제공합니다. 본 프로젝트에서 프론트엔드 리드 개발을 맡았습니다."
          url="https://book-stairs.com/"
        />
        <ProjectListItem
          date={{ from: "2020.12.12" }}
          title="당신의 소중한 사람을 위한 연락관리 서비스: Cherish"
          description="사람들과 연락하는 일을 식물에 물주는 것에 비유해 관계마다 적절한 연락 주기를 설정해 알림을 받고, 어떤 대화를 나누었는지 메모합니다. iOS 앱스토어에서 '이번 주 주목해야할 앱', '오늘의 앱'으로 선정되었습니다. 본 프로젝트에서 기획을 맡았으며, MVP 테스트를 위한 python 코드를 작성하기도 했습니다."
          url="https://www.youtube.com/watch?v=YRuwT29FK4Q"
        />
        <ProjectListItem
          date={{ from: "2021.07.01", to: "2021.10.31" }}
          title="데이터야놀자 2021 스폰서 파트장"
          description="데이터를 다루는 모든 사람들의 축제, 데이터야놀자 2021의 스폰서 파트장을 맡았습니다. 15개의 스폰서와의 소통을 전담하여, 스폰서도 참가자로서 소통할 수 있도록 연결다리 역할을 했습니다."
          url="https://event-us.kr/datayanolja2020/event/37854"
        />
        <ProjectListItem
          date={{ from: "2021.06.26", to: "2021.08.31" }}
          title="색으로 찾는 나만의 향기: Colfume"
          description="향수 구매를 어려워하는 사람들을 위해 색으로 향수를 선택할 수 있도록 하는 서비스입니다. 향수를 색감별로, 분위기별로, 스타일별로 보여줄 뿐 아니라, 심리테스트를 통해 맞춤 향수를 추천하고, 그 결과를 다른 사람에게 공유할 수 있습니다. 본 프로젝트에서 프론트엔드 개발을 맡았습니다."
          url="https://www.colfume.co.kr/"
        />
        <ProjectListItem
          date={{ from: "2020.08.31", to: "2020.10.17" }}
          title="데이터야놀자 2020 홈페이지"
          description="데이터를 다루는 모든 사람들의 축제, 데이터야놀자 2020의 홈페이지 제작을 맡았습니다. 본 프로젝트에서 프론트엔드 개발을 맡았으며, 자원봉사 파트장을 겸하여 준비위원회로서의 활동도 병행했습니다."
          url="https://datayanolja.github.io/"
        />
      </ul>
    </div>
  );
};

export default Projects;

interface ProjectListItemProps {
  date: {
    from: string;
    to?: string;
  };
  title: string;
  description?: string;
  url: string;
}

const ProjectListItem = ({
  date,
  title,
  description,
  url,
}: ProjectListItemProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <li className="flex flex-col gap-y-1 py-2 bg-gray-100">
        <span className="text-blue">
          {[date.from, "~", date.to || "now"].join(" ")}
        </span>
        <strong>{title}</strong>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </li>
    </a>
  );
};
