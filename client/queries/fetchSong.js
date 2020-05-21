import { gql } from "apollo-boost";

export default gql`
  query getSong($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;