import { gql } from "apollo-boost";

export default  gql`
  mutation ($id: ID!) {
    deleteSong(id: $id) {
      title
    }
  }
`;