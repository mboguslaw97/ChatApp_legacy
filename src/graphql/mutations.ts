/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
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
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
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
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
