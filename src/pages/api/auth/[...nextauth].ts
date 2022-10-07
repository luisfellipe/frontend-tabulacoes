import {
  OktaAuth,
  OktaAuthOptions,
  TokenManager,
  AccessToken,
  IDToken,
  UserClaims,
  TokenParams
} from '@okta/okta-auth-js'

const config: OktaAuthOptions = {
  issuer: process.env.OKTA_DOMAIN,
  clientId: process.env.OKTA_CLIENT_ID,
  clientSecret: process.env.OKTA_CLIENT_SECRET,
  redirectUri:  window.location.origin + 'login/callback',
  responseType: 'code',
  pkce: false
}

var authClient = new OktaAuth(config);