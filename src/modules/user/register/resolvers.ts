// resolverMap.ts
import { IResolvers, buildSchemaFromTypeDefinitions } from 'graphql-tools';
import { User } from '../../../entity/User';
import { duplicateEmail } from "./errorMessages";

export const resolvers: IResolvers = {
  Mutation: {
    register: async (_, { name ,email, password }) => {
      const user = new User();
      user.name = name;
      user.email = email;
      user.password = password;
      user.hashPassword();
      try {
        await user.save();
        return null;
      } catch (e) {
        return [
          {
            path: "email",
            message: duplicateEmail
          }
        ];;
      }
    }
  }
};
