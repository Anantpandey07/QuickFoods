import { auth } from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});
// verify that the token we get belongs to loged-in user or not