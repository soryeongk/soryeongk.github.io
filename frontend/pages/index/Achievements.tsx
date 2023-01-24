import { ActivityResponse } from "../../axios/types/activity";
import { parseDate } from "../../utils/date";

interface AchievementsProps {
  achievements: ActivityResponse[];
}

const Achievements = ({ achievements }: AchievementsProps) => {
  return (
    <div className="px-4 pb-3 bg-gray-100 w-full">
      <ul className="flex flex-col gap-y-[1px] w-full bg-blue">
        {achievements?.map((achievement) => (
          <AchievementListItem key={achievement._id} {...achievement} />
        ))}
      </ul>
    </div>
  );
};

export default Achievements;

const AchievementListItem = ({
  date,
  title,
  description,
}: ActivityResponse) => {
  return (
    <li className="flex flex-col gap-y-1 py-2 bg-gray-100">
      <span className="text-blue">{parseDate(date.to)}</span>
      <div className="flex flex-col">
        <strong>{title}</strong>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
    </li>
  );
};
