export const schema = gql`
  type Sponsor {
    id: Int!
    name: String!
  }

  type Query {
    sponsors: [Sponsor!]!
    sponsor(id: Int!): Sponsor!
  }

  input CreateSponsorInput {
    name: String!
  }

  input UpdateSponsorInput {
    name: String
  }

  type Mutation {
    createSponsor(input: CreateSponsorInput!): Sponsor!
    updateSponsor(id: Int!, input: UpdateSponsorInput!): Sponsor!
    deleteSponsor(id: Int!): Sponsor!
  }
`
