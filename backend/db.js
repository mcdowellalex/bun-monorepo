const books = [
    {
        id: 1,
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];
  
const typeDefs = `#graphql
    type Book {
        id: ID
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`;
  
const resolvers = {
    Query: {
        books: () => books,
    },
};

export {typeDefs, resolvers}