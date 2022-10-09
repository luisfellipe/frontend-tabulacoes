import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import OktaProviders from 'next-auth/providers/okta';

console.log("OKTA_OIDC_CLIENTID", process.env.OKTA_CLIENTID)
console.log("OKTA_DOMAIN", process.env.OKTA_DOMAIN)
const authOptions = {
  // Configure one or more authentication providers
  providers: [
    OktaProviders({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      issuer: process.env.OKTA_DOMAIN,
    })
    // ...add more providers here
  ],
  
} as NextAuthOptions;

// eslint-disable-next-line import/no-anonymous-default-export
export default async function auth(req: NextApiRequest, res: NextApiResponse<any>) {

  return NextAuth(req, res, authOptions);
};
