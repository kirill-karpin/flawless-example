const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers = {
  Query: {
    books: (): any => books,
  },
  Mutation: {
    singIn: (parent: any, args: any): any => {
      const {
        input: { login, password },
      } = args;
      if (login === 'admin' && password === 'admin') {
        return {
          token: 'secret_token',
        };
      } else {
        throw new Error('Incorrect user password');
      }
    },
  },
};
