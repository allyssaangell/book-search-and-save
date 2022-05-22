import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId: ID
        authors: [author]
        description: String
        title: String
        image: Int
        link: [Reaction]
      }
    }
  }
`;