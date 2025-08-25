import {
  ChevronRight,
  GithubIcon,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import SectionTitle from "./_components/SectionTitle";
import Link from "next/link";
import Section from "./_components/Section";

export default function Home() {
  return (
    <main>
      <section>banner</section>
      <Section>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-end gap-x-1">
            <h1 className="text-xl font-bold">김소령</h1>
            <span className="text-lime-500">프론트엔드 엔지니어</span>
          </div>
          <ul className="flex items-center gap-x-1">
            <li className="flex items-center justify-center w-6 h-6 rounded-full bg-lime-500">
              <Link href="https://github.com/soryeongk" target="_blank">
                <GithubIcon width={16} height={16} color="white" />
              </Link>
            </li>
            <li className="flex items-center justify-center w-6 h-6 rounded-full bg-lime-500">
              <Link href="https://github.com/soryeongk" target="_blank">
                <Linkedin width={16} height={16} color="white" />
              </Link>
            </li>
            <li className="flex items-center justify-center w-6 h-6 rounded-full bg-lime-500">
              <Link href="https://github.com/soryeongk" target="_blank">
                <Instagram width={16} height={16} color="white" />
              </Link>
            </li>
            <li className="flex items-center justify-center w-6 h-6 rounded-full bg-lime-500">
              <Link href="https://github.com/soryeongk" target="_blank">
                <Mail width={16} height={16} color="white" />
              </Link>
            </li>
          </ul>
        </div>
        <p>
          주어진 시간과 리소스 내에서 기획과 디자이너가 전달한 모든 것을 그대로
          구현하는 것이 어려운 경우가 많습니다. 개발자의 상황을 온전히 모르기
          때문에 비개발 직군에서 &quot;무리해보이는 요구&quot;를 할 때도
          있습니다. 그 요구에 대해 &quot;무조건적인 YES 또는 NO&quot;를 외치지
          않습니다. 그들이 이 기획과 디자인을 통해 얻고자 하는 것과 목표가
          무엇인지 명확하게 하고, 그걸 해결할 수 있는 방법을 제시하기 위한
          대화를 합니다.
        </p>
      </Section>
      <Section>
        <SectionTitle title="경력" />
        <ul className="flex items-center gap-x-1 overflow-auto">
          <li className="text-center py-1 px-2 rounded bg-lime-500/30 text-gray-700 whitespace-pre">
            React
          </li>
          <li className="text-center py-1 px-2 rounded bg-lime-500/30 text-gray-700 whitespace-pre">
            Next
          </li>
          <li className="text-center py-1 px-2 rounded bg-lime-500/30 text-gray-700 whitespace-pre">
            GraphQL
          </li>
          <li className="text-center py-1 px-2 rounded bg-lime-500/30 text-gray-700 whitespace-pre">
            Apollo Client
          </li>
          <li className="text-center py-1 px-2 rounded bg-lime-500/30 text-gray-700 whitespace-pre">
            python
          </li>
          <li className="text-center py-1 px-2 rounded bg-lime-500/30 text-gray-700 whitespace-pre">
            pandas
          </li>
        </ul>
        <ul className="flex flex-col gap-y-[1px] bg-slate-100">
          <li className="flex flex-col gap-y-1 py-3 px-2 bg-white">
            <span className="text-sm text-gray-400">2022.07 ~</span>
            <div className="flex flex-col">
              <span className="font-bold">
                오토피디아(닥터차 서비스 운영사)
              </span>
              <span>엔지니어</span>
            </div>
          </li>
          <li className="flex flex-col gap-y-1 py-3 px-2 bg-white">
            <span className="text-sm text-gray-400">2022.07 ~</span>
            <div className="flex flex-col">
              <span className="font-bold">
                오토피디아(닥터차 서비스 운영사)
              </span>
              <span>엔지니어</span>
            </div>
          </li>
          <li className="flex flex-col gap-y-1 py-3 px-2 bg-white">
            <span className="text-sm text-gray-400">2022.07 ~</span>
            <div className="flex flex-col">
              <span className="font-bold">
                오토피디아(닥터차 서비스 운영사)
              </span>
              <span>엔지니어</span>
            </div>
          </li>
        </ul>
      </Section>
      <Section>
        <SectionTitle
          title="최근 활동"
          right={
            <Link href="/activities" className="flex items-center gap-x-1">
              <span className="text-gray-400 text-sm">모두 보기</span>
              <ChevronRight className="text-gray-400" width={14} height={14} />
            </Link>
          }
        />
        <ul className="flex gap-x-3 overflow-auto">
          <li className="w-32 flex flex-col gap-y-2.5 shrink-0">
            <div className="relative overflow-hidden rounded w-full h-40 bg-lime-200 border border-solid border-gray-100" />
            <div className="flex flex-col gap-y-2">
              <span className="py-1 px-2 rounded bg-lime-500/30 text-center w-fit">
                진행 중
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700">타이어 커머스</span>
                <span className="text-sm text-gray-400">프론트엔드, 기획</span>
              </div>
            </div>
          </li>
          <li className="w-32 flex flex-col gap-y-2.5 shrink-0">
            <div className="relative overflow-hidden rounded w-full h-40 bg-lime-200 border border-solid border-gray-100" />
            <div className="flex flex-col gap-y-2">
              <span className="py-1 px-2 rounded bg-lime-500/30 text-center w-fit">
                진행 중
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700">타이어 커머스</span>
                <span className="text-sm text-gray-400">프론트엔드, 기획</span>
              </div>
            </div>
          </li>
          <li className="w-32 flex flex-col gap-y-2.5 shrink-0">
            <div className="relative overflow-hidden rounded w-full h-40 bg-lime-200 border border-solid border-gray-100" />
            <div className="flex flex-col gap-y-2">
              <span className="py-1 px-2 rounded bg-lime-500/30 text-center w-fit">
                진행 중
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700">타이어 커머스</span>
                <span className="text-sm text-gray-400">프론트엔드, 기획</span>
              </div>
            </div>
          </li>
          <li className="w-32 flex flex-col gap-y-2.5 shrink-0">
            <div className="relative overflow-hidden rounded w-full h-40 bg-lime-200 border border-solid border-gray-100" />
            <div className="flex flex-col gap-y-2">
              <span className="py-1 px-2 rounded bg-lime-500/30 text-center w-fit">
                진행 중
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700">타이어 커머스</span>
                <span className="text-sm text-gray-400">프론트엔드, 기획</span>
              </div>
            </div>
          </li>
        </ul>
      </Section>
      <Section>
        <SectionTitle
          title="블로그"
          right={
            <Link href="/posts" className="flex items-center gap-x-1">
              <span className="text-gray-400 text-sm">모두 보기</span>
              <ChevronRight className="text-gray-400" width={14} height={14} />
            </Link>
          }
        />
        <ul>
          <li>
            <span>2020.02.02</span>
            <div>
              <div />
              <div>
                <span>React Router Dom v6가 되면서 변경된 것</span>
                <span>velog</span>
              </div>
            </div>
          </li>
        </ul>
      </Section>
      <Section>
        <SectionTitle title="학력" />
        <ul>
          <li>
            <span>2020.02.02 ~ 0000.00.00</span>
            <div>
              <span>중앙대학교 졸업</span>
              <span>경영학 전공</span>
            </div>
          </li>
        </ul>
      </Section>
    </main>
  );
}
