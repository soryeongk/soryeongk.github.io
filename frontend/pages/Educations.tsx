export default function Education() {
  return (
    <div className="px-4 pb-3 bg-gray-100 w-full">
      <ul className="flex flex-col gap-y-[1px] w-full bg-blue">
        <EducationListItem
          date="2016.03 ~ 2022.02"
          text="중앙대학교 졸업"
          memo="경영학 전공"
        />
        <EducationListItem
          date="2019.04 ~ 2019.06"
          text="도쿄 월드 일본어 학교 수료"
          memo="워킹홀리데이(2019.03 ~ 2020.02)"
        />
        <EducationListItem
          date="2018.06 ~ 2018.10"
          text="데잇걸즈 2기 수료"
          memo="데이터 사이언티스트 양성 교육 프로그램"
        />
        <EducationListItem
          date="2013.03 ~ 2016.02"
          text="충남 외국어 고등학교 졸업"
          memo="영어 전공, 일본어 부전공"
        />
      </ul>
    </div>
  );
}

interface EducationListItemProps {
  date: string;
  text: string;
  memo?: string;
}

function EducationListItem({ date, text, memo }: EducationListItemProps) {
  return (
    <li className="flex flex-col py-2 bg-gray-100">
      <span className="text-blue">{date}</span>
      <strong>{text}</strong>
      {memo && <span className="text-sm text-gray-600">{memo}</span>}
    </li>
  );
}
