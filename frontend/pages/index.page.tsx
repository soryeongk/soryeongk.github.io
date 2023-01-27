import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { RecoilRoot } from "recoil";

import { getMyGithubInfo } from "../axios/githubUser";
import { QUERY_KEY } from "../axios/types";
import Layout from "../components/Layout";

import Activities from "./index/Activities";
import Navigation from "./index/Navigation";

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
        <RecoilRoot>
          <Navigation />
          <Activities />
        </RecoilRoot>
      </div>
    </Layout>
  );
}
