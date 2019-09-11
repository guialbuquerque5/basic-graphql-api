import { mergeTypes, mergeResolvers, fileLoader } from "merge-graphql-schemas";
import * as path from "path";
import { makeExecutableSchema } from "graphql-tools";
import * as glob from "glob";

export const genSchema = () => {
  const pathToModules = path.join(__dirname, "../modules");
  const graphqlTypes = fileLoader(path.join(__dirname, '../modules/**/*.graphql'))
  console.log(graphqlTypes)
  const resolvers = glob
    .sync(`${pathToModules}/**/resolvers.?s`)
    .map(resolver =>resolver = require(resolver).resolvers);

    console.log(resolvers)
  return makeExecutableSchema({
    typeDefs: mergeTypes(graphqlTypes, {all: true}),
    resolvers: mergeResolvers(resolvers)
  });
};