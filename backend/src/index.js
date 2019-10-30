require('dotenv').config()

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
  Query: {
    info: () => `This is the app`,
// feed will retrieve. links has to be the same name as the memory storage.
// feed now receiving 4 arguments.
    feed: (root, args, context, info) => {
      return context.prisma.links()
    },
  },
  Mutation: {
    post: (parent, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
  },
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