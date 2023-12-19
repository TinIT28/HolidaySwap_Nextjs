"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";

const useAxiosAuthClient = () => {
  const { data: session } = useSession();

  const BASE_URL = "https://holiday-swap.click/api/v1";

  // Create a new instance of Axios with the interceptor
  const axiosWithAuth = axios.create({
    baseURL: BASE_URL,
  });

  useEffect(() => {
    const requestIntercept = axiosWithAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers[
            "Authorization"
          ] = `Bearer ${session?.user.access_token}`;
        }
        return config;
      }
    );

    return () => {
      axiosWithAuth.interceptors.request.eject(requestIntercept);
    };
  }, [session]);

  return axiosWithAuth;
};

export default useAxiosAuthClient;
