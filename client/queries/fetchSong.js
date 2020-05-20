import { gql } from "apollo-boost";

export default gql`
  {
    song($id: ID!) {
      id
      title
      lyrics
    }
  }
`;