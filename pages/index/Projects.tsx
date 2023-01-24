import { ActivityResponse } from "../../axios/types/activity";
import { parseDate } from "../../utils/date";

interface ProjectsProps {
  projects: ActivityResponse[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="pb-3 px-2 w-full">
      <ul className="flex flex-col gap-y-[1px] bg-blue w-full">
        {projects.map((project) => (
          <ProjectListItem key={project._id} {...project} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;

const ProjectListItem = ({
  date,
  title,
  description,
  url,
}: ActivityResponse) => {
  return (
    <li className="flex flex-col gap-y-2 py-3 px-4 bg-gray-100">
      <span className="text-gray-500">
        {[parseDate(date.from), "~", parseDate(date.to)].join(" ")}
      </span>
      <div className="flex justify-between">
        <strong className="flex-1">{title}</strong>
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            <span className="shrink-0 text-xs text-gray-500 underline decoration-wavy underline-offset-4">
              🔗 구경하기
            </span>
          </a>
        )}
      </div>
      {description && <p className="text-sm text-gray-700">{description}</p>}
    </li>
  );
};
