# Express-GraphQL-API

#### Explain shortly about GraphQL, its purpose and some of its use cases
GraphQl is a query language for APIs, to communicate between client and API. It is like REST, but more effecient. Instead of fetching a whole User GraphQL can fetch specific parts of the user.

**GraphQL Query**
```js
type Query {
    Users {
        firstname
        age
    }
}
```

**Query Response**
```js
"data": {
    Users: [
        { firstname: "aaaa", age: 20 },
        { firstname: "bbbb", age: 21 },
        { firstname: "cccc", age: 22 },
    ]
}
```

#### Explain some of the Server Architectures that can be implemented with a GraphQL backend


#### What is meant by the terms over- and under-fetching in relation to REST
**Over-fetching** is fetching more data than you need and therefore creates unnecessary serverload.
**Under-fetching** is not fetching enough data with a call to an endpoint, leading you to call a second endpoint ect. and therefore creates unnecessary serverload.

#### Explain shortly about GraphQL’s type system and some of the benefits we get from this

GraphQL comes with a set of default scalar types out of the box:
* **Int**: A signed 32‐bit integer.
* **Float**: A signed double-precision floating-point value.
* **String**: A UTF‐8 character sequence.
* **Boolean**: true or false.
* **ID**: The ID is an unique identifier, often used to refetch an object. 

It is possible to create custom GraphQL Object Types. These can be used within other objects, with custom features like the `!` that indicates the value not can be `null`.

```js
type Person {
    name: String!
    age: Int!
    friends: [Person!]
}
```

#### Explain shortly about GraphQL Schema Definition Language, and provide a number of examples of schemas you have defined.

To make schemas you simply have to make a `type` with the wanted name and properties.

```js
type User {
    firstname: String!
    lastname: String!
    age: int!
    gender: Enum
    email: String!
}
```

#### Provide a number of examples demonstrating data fetching with GraphQL. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client


#### Provide a number of examples demonstrating creating, updating and deleting with Mutations. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client.


#### Explain the Concept of a Resolver function, and provide a number of simple examples of resolvers you have implemented in a GraphQL Server.


#### Explain the benefits we get from using a library like Apollo-client, compared to using the plain fetch-API


#### In an Apollo-based React Component, demonstrate how to perform GraphQL Queries, including:
* Explain the structure of the Query Component
* Explain the purpose of ApolloClient and the ApolloProvider component
* Explain the purpose of the gql-function (imported from graphql-tag)


#### In an Apollo-based React Component, demonstrate how to perform GraphQL Mutations?


#### Demonstrate and highlight important parts of a “complete” GraphQL-app using Express and MongoDB on the server side, and Apollo-Client on the client.
