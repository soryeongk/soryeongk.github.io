import axios from "axios";

const baseInstance = axios.create({
  baseURL: `${process.env.SERVER_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// client side base instance (default)
// 로컬스토리지 접근이 가능하고 token이 필요한 api 호출에서 사용
baseInstance.interceptors.request.use((config) => {
  const headers = {
    ...config.headers,
  };
  return { ...config, headers };
});

baseInstance.interceptors.response.use((response) => {
  return response.data;
});

const githubInstance = axios.create({
  baseURL: `${process.env.SERVER_GITHUB_USER_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { baseInstance, githubInstance };
