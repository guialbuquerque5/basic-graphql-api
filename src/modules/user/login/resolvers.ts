// resolverMap.ts
import { IResolvers, buildSchemaFromTypeDefinitions } from 'graphql-tools';
import { User } from '../../../entity/User';
import {
  invalidLogin,
  confirmEmailError,
  forgotPasswordLockedError
} from "./errorMessages";

const errorResponse = [
  {
    path: "email",
    message: invalidLogin
  }
];


export const resolvers: IResolvers = {
  Mutation: {
    login: async (_, { email, password }, {req}) =>{
      try {
        const user = await User.findOneOrFail({ where: {email: email} });
        if(user.checkIfUnencryptedPasswordIsValid(password)){
          req.session.userId = user.id; 
          return { sessionId: req.sessionID };
        } else {
          return { errors: errorResponse };
        }
      } catch {
        return { errors: errorResponse };
      }
    }
  }
};
