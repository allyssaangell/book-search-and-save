const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [author]
    description: String
    title: String
    image: Int
    link: [Reaction]
  }

  type removeBook {
    bookId: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [author]!, description: String!, title: String!, bookId: ID!, image: image!, link: link!): User
  }
`;

module.exports = typeDefs;
