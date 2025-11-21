import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

const users = [
    { id: '1', name: 'Alice', age: 30, isMarried: false },
    { id: '2', name: 'Bob', age: 25, isMarried: true },
    { id: '3', name: 'Charlie', age: 35, isMarried: false }
];


const typeDefs = `
    type Query {
        getUsers: [User]
        getUserById(id: ID!): User
    }

    type Mutation {
        createUser(name: String!, age: Int!, isMarried: Boolean!): User
    }

    type User {
        id: ID,
        name: String
        age: Int
        isMarried: Boolean
    }
    `
const resolvers = ''

const server = new ApolloServer({ typeDefs, resolvers })

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log("Server running at: " + url)