let { resolvers } = require('./resolvers');
let { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
    type User {
        _id: ID
        firstName: String!
        lastName: String!
        username: String!
        password: String!
        email: String!
        created: String
        lastUpdated: String
    }

    type Position {
        longitude: Int!
        latitude: Int!
    }

    type LocationBlog {
        _id: ID
        info: String!
        img: String
        pos: Position!
        author: String!
        likedBy: [String!]
        created: String
        lastUpdated: String
    }

    type Friend {
        username: String!
        latitude: Float!
        longitude: Float!
    }

    type Query {
        getAllUsers: [User]
        getUserByID(_id: ID!): User
        getUserByUsername(username: String!): User

        getAllLocationBlogs: [LocationBlog]
        getLocationBlogByID(_id: ID!): LocationBlog
        getLocationBlogByInfo(info: String!): [LocationBlog]
    }

    type Mutation {
        createUser(input: UserInput): User
        login(input: LoginInput): [Friend]
        createLocationBlog(input: LocationBlogInput): LocationBlog
        likeLocationBlog(userId: String!, locationId: String!): LocationBlog
    }

    input UserInput {
        _id: ID
        firstName: String!
        lastName: String!
        username: String!
        password: String!
        email: String!
    }

    input LoginInput {
        username: String!
        password: String!
		longitude: Float!
		latitude: Float!
		distance: Int!
    }

    input LocationBlogInput {
        _id: ID
        info: String!
        pos: PositionInput
        author: String!
    }

    input PositionInput {
        longitude: Float!
        latitude: Float!
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = { schema };
