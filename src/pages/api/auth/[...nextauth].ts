import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import OktaProviders from 'next-auth/providers/okta';

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    OktaProviders({
      clientId: process.env.OKTA_CLIENT_ID,
      clientSecret: process.env.OKTA_CLIENT_SECRET,
      issuer: process.env.OKTA_ISSUER,
      redirectUri: "http://localhost:3000/",
    })
    // ...add more providers here
  ],
  secret: process.env.SESSION_SECRET,
  debug: true,
  callbacks: {
    redirect(params) {
        console.log(params)
    },

  },
  events: {
    signIn(params) {
      console.log(params)
    }
  },
  
} as NextAuthOptions;

// eslint-disable-next-line import/no-anonymous-default-export
export default async function auth(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log(process.env.NEXTAUTH_URL)
  return NextAuth(req, res, authOptions);
};
