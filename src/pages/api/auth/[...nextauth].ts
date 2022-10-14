import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import OktaProviders from 'next-auth/providers/okta';

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    OktaProviders({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      issuer: process.env.OKTA_DOMAIN,
      redirectUri: 'http://localhost:3000/tabulations',
    })
    // ...add more providers here
  ],
  secret: process.env.SESSION_SECRET,
} as NextAuthOptions;

// eslint-disable-next-line import/no-anonymous-default-export
export default async function auth(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log({res})
  
  return NextAuth(req, res, authOptions);
};
