const { GraphQLServer } = require('graphql-yoga')


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
const resolvers = {
  Query: {
    info: () => `This is the app`,
// feed will retrieve. links has to be the same name as the memory storage.
    feed: () => links,
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))