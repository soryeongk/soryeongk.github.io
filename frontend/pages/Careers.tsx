export default function Careers() {
  return (
    <div className="px-3 pb-3 bg-white-dark w-full">
      <ul className="flex flex-col gap-y-[1px] w-full bg-blue">
        <CareerListItem
          date="2022.07 ~"
          text="오토피디아(닥터차 서비스 운영사) 프론트엔드 개발"
          skills={["React.js(Next.js)", "GraphQL(apollo client)"]}
        />
        <CareerListItem
          date="2022.03 ~ 2022.06"
          text="와이오엘오(크로켓 서비스 운영사) 프론트엔드 개발(인턴)"
          skills={["Vue.js"]}
        />
      </ul>
    </div>
  );
}

interface CareerListItemProps {
  date: string;
  text: string;
  skills: string[];
  url?: string;
}

function CareerListItem({ date, text, skills }: CareerListItemProps) {
  return (
    <li className="flex flex-col py-2 bg-white-dark">
      <div className="flex flex-col">
        <span className="text-gray-500">{date}</span>
        <strong>{text}</strong>
      </div>
      <div className="flex gap-x-2">
        <span>📌</span>
        <span>{skills.join(", ")}</span>
      </div>
    </li>
  );
}
