/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChatRoomUserByUserId = /* GraphQL */ `
  subscription OnCreateChatRoomUserByUserId($userId: ID!) {
    onCreateChatRoomUserByUserId(userId: $userId) {
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
export const onDeleteChatRoomUserByUserId = /* GraphQL */ `
  subscription OnDeleteChatRoomUserByUserId($userId: ID!) {
    onDeleteChatRoomUserByUserId(userId: $userId) {
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
export const onCreateChatRoomUserByChatRoomId = /* GraphQL */ `
  subscription OnCreateChatRoomUserByChatRoomId($chatRoomId: ID!) {
    onCreateChatRoomUserByChatRoomId(chatRoomId: $chatRoomId) {
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
export const onDeleteChatRoomUserByChatRoomId = /* GraphQL */ `
  subscription OnDeleteChatRoomUserByChatRoomId($chatRoomId: ID!) {
    onDeleteChatRoomUserByChatRoomId(chatRoomId: $chatRoomId) {
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
export const onCreateContactByFolloweeId = /* GraphQL */ `
  subscription OnCreateContactByFolloweeId($followeeId: ID!) {
    onCreateContactByFolloweeId(followeeId: $followeeId) {
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
export const onDeleteContactByFolloweeId = /* GraphQL */ `
  subscription OnDeleteContactByFolloweeId($followeeId: ID!) {
    onDeleteContactByFolloweeId(followeeId: $followeeId) {
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
export const onCreateContactByFollowerId = /* GraphQL */ `
  subscription OnCreateContactByFollowerId($followerId: ID!) {
    onCreateContactByFollowerId(followerId: $followerId) {
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
export const onDeleteContactByFollowerId = /* GraphQL */ `
  subscription OnDeleteContactByFollowerId($followerId: ID!) {
    onDeleteContactByFollowerId(followerId: $followerId) {
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
export const onCreateMessageByChatRoomId = /* GraphQL */ `
  subscription OnCreateMessageByChatRoomId($chatRoomId: ID!) {
    onCreateMessageByChatRoomId(chatRoomId: $chatRoomId) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
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
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
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
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
