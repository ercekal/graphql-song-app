import { gql } from "apollo-boost";

export default gql`
  mutation ($id: ID!) {
    deleteLyric(id: $id) {
      id
    }
  }
`;