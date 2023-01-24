const Achievements = () => {
  return (
    <div className="px-4 pb-3 bg-gray-100 w-full">
      <ul className="flex flex-col gap-y-[1px] w-full bg-blue">
        <AchievementListItem
          date="2022.07.08"
          title="QR코드 연동 고객 관리 플랫폼 시스템"
          description="개인 특허 등록: 10-2021-0000098"
        />
        <AchievementListItem date="2019.01.23" title="JLPT N2 취득" />
        <AchievementListItem
          date="2018.10.19"
          title="데이터야놀자 2018 연사"
          description="서울시내 색감 분석 프로젝트 발표"
        />
        <AchievementListItem
          date="2018.10.19"
          title="Little Big Data - 이그나이트 연사"
          description="데잇걸즈 2기 수료 경험 발표"
        />
        <AchievementListItem
          date="2018.07.31"
          title="한경닷컴 대표이사상(2등)"
          description="NSI 주관 대학생 100인 토론 워크샵"
        />
      </ul>
    </div>
  );
};

export default Achievements;

interface AchievementListItemProps {
  date: string;
  title: string;
  description?: string;
  url?: string;
}

const AchievementListItem = ({
  date,
  title,
  description,
}: AchievementListItemProps) => {
  return (
    <li className="flex flex-col gap-y-1 py-2 bg-gray-100">
      <span className="text-blue">{date}</span>
      <div className="flex flex-col">
        <strong>{title}</strong>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </li>
  );
};
