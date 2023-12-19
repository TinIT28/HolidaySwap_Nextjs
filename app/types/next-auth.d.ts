import NextAuth from "next-auth/next";
import GetCurrentUser from "../actions/getCurrentUser";

declare module "next-auth" {
  const currentUser = await GetCurrentUser();
  interface Session {
    user: {
      access_token: string;
      exp: number;
      iat: number;
      jti: string;
      refresh_token: string;
      email: string;
      currentUser: any;
    };
  }
}
