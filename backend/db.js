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
    type Subscription {
        postCreated: Post
    }
`;
  
const resolvers = {
    Query: {
        books: () => books,
    },
    Subscription: {
        hello: {
          // Example using an async generator
          subscribe: async function* () {
            for await (const word of ['Hello', 'Bonjour', 'Ciao']) {
              yield { hello: word };
            }
          },
        },
        postCreated: {
          // More on pubsub below
          subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
        },
      },
};

export {typeDefs, resolvers}