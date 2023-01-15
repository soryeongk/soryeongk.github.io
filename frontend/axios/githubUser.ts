import { githubInstance } from ".";

const getGithubUser = async (userId: string) => {
  return await githubInstance.get(userId);
};

const getMyGithubInfo = async () => {
  const { data } = await getGithubUser("soryeongk");
  return data;
};

export { getMyGithubInfo };
