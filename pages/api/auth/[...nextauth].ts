import NextAuth, { AuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import axios from 'axios';
import CredentialsProvider from 'next-auth/providers/credentials';
import GetCurrentUser from '@/app/actions/getCurrentUser';

export async function getSession() {
  return await getServerSession(authOptions);
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'text' },
      },
      async authorize(credentails) {
        const { email, password } = credentails as {
          email: string;
          password: string;
        };

        if (!email && !password) {
          throw new Error('Invalid credentails');
        }

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.post(
          `${process.env.API_URL}/auth/login`,
          { email, password },
          config
        );

        return data;
      },
    }),
  ],
  session: {
    maxAge: 3 * 60 * 60,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        return true;
      }

      return false;
    },

    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },

    async jwt({ token, user, account }) {
      return { ...token, ...user };
    },
  },
  secret: process.env.NEXT_AUTH,
};

export default NextAuth(authOptions);
