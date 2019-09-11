// resolverMap.ts
import { IResolvers, buildSchemaFromTypeDefinitions } from 'graphql-tools';
import { User } from '../../../entity/User';
import {isAuthenticated} from '../../shared/isAuthenticated'

export const resolvers: IResolvers = {
  Query: {
    me: async(_, __, {req}) => {
      console.log('ee')

      console.log(req)
    //  isAuthenticated(req.session)

      const id = req.session.userId
      if(id != null){
        return await User.findOne(id)
      } else {
        return null
      }
    },
  },
};
