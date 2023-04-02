import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql `
mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
  
    }
  }
  
  
`