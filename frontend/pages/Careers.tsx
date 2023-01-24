export default function Careers() {
  return (
    <div className="px-4 pb-3 bg-gray-100 w-full">
      <ul className="flex flex-col gap-y-[1px] w-full bg-blue">
        <CareerListItem
          date="2022.07 ~"
          text="오토피디아(닥터차 서비스 운영사) FE 개발"
          skills={["React.js(Next.js)", "GraphQL(apollo client)"]}
        />
        <CareerListItem
          date="2022.03 ~ 2022.06"
          text="와이오엘오(크로켓 서비스 운영사) FE 개발(인턴)"
          skills={["Vue.js"]}
        />
        <CareerListItem
          date="2016.02 ~ 2017.12"
          text="글로세움(현 메이저리서치) 인턴"
          skills={["대입 멘토링, 운영/마케팅 업무"]}
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
    <li className="flex flex-col py-2 bg-gray-100">
      <div className="flex flex-col">
        <span className="text-blue">{date}</span>
        <strong>{text}</strong>
      </div>
      <div className="flex gap-x-2 text-gray-600 text-sm">
        <span>📌</span>
        <span>{skills.join(", ")}</span>
      </div>
    </li>
  );
}
