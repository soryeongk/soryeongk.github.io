import { ActivityResponse } from "../../axios/types/activity";
import { parseDate } from "../../utils/date";

interface CareersProps {
  careers: ActivityResponse[];
}

export default function Careers({ careers }: CareersProps) {
  return (
    <div className="px-4 pb-3 bg-gray-100 w-full">
      <ul className="flex flex-col gap-y-[1px] w-full bg-blue">
        {careers?.map((career) => (
          <CareerListItem key={career._id} {...career} />
        ))}
      </ul>
    </div>
  );
}

function CareerListItem({ date, title, description }: ActivityResponse) {
  return (
    <li className="flex flex-col py-2 bg-gray-100">
      <div className="flex flex-col">
        <span className="text-blue">
          {[
            parseDate(date.from, "yyyy-mm"),
            "~",
            parseDate(date.to, "yyyy-mm"),
          ].join(" ")}
        </span>
        <strong>{title}</strong>
      </div>
      {description && (
        <div className="flex gap-x-2 text-gray-600 text-sm">
          <span>📌</span>
          <span>{description}</span>
        </div>
      )}
    </li>
  );
}
