import Image from "next/image";
import { useQuery } from "react-query";

import { getMyGithubInfo } from "../../axios/githubUser";
import { QUERY_KEY } from "../../axios/types";

const ProfileSection = () => {
  const { data } = useQuery({
    queryKey: QUERY_KEY.GithubUser,
    queryFn: getMyGithubInfo,
    suspense: true,
  });

  return (
    <div className="flex flex-col items-center gap-y-4 py-3 bg-gray-100 w-full">
      <div className="relative w-[300px] h-[300px] border border-gray-500 rounded-full overflow-hidden">
        <Image
          src={
            data?.avatar_url ||
            "https://avatars.githubusercontent.com/u/40630964?v=4"
          }
          alt="프로필 사진"
          fill
          sizes="300px"
        />
      </div>
      <div className="flex items-end">
        <h1 className="text-3xl font-bold">김소령</h1>
        {data?.bio && <h2 className="text-lg">: {data.bio}</h2>}
      </div>
    </div>
  );
};

export default ProfileSection;
