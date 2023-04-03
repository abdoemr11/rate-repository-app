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

export const GET_REPOSITORY = gql`
query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    ownerName
    name
    createdAt
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    watchersCount
    forksCount
    openIssuesCount
    url
    ownerAvatarUrl
    description
    language
    userHasReviewed
  }
}`