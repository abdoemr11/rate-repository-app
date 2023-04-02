import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query Repositories {
    repositories {
      edges {
        
        node {
          fullName
          forksCount
          description
          id
          language
          name
          reviewCount
          url
          ownerAvatarUrl
        }
      }
    }
  }
  
  
`

export const GET_USER = gql`

{
  me {
    id
    username
  }
}
`