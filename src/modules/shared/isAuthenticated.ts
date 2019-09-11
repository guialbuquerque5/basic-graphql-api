import { Session } from "../../types/graphql-utils";

export const isAuthenticated = (session: Session) =>{
  console.log(session.userId)
  if (!session.userId) {
    //throw new Error("not authenticated");
    console.log("not authenticated");
  }
  return
};