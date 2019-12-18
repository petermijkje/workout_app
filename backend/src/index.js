require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

//simple in memory storage for GraphQL to link 
let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]
  // 2
let idCount = links.length
const resolvers = {
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
