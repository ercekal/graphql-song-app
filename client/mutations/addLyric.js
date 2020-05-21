import { gql } from "apollo-boost";

export default  gql`
  mutation ADD_LYRIC($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;