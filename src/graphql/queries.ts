/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
      followee {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
      follower {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
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
        followeeId
        followerId
        id
        createdAt
        updatedAt
        owner
        followee {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
        follower {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      chatRoomId
      content
      createdAt
      id
      type
      userId
      updatedAt
      chatRoom {
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
        owner
        chatRoomUsers {
          nextToken
        }
      }
      owner
      user {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
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
        chatRoomId
        content
        createdAt
        id
        type
        userId
        updatedAt
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
          owner
        }
        owner
        user {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
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
        followeeId
        followerId
        id
        createdAt
        updatedAt
        owner
        followee {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
        follower {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
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
        followeeId
        followerId
        id
        createdAt
        updatedAt
        owner
        followee {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
        follower {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
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
        chatRoomId
        content
        createdAt
        id
        type
        userId
        updatedAt
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
          owner
        }
        owner
        user {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
          owner
        }
        nextToken
      }
      name
      createdAt
      updatedAt
      owner
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
        owner
        chatRoomUsers {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
        owner
        chatRoomUsers {
          nextToken
        }
      }
      owner
      user {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
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
        chatRoomId
        id
        isModerator
        userId
        createdAt
        updatedAt
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
          owner
        }
        owner
        user {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
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
        chatRoomId
        id
        isModerator
        userId
        createdAt
        updatedAt
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
          owner
        }
        owner
        user {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
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
        chatRoomId
        id
        isModerator
        userId
        createdAt
        updatedAt
        chatRoom {
          id
          maxUsers
          name
          createdAt
          updatedAt
          owner
        }
        owner
        user {
          avatar
          bio
          displayName
          id
          name
          pushToken
          createdAt
          updatedAt
          owner
        }
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
      displayName
      followees {
        items {
          followeeId
          followerId
          id
          createdAt
          updatedAt
          owner
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
          owner
        }
        nextToken
      }
      id
      name
      pushToken
      createdAt
      updatedAt
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
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
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
