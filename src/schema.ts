// schema.ts
import 'graphql-import-node';
import {typeDefs} from './schema/typeDefs';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver/resolverMap';
import { GraphQLSchema } from 'graphql';


const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default schema;