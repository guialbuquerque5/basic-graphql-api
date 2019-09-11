import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import * as session from 'express-session';

//import schema from './schema'
import {genSchema} from './utils/typeDefs'
//import schema from './schema'

const schema = genSchema();


const startServer = async () => {

  const server = new ApolloServer({
    schema,
    validationRules: [],
    context: ({ req }: any )=> ({req})
  });

  await createConnection();

  const app = express();

  app.use(
    session({
      secret: "eoq",
      resave: false,
      saveUninitialized: false
    })
  );

  server.applyMiddleware({
    app, 
    path: '/graphql',
    cors: {
      credentials: true,
      origin: "http://localhost:5000"
    }
  
  });



  app.listen({ port: 3000 }, (): void => 
    console.log(`\n🚀   GraphQL is now running on http://localhost:3000/graphql`)
  );
};

startServer();
