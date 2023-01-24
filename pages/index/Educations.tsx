import { ActivityResponse } from "../../axios/types/activity";
import { parseDate } from "../../utils/date";

interface EducationsProps {
  educations: ActivityResponse[];
}

export default function Educations({ educations }: EducationsProps) {
  return (
    <div className="px-4 pb-3 bg-gray-100 w-full">
      <ul className="flex flex-col gap-y-[1px] w-full bg-blue">
        {educations?.map((education) => (
          <EducationListItem key={education._id} {...education} />
        ))}
      </ul>
    </div>
  );
}

function EducationListItem({ date, title, description }: ActivityResponse) {
  return (
    <li className="flex flex-col py-2 bg-gray-100">
      <span className="text-blue">
        {[parseDate(date.from), "~", parseDate(date.to)].join(" ")}
      </span>
      <strong>{title}</strong>
      {description && (
        <span className="text-sm text-gray-600">{description}</span>
      )}
    </li>
  );
}
