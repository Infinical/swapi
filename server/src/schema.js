const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema will go here

  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type People {
    count: String
    next: String
    previous: String
    results: [Person]
  }

  type Query {
    people(name: String, page: String): People
    person: Person
  }
`;

module.exports = typeDefs;
