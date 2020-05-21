import { gql } from "apollo-boost";

export default gql`
  mutation ($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;