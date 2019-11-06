require('dotenv').config()
const Subscription = require('./resolvers/Subscription')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}
type Mutation {
  post(url: String!, description: String!): Link!
}
type Link {
    id: ID!
    description: String!
    url: String!
  }
`
//simple in memory storage for GraphQL to link 
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]
  // 2
let idCount = links.length
const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },})
server.start(() => console.log(`Server is running on http://localhost:4000`))
