import { gql } from "apollo-boost";

export const GET_ALL_USERS = gql`
  query {
    user {
      id
      name
      age
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($name: String, $age: Int) {
    insert_user(objects: { name: $name, age: $age }) {
      affected_rows
    }
  }
`;
