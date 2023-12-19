import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "axios";

const useAxiosAuth = async () => {
  const session = await getServerSession(authOptions);
  const accessToken = session?.user?.access_token;
  const BASE_URL = "https://holiday-swap.click/api/v1";

  // Create a new instance of Axios with the interceptor
  const axiosWithAuth = axios.create({
    baseURL: BASE_URL,
  });

  axiosWithAuth.interceptors.request.use((config) => {
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  });

  return axiosWithAuth;
};

export default useAxiosAuth;
