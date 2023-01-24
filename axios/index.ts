import axios from "axios";

const baseInstance = axios.create({
  baseURL: "http://54.180.156.29:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

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
  baseURL: "https://api.github.com/users/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { baseInstance, githubInstance };
