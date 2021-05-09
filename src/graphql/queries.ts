/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      maxUsers
      messages {
        items {
          chatRoomId
          content
          createdAt
          id
          type
          userId
          updatedAt
        }
        nextToken
      }
      name
      createdAt
      updatedAt
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        chatRoomUsers {
          nextToken
        }
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      chatRoom {
        chatRoomUsers {
          nextToken
        }
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
      }
      chatRoomId
      id
      isModerator
      user {
        avatar
        bio
        chatRoomUsers {
          nextToken
        }
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        status
        createdAt
        updatedAt
      }
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
        }
        chatRoomId
        id
        isModerator
        user {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      followee {
        avatar
        bio
        chatRoomUsers {
          nextToken
        }
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        status
        createdAt
        updatedAt
      }
      followeeId
      follower {
        avatar
        bio
        chatRoomUsers {
          nextToken
        }
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        status
        createdAt
        updatedAt
      }
      followerId
      id
      createdAt
      updatedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        followee {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        followeeId
        follower {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        followerId
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      chatRoom {
        chatRoomUsers {
          nextToken
        }
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
      }
      chatRoomId
      content
      createdAt
      id
      type
      user {
        avatar
        bio
        chatRoomUsers {
          nextToken
        }
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        status
        createdAt
        updatedAt
      }
      userId
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
        }
        chatRoomId
        content
        createdAt
        id
        type
        user {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        userId
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      avatar
      bio
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      displayName
      followees {
        items {
          followeeId
          followerId
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          followeeId
          followerId
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      id
      name
      status
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        avatar
        bio
        chatRoomUsers {
          nextToken
        }
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const chatRoomUsersByUser = /* GraphQL */ `
  query ChatRoomUsersByUser(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomUsersByUser(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
        }
        chatRoomId
        id
        isModerator
        user {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const chatRoomUsersByChatRoom = /* GraphQL */ `
  query ChatRoomUsersByChatRoom(
    $chatRoomId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomUsersByChatRoom(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
        }
        chatRoomId
        id
        isModerator
        user {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contactsByFollower = /* GraphQL */ `
  query ContactsByFollower(
    $followerId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactsByFollower(
      followerId: $followerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        followee {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        followeeId
        follower {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        followerId
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contactsByFollowee = /* GraphQL */ `
  query ContactsByFollowee(
    $followeeId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactsByFollowee(
      followeeId: $followeeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        followee {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        followeeId
        follower {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        followerId
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomId: $chatRoomId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
        }
        chatRoomId
        content
        createdAt
        id
        type
        user {
          avatar
          bio
          displayName
          id
          name
          status
          createdAt
          updatedAt
        }
        userId
        updatedAt
      }
      nextToken
    }
  }
`;
