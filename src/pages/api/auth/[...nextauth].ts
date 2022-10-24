import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions, unstable_getServerSession } from 'next-auth';
import OktaProviders from 'next-auth/providers/okta';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    OktaProviders({
      clientId: process.env.OKTA_CLIENT_ID as string,
      clientSecret: process.env.OKTA_CLIENT_SECRET as string,
      issuer: process.env.OKTA_ISSUER as string
    })
    // ...add more providers here
  ],
  secret: process.env.SECRET as string,
  debug: true,
  callbacks: {
     async redirect({ url, baseUrl }) {
        // Allows relative callback URLs
        if (url.startsWith("/")) return `${baseUrl}${url}`
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url
        return baseUrl
      },
  },
  pages: {
    signIn: "/auth/singin"
  }
} as NextAuthOptions;

// eslint-disable-next-line import/no-anonymous-default-export
export default async function auth(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log(req)
  return NextAuth(req, res, authOptions);
};

