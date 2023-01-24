import { ActivityResponse } from "../../axios/types/activity";
import SectionTitle from "../../components/SectionTitle";
import { useReadActivities } from "../../hooks/query/activity";
import useNavigation, { NavigationIndex } from "../../hooks/useNavigation";
import { parseDate } from "../../utils/date";
import { ActivityCategory } from "../admin/index.page";

import Achievements from "./Achievements";
import Careers from "./Careers";
import Educations from "./Educations";
import Projects from "./Projects";

const Activities = () => {
  const { navigationIndex } = useNavigation();
  const { data, isLoading, isError } = useReadActivities();

  if (isLoading) {
    return <div>목록을 불러오는 중이에요!</div>;
  }

  if (!data || !data.activities || isError) {
    return <div>목록을 불러오는데 실패했어요ㅠ</div>;
  }

  if (navigationIndex === NavigationIndex.TIME_SERIES)
    return (
      <section className="px-4 w-full">
        <ul className="flex flex-col gap-y-[1px] bg-blue">
          {data.activities.map((activity) => (
            <ActivityListItem key={activity._id} {...activity} />
          ))}
        </ul>
      </section>
    );

  return (
    <section>
      <div className="flex flex-col w-full bg-gray-100 ">
        <SectionTitle title="CAREERS" />
        <Careers
          careers={data.activities.filter(
            (activity) => activity.category === ActivityCategory.CAREERS
          )}
        />
      </div>

      <div className="flex flex-col w-full bg-gray-100 ">
        <SectionTitle title="Projects" />
        <Projects
          projects={data.activities.filter(
            (activity) => activity.category === ActivityCategory.PROJECTS
          )}
        />
      </div>

      <div className="flex flex-col w-full bg-gray-100 ">
        <SectionTitle title="Achievements" />
        <Achievements
          achievements={data.activities.filter(
            (activity) => activity.category === ActivityCategory.ACHIEVEMENTS
          )}
        />
      </div>

      <div className="flex flex-col w-full bg-gray-100 ">
        <SectionTitle title="EDUCATIONS" />
        <Educations
          educations={data.activities.filter(
            (activity) => activity.category === ActivityCategory.EDUCATIONS
          )}
        />
      </div>
    </section>
  );
};

export default Activities;

const ActivityListItem = ({
  title,
  description,
  date,
  category,
  url,
}: ActivityResponse) => {
  return (
    <li className="flex flex-col gap-y-1 py-3 bg-gray-100">
      <div className="flex items-center justify-between w-full">
        <span className="text-gray-500">
          {date.from
            ? [parseDate(date.from), "~", parseDate(date.to)].join(" ")
            : parseDate(date.to)}
        </span>
        {category && (
          <span className="rounded-md py-0.5 px-1.5 bg-blue text-white text-xs">
            {category}
          </span>
        )}
      </div>
      <div className="flex items-end justify-between">
        <div className="flex-1 flex flex-col">
          <strong>{title}</strong>
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            <span className="shrink-0 text-sm text-gray-500 underline decoration-wavy underline-offset-4">
              🔗 구경하기
            </span>
          </a>
        )}
      </div>
    </li>
  );
};
