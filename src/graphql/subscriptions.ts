/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChatRoomUserByUserId = /* GraphQL */ `
  subscription OnCreateChatRoomUserByUserId($userId: ID!) {
    onCreateChatRoomUserByUserId(userId: $userId) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChatRoomUserByUserId = /* GraphQL */ `
  subscription OnDeleteChatRoomUserByUserId($userId: ID!) {
    onDeleteChatRoomUserByUserId(userId: $userId) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateChatRoomUserByChatRoomId = /* GraphQL */ `
  subscription OnCreateChatRoomUserByChatRoomId($chatRoomId: ID!) {
    onCreateChatRoomUserByChatRoomId(chatRoomId: $chatRoomId) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChatRoomUserByChatRoomId = /* GraphQL */ `
  subscription OnDeleteChatRoomUserByChatRoomId($chatRoomId: ID!) {
    onDeleteChatRoomUserByChatRoomId(chatRoomId: $chatRoomId) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateContactByFolloweeId = /* GraphQL */ `
  subscription OnCreateContactByFolloweeId($followeeId: ID!) {
    onCreateContactByFolloweeId(followeeId: $followeeId) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteContactByFolloweeId = /* GraphQL */ `
  subscription OnDeleteContactByFolloweeId($followeeId: ID!) {
    onDeleteContactByFolloweeId(followeeId: $followeeId) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateContactByFollowerId = /* GraphQL */ `
  subscription OnCreateContactByFollowerId($followerId: ID!) {
    onCreateContactByFollowerId(followerId: $followerId) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteContactByFollowerId = /* GraphQL */ `
  subscription OnDeleteContactByFollowerId($followerId: ID!) {
    onDeleteContactByFollowerId(followerId: $followerId) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMessageByChatRoomId = /* GraphQL */ `
  subscription OnCreateMessageByChatRoomId($chatRoomId: ID!) {
    onCreateMessageByChatRoomId(chatRoomId: $chatRoomId) {
      chatRoomId
      content
      createdAt
      id
      type
      userId
      updatedAt
      owner
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      chatRoomId
      content
      createdAt
      id
      type
      userId
      updatedAt
      owner
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      chatRoomId
      content
      createdAt
      id
      type
      userId
      updatedAt
      owner
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      chatRoomId
      content
      createdAt
      id
      type
      userId
      updatedAt
      owner
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      isPublic
      maxUsers
      name
      tags
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      isPublic
      maxUsers
      name
      tags
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      isPublic
      maxUsers
      name
      tags
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
`;
