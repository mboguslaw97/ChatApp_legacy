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
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
export const onDeleteChatRoomUserByUserId = /* GraphQL */ `
  subscription OnDeleteChatRoomUserByUserId($userId: ID!) {
    onDeleteChatRoomUserByUserId(userId: $userId) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
export const onCreateChatRoomUserByChatRoomId = /* GraphQL */ `
  subscription OnCreateChatRoomUserByChatRoomId($chatRoomId: ID!) {
    onCreateChatRoomUserByChatRoomId(chatRoomId: $chatRoomId) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
export const onDeleteChatRoomUserByChatRoomId = /* GraphQL */ `
  subscription OnDeleteChatRoomUserByChatRoomId($chatRoomId: ID!) {
    onDeleteChatRoomUserByChatRoomId(chatRoomId: $chatRoomId) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
export const onCreateContactByFolloweeId = /* GraphQL */ `
  subscription OnCreateContactByFolloweeId($followeeId: ID!) {
    onCreateContactByFolloweeId(followeeId: $followeeId) {
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
export const onDeleteContactByFolloweeId = /* GraphQL */ `
  subscription OnDeleteContactByFolloweeId($followeeId: ID!) {
    onDeleteContactByFolloweeId(followeeId: $followeeId) {
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
export const onCreateContactByFollowerId = /* GraphQL */ `
  subscription OnCreateContactByFollowerId($followerId: ID!) {
    onCreateContactByFollowerId(followerId: $followerId) {
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
export const onDeleteContactByFollowerId = /* GraphQL */ `
  subscription OnDeleteContactByFollowerId($followerId: ID!) {
    onDeleteContactByFollowerId(followerId: $followerId) {
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
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      isPublic
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
      tags
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      isPublic
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
      tags
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      isPublic
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
      tags
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
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        isPublic
        maxUsers
        messages {
          nextToken
        }
        name
        tags
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
