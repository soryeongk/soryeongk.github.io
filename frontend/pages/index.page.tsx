import Image from "next/image";
import { useQuery } from "react-query";

import { getMyGithubInfo } from "../axios/githubUser";
import { QUERY_KEY } from "../axios/types";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

import Achievements from "./Achievements";
import Career from "./Careers";
import Education from "./Educations";

export default function Home() {
  const { data } = useQuery(QUERY_KEY.GithubUser, getMyGithubInfo);

  return (
    <Layout>
      <div className="flex flex-col items-center gap-y-1">
        <div className="flex flex-col items-center gap-y-4 py-3 bg-gray-100 w-full">
          <div className="relative w-[300px] h-[300px] border border-gray-500 rounded-full overflow-hidden">
            <Image
              src={
                data?.avatar_url ||
                "https://avatars.githubusercontent.com/u/40630964?v=4"
              }
              alt="프로필 사진"
              fill={true}
            />
          </div>
          <div className="flex items-end">
            <h1 className="text-3xl font-bold">김소령</h1>
            {data?.bio && <h2 className="text-lg">: {data.bio}</h2>}
          </div>
        </div>

        <div className="flex flex-col w-full bg-gray-100 ">
          <SectionTitle title="CAREERS" />
          <Career />
        </div>

        <div className="flex flex-col w-full bg-gray-100 ">
          <SectionTitle title="EDUCATIONS" />
          <Education />
        </div>

        <div className="flex flex-col w-full bg-gray-100 ">
          <SectionTitle title="Achievements" />
          <Achievements />
        </div>
      </div>
    </Layout>
  );
}
