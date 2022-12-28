export const userTypeDef = `
type User {
    id: ID!
    email: String!
    hash: String!
    salt: String!
}
input UserInput {
    email : String!
    password : String!
}
type Query{
    greet: String!
}
type Mutation{
    createUser(input:UserInput): User
}
schema {
    query: Query
    mutation: Mutation
}
`;
