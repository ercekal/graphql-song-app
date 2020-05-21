import { gql } from "apollo-boost";

export default  gql`
  mutation ($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;