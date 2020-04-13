import SearchStore from "./SearchStore";
import { createContext } from "react";
import ApolloClient from "apollo-boost";
import { GET_ALL_USERS, ADD_USER } from "../queries/Queries";

export default class RootStore {
  searchStore: SearchStore = new SearchStore(this);
  client = new ApolloClient({
    uri: "http://localhost:8080/v1/graphql",
    fetchOptions: {
      fetchOptions: "no-cache",
    },
  });

  listUsers = async () => {
    return this.client.query({ query: GET_ALL_USERS, fetchPolicy: "no-cache" });
  };
  addUser = async (name: string, age: number) => {
    return this.client.mutate({
      mutation: ADD_USER,
      variables: { name: name, age: age },
    });
  };
}

export const rootStore = createContext(new RootStore());
