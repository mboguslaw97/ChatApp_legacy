const gql = require('graphql-tag');

module.exports.getPushTokensQuery = chatRoomId => gql`
  query MyQuery {
    getChatRoom(id: "${chatRoomId}") {
      chatRoomUsers {
        items {
          user {
            pushToken
          }
          userId
        }
      }
    }
  }
`;

module.exports.getUserQuery = userId => gql`
  query MyQuery {
    getUser(id: "${userId}") {
      name
    }
  }
`;