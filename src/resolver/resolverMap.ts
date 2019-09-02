// resolverMap.ts
import { IResolvers, buildSchemaFromTypeDefinitions } from 'graphql-tools';
import { User } from '../entity/User';
import { userInfo } from 'os';
 
const resolvers: IResolvers = {
  Query: {
    me: (_, __, {req}) => {
      const id = req.session.userId
      if(id != null){
        return User.findOne(id)
      } else {
        return null
      }
    },
  },
  Mutation: {
    register: async (_, { name ,email, password }) => {
      const user = new User();
      user.name = name;
      user.email = email;
      user.password = password;
      user.hashPassword();
      try {
        await user.save();
      } catch (e) {
        return false;
      }
      return true;
    },
    login: async (_, { email, password }, {req}) =>{
      try {
        const user = await User.findOneOrFail({ where: {email: email} });
        if(user.checkIfUnencryptedPasswordIsValid(password)){
          req.session.userId = user.id; 
          return user;
        } else {
          return null;
        }
      } catch (e) {
        return null;
      }
    }
  }
};
export default resolvers;